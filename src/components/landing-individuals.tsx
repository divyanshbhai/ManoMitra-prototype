
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, BookHeart, Users, ShieldCheck, User } from 'lucide-react';
import React from 'react';
import { translations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/language-context';

export default function IndividualsLandingPage() {
    const { locale } = useLanguage();
    const t = translations[locale];

    const features = [
        {
          icon: <Bot className="h-10 w-10 text-primary" />,
          title: t.individualsPage.feature1_title,
          description: t.individualsPage.feature1_desc,
        },
        {
          icon: <BookHeart className="h-10 w-10 text-primary" />,
          title: t.individualsPage.feature2_title,
          description: t.individualsPage.feature2_desc,
        },
        {
          icon: <Users className="h-10 w-10 text-primary" />,
          title: t.individualsPage.feature3_title,
          description: t.individualsPage.feature3_desc,
        },
        {
          icon: <ShieldCheck className="h-10 w-10 text-primary" />,
          title: t.individualsPage.feature4_title,
          description: t.individualsPage.feature4_desc,
        },
    ];

    const howItWorks = [
      {
        step: "01",
        title: t.individualsPage.step1_title,
        description: t.individualsPage.step1_desc,
      },
      {
        step: "02",
        title: t.individualsPage.step2_title,
        description: t.individualsPage.step2_desc,
      },
      {
        step: "03",
        title: t.individualsPage.step3_title,
        description: t.individualsPage.step3_desc,
      },
    ]

  return (
    <div className="w-full">
      <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32 bg-primary/5 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start space-y-6">
              <Badge>{t.individualsPage.badge}</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">
                <span className="text-primary">{t.individualsPage.headline.split(' for ')[0]}</span> for {t.individualsPage.headline.split(' for ')[1]}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl" dangerouslySetInnerHTML={{ __html: t.individualsPage.subheadline.replace("personal, culturally-aware", "<span class='font-semibold text-foreground'>personal, culturally-aware</span>") }} />
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/login">{t.individualsPage.cta}</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl shadow-2xl shadow-primary/20">
              <Image
                src="/Indian student using a phone, looking relieved.jpeg"
                alt="Indian student using a phone, looking relieved"
                width={800}
                height={600}
                className="rounded-2xl"
                data-ai-hint="Indian student phone"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.individualsPage.features_headline}</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg" dangerouslySetInnerHTML={{ __html: t.individualsPage.features_subheadline.replace("unique cultural context of India", "<span class='font-semibold text-foreground'>unique cultural context of India</span>").replace("safe first step", "<span class='text-primary font-semibold'>safe first step</span>") }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0 mb-4">{feature.icon}</CardHeader>
                <CardContent className="space-y-2 p-0">
                  <CardTitle className="text-xl font-semibold font-headline">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.individualsPage.howitworks_headline}</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              {t.individualsPage.howitworks_subheadline}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {howItWorks.map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 text-primary font-bold text-3xl font-headline mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold font-headline mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.individualsPage.cta2_headline}</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              {t.individualsPage.cta2_subheadline}
            </p>
             <Button asChild size="lg" className="text-lg px-8 py-6 mt-4">
                <Link href="/login">{t.individualsPage.cta2_button}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const Badge = ({children}: {children: React.ReactNode}) => (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-base font-medium text-primary-foreground">
        <User className="h-5 w-5"/>
        {children}
    </span>
)
