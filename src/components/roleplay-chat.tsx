"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Send, User, Mic, Bot, Sparkles } from 'lucide-react';
import { getRoleplayChatResponse } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { Card, CardContent } from './ui/card';

const RoleplayChatHistorySchema = z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
        text: z.string(),
        role: z.string().optional().describe('The character speaking (e.g., Āchārya Kai, Mitra, Salah). Required if role is model.'),
    }))
}));
type RoleplayChatHistory = z.infer<typeof RoleplayChatHistorySchema>;

const characters = {
  "Āchārya Kai": {
    name: "Āchārya Kai",
    avatar: "https://picsum.photos/id/1005/200/200",
    hint: "wise Indian elder",
    description: "The wise guide",
    fallback: "ĀK",
  },
  "Mitra": {
    name: "Mitra",
    avatar: "https://picsum.photos/id/1011/200/200",
    hint: "warm Indian woman",
    description: "The supportive friend",
    fallback: "M",
  },
  "Salah": {
    name: "Salah",
    avatar: "https://picsum.photos/id/1025/200/200",
    hint: "professional Indian man",
    description: "The pragmatic advisor",
    fallback: "S",
  },
};
type CharacterName = keyof typeof characters;

type Message = {
    id: number;
    text: string;
    sender: 'user' | CharacterName;
};

export default function RoleplayChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [history, setHistory] = useState<RoleplayChatHistory>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleStartConversation = () => {
    setHasStarted(true);
    setMessages([
        { id: 1, text: "Hello! We are here to listen. What's on your mind today?", sender: 'Mitra' }
    ]);
    setHistory([{ role: 'model', content: [{ role: 'Mitra', text: "Hello! We are here to listen. What's on your mind today?" }] }]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userInput = inputValue;
    const newUserMessage: Message = { id: Date.now(), text: userInput, sender: 'user' };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    const newHistory: RoleplayChatHistory = [...history, { role: 'user', content: [{ text: userInput }] }];
    setHistory(newHistory);
    
    try {
        const result = await getRoleplayChatResponse({ userInput, history: newHistory });
        
        if ('error' in result && typeof result.error === 'string') {
            toast({
                variant: 'destructive',
                title: 'AI Error',
                description: result.error,
            });
             const errorMessage: Message = { id: Date.now() + 1, text: "We're having trouble connecting right now. Please try again later.", sender: 'Mitra' };
            setMessages((prev) => [...prev, errorMessage]);
        } else if ('response' in result) {
            const characterName = result.character as CharacterName;
            const aiMessage: Message = { id: Date.now() + 1, text: result.response, sender: characterName };
            setMessages((prev) => [...prev, aiMessage]);

            const updatedHistory: RoleplayChatHistory = [...newHistory, { role: 'model', content: [{ role: characterName, text: result.response }] }];
            setHistory(updatedHistory);
        }
    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'An error occurred',
            description: 'Could not get a response. Please check your connection and try again.',
        });
        const errorMessage: Message = { id: Date.now() + 1, text: "I'm sorry, something went wrong. Please try again in a moment.", sender: 'Mitra' };
        setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  if (!hasStarted) {
    return (
        <div className="flex flex-col h-full items-center justify-center p-4 text-center bg-card rounded-lg border shadow-sm">
            <h1 className="text-3xl font-bold tracking-tight font-headline mb-4">Meet Your Guides</h1>
            <p className="text-muted-foreground mb-8 max-w-2xl">
                You're not alone on this journey. Start a conversation with our team of AI guides. Each has a unique perspective to help you navigate your thoughts and feelings in a safe, supportive space.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12">
                {Object.values(characters).map((char) => (
                    <div key={char.name} className="flex flex-col items-center gap-2">
                        <Avatar className="h-24 w-24 border-4 border-primary/20">
                            <AvatarImage src={char.avatar} alt={char.name} data-ai-hint={char.hint} />
                            <AvatarFallback>{char.fallback}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-lg">{char.name}</h3>
                        <p className="text-muted-foreground text-sm">{char.description}</p>
                    </div>
                ))}
            </div>
            <Button onClick={handleStartConversation} size="lg" className="px-8 py-6 text-lg rounded-full">
                <Mic className="mr-2 h-5 w-5" /> Start Conversation
            </Button>
        </div>
    )
  }

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-h-[calc(100vh-140px)] bg-card rounded-lg border shadow-sm">
        <div className="flex-1 p-4">
            <ScrollArea className="h-full" ref={scrollAreaRef}>
                <div className="space-y-6 pr-4">
                {messages.map((message) => {
                  const character = message.sender !== 'user' ? characters[message.sender] : null;
                  return (
                    <div
                      key={message.id}
                      className={cn('flex items-start gap-3', message.sender === 'user' ? 'justify-end' : 'justify-start')}
                    >
                      {character && (
                          <Avatar className="h-9 w-9 border-2 border-primary/50">
                              <AvatarImage src={character.avatar} alt={character.name} data-ai-hint={character.hint} />
                              <AvatarFallback>{character.fallback}</AvatarFallback>
                          </Avatar>
                      )}
                      <div className="flex flex-col gap-1">
                        {character && <p className="text-xs text-muted-foreground font-semibold">{character.name}</p>}
                        <div className={cn('max-w-xs md:max-w-md lg:max-w-2xl rounded-2xl p-3 text-base', message.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                            {message.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                        </div>
                      </div>
                      {message.sender === 'user' && (
                          <Avatar className="h-9 w-9">
                              <AvatarFallback><User /></AvatarFallback>
                          </Avatar>
                      )}
                    </div>
                  )
                })}
                {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                        <Avatar className="h-9 w-9 border-2 border-primary/50">
                            <AvatarFallback><Sparkles className="text-primary animate-pulse" /></AvatarFallback>
                        </Avatar>
                         <div className="flex flex-col gap-1">
                            <p className="text-xs text-muted-foreground font-semibold">One of our guides is typing...</p>
                            <div className="bg-muted rounded-2xl p-3 rounded-bl-none">
                                <div className="flex items-center space-x-2">
                                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                    <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </ScrollArea>
        </div>
        <Card>
            <CardContent className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Talk with your guides..."
                    className="flex-1"
                    disabled={isLoading}
                    autoComplete="off"
                />
                <Button type="submit" disabled={isLoading || !inputValue.trim()} size="icon">
                    <Send className="h-5 w-5" />
                    <span className="sr-only">Send Message</span>
                </Button>
                </form>
            </CardContent>
        </Card>
    </div>
  );
}
