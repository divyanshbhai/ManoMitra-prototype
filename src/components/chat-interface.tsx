"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Send, Bot, User, Frown, Phone } from 'lucide-react';
import { getCulturallyRelevantResponse } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Card, CardContent } from './ui/card';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
};

type ChatInterfaceProps = {
  userContext?: 'student' | 'employee';
}

export default function ChatInterface({ userContext }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm ManoMitra. How is your mann (mind) today?", sender: 'ai' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCrisis, setIsCrisis] = useState(false);
  const [helplineInfo, setHelplineInfo] = useState('');
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

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
        const result = await getCulturallyRelevantResponse({ userInput: inputValue, userContext });
        
        if ('error' in result && typeof result.error === 'string') {
            toast({
                variant: 'destructive',
                title: 'AI Error',
                description: result.error,
            });
            const errorMessage: Message = { id: Date.now() + 1, text: "I'm having trouble connecting right now. Please try again later.", sender: 'ai' };
            setMessages((prev) => [...prev, errorMessage]);
        } else if ('response' in result) {
            const aiMessage: Message = { id: Date.now() + 1, text: result.response, sender: 'ai' };
            setMessages((prev) => [...prev, aiMessage]);
            if (result.isCrisis && result.helplineInfo) {
                setIsCrisis(true);
                setHelplineInfo(result.helplineInfo);
            }
        }
    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'An error occurred',
            description: 'Could not get a response from the AI. Please check your connection and try again.',
        });
        const errorMessage: Message = { id: Date.now() + 1, text: "I'm sorry, something went wrong. Please try again in a moment.", sender: 'ai' };
        setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-h-[calc(100vh-140px)] bg-card rounded-lg border shadow-sm">
        <div className="flex-1 p-4">
            <ScrollArea className="h-full" ref={scrollAreaRef}>
                <div className="space-y-6 pr-4">
                {messages.map((message) => (
                    <div
                    key={message.id}
                    className={cn('flex items-start gap-3', message.sender === 'user' ? 'justify-end' : 'justify-start')}
                    >
                    {message.sender === 'ai' && (
                        <Avatar className="h-9 w-9 border-2 border-primary">
                        <AvatarFallback><Bot className="text-primary" /></AvatarFallback>
                        </Avatar>
                    )}
                    <div className={cn('max-w-xs md:max-w-md lg:max-w-2xl rounded-2xl p-3 text-base', message.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                        {message.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                    {message.sender === 'user' && (
                        <Avatar className="h-9 w-9">
                        <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                    )}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                        <Avatar className="h-9 w-9 border-2 border-primary">
                            <AvatarFallback><Bot className="text-primary" /></AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-2xl p-3 rounded-bl-none">
                            <div className="flex items-center space-x-2">
                                <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse"></span>
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
                    placeholder="Type your message here..."
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

        <AlertDialog open={isCrisis} onOpenChange={setIsCrisis}>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2 text-2xl text-destructive font-headline">
                    <Frown className="h-8 w-8" /> It sounds like you're in distress.
                </AlertDialogTitle>
                <AlertDialogDescription className="text-lg text-muted-foreground text-left py-4">
                    Please know that you are not alone and help is available. It is important to talk to someone who can support you right now.
                    <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                        <p className="font-semibold text-destructive">{helplineInfo}</p>
                    </div>
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogAction asChild className="w-full text-lg p-6">
                    <a href="tel:02227546669">
                        <Phone className="mr-2" /> Call Helpline Now
                    </a>
                </AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
