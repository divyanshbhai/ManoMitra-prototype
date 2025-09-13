
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, BookHeart, BarChart2, ShieldCheck, Heart, MessageSquareHeart, Sparkles, Paintbrush, Users } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { translations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/language-context';

export default function HomeLandingPage() {
  const { locale } = useLanguage();
  const t = translations[locale];

  const values = [
    { icon: <Heart className="h-8 w-8 text-primary" />, title: t.pillars.p1_title, description: t.pillars.p1_desc},
    { icon: <Users className="h-8 w-8 text-primary" />, title: t.pillars.p2_title, description: t.pillars.p2_desc},
    { icon: <MessageSquareHeart className="h-8 w-8 text-primary" />, title: t.pillars.p3_title, description: t.pillars.p3_desc},
]

  return (
    <div className="w-full">
      <section className="w-full pt-20 md:pt-28 lg:pt-32 flex justify-center">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline">
              <span className="text-primary">{t.hero.headline.split('.')[0]}.</span> {t.hero.headline.split('.')[1]}.
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl lg:text-lg mt-4" dangerouslySetInnerHTML={{ __html: t.hero.subheadline.replace("distressed, yet totally invisible", "<span class='font-semibold text-foreground'>distressed, yet totally invisible</span>") }} />
             <div className="mt-6">
                <p className="text-lg font-semibold text-foreground" dangerouslySetInnerHTML={{ __html: t.hero.tagline.replace("It is a complete system.", "<span class='text-primary'>It is a complete system.</span>") }} />
            </div>
            <Button asChild size="lg" className="text-lg px-8 py-6 mt-4">
              <Link href="/login">{t.hero.cta} <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative rounded-2xl shadow-2xl shadow-primary/20">
               <Image
                src="/A student looking stressed while studying.jpeg"
                alt="A student looking stressed while studying"
                width={800}
                height={600}
                className="rounded-2xl"
                data-ai-hint="Indian student stressed"
              />
               <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.whyFail.headline}</h2>
              <p className="text-muted-foreground md:text-lg" dangerouslySetInnerHTML={{ __html: t.whyFail.body.replace("nearly half of all students", "<span class='font-semibold text-foreground'>nearly half of all students</span>") }} />
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 font-bold">{t.whyFail.reasons.stigma}</Badge>
                    <span>{t.whyFail.reasons.stigma_desc}</span>
                </li>
                <li className="flex items-start gap-3">
                     <Badge variant="secondary" className="mt-1 font-bold">{t.whyFail.reasons.access}</Badge>
                    <span dangerouslySetInnerHTML={{ __html: t.whyFail.reasons.access_desc.replace("less than one mental health professional for every 100,000 people", "<span class='font-semibold text-foreground'>less than one mental health professional for every 100,000 people</span>") }} />
                </li>
                 <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 font-bold">{t.whyFail.reasons.irrelevant}</Badge>
                    <span>{t.whyFail.reasons.irrelevant_desc}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 lg:py-32 bg-primary/5 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-headline" dangerouslySetInnerHTML={{ __html: t.vision.headline.replace("A New System", "<span class='text-primary'>A New System</span>") }} />
              <p className="text-muted-foreground md:text-lg" dangerouslySetInnerHTML={{ __html: t.vision.body.replace("another app isn't the answer", "<span class='font-semibold text-foreground'>another app isn't the answer</span>").replace("deeply integrated, culturally intelligent, free, and open-source", "<span class='font-semibold text-foreground'>deeply integrated, culturally intelligent, free, and open-source</span>") }} />
            </div>
            <div className="relative rounded-2xl shadow-2xl shadow-primary/20 order-first md:order-last">
               <Image
                src="/A blueprint of a connected wellness system.jpeg"
                alt="A blueprint of a connected wellness system"
                width={800}
                height={600}
                className="rounded-2xl"
                data-ai-hint="integrated system blueprint"
              />
               <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.pillars.headline}</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              {t.pillars.subheadline}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0 mb-4">{value.icon}</CardHeader>
                <CardContent className="space-y-2 p-0">
                  <CardTitle className="text-xl font-semibold font-headline">{value.title}</CardTitle>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-32 bg-primary/5 flex justify-center">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline" dangerouslySetInnerHTML={{ __html: t.winWin.headline.replace("Win-Win", "<span class='text-primary'>Win-Win</span>") }} />
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl lg:text-lg mt-4" dangerouslySetInnerHTML={{ __html: t.winWin.body.replace("essential investment", "<span class='font-semibold text-foreground'>essential investment</span>").replace("hybrid model", "<span class='text-primary font-semibold'>hybrid model</span>") }} />
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.festive.headline}</h2>
             <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl lg:text-lg mt-4">
                {t.festive.subheadline}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="p-6">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Sparkles className="w-10 h-10 text-primary"/>
                    <div>
                        <CardTitle className="font-headline">{t.festive.diwali_title}</CardTitle>
                        <CardContent className="p-0 pt-2">{t.festive.diwali_desc}</CardContent>
                    </div>
                </CardHeader>
              </Card>
               <Card className="p-6">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Paintbrush className="w-10 h-10 text-primary"/>
                    <div>
                        <CardTitle className="font-headline">{t.festive.holi_title}</CardTitle>
                        <CardContent className="p-0 pt-2">{t.festive.holi_desc}</CardContent>
                    </div>
                </CardHeader>
              </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
