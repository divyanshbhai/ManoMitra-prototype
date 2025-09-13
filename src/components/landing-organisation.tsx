
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, BarChart3, Users, Zap, Building, CheckCircle } from 'lucide-react';
import React from 'react';
import { translations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/language-context';

export default function OrganisationLandingPage() {
    const { locale } = useLanguage();
    const t = translations[locale];

    const benefits = [
        {
            icon: <Zap className="h-10 w-10 text-primary" />,
            title: t.organisationsPage.benefit1_title,
            description: t.organisationsPage.benefit1_desc,
        },
        {
            icon: <BarChart3 className="h-10 w-10 text-primary" />,
            title: t.organisationsPage.benefit2_title,
            description: t.organisationsPage.benefit2_desc,
        },
        {
            icon: <Users className="h-10 w-10 text-primary" />,
            title: t.organisationsPage.benefit3_title,
            description: t.organisationsPage.benefit3_desc,
        },
        {
            icon: <Briefcase className="h-10 w-10 text-primary" />,
            title: t.organisationsPage.benefit4_title,
            description: t.organisationsPage.benefit4_desc,
        },
    ];

    const offerings = t.organisationsPage.offerings;

  return (
    <div className="w-full">
      <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32 bg-primary/5 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start space-y-6">
              <Badge>{t.organisationsPage.badge}</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline" dangerouslySetInnerHTML={{ __html: t.organisationsPage.headline.replace("Power Your Business", "<span class='text-primary'>Power Your Business</span>") }}/>
              <p className="max-w-[600px] text-muted-foreground md:text-xl" dangerouslySetInnerHTML={{ __html: t.organisationsPage.subheadline.replace("confidential, culturally-attuned", "<span class='font-semibold text-foreground'>confidential, culturally-attuned</span>") }} />
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/login">{t.organisationsPage.cta}</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl shadow-2xl shadow-primary/20">
              <Image
                src="/Diverse Indian employees collaborating in a modern office.jpeg"
                alt="Diverse Indian employees collaborating in a modern office"
                width={800}
                height={600}
                className="rounded-2xl"
                data-ai-hint="Indian employees collaborating"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative rounded-2xl shadow-2xl shadow-primary/20 order-last md:order-first">
               <Image
                src="/HR professional reviewing positive employee wellness data on a tablet.jpeg"
                alt="HR professional reviewing positive employee wellness data on a tablet"
                width={800}
                height={600}
                className="rounded-2xl"
                data-ai-hint="Indian HR professional"
              />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.organisationsPage.section2_headline}</h2>
              <p className="text-muted-foreground md:text-lg" dangerouslySetInnerHTML={{ __html: t.organisationsPage.section2_body.replace("business imperative", "<span class='font-semibold text-foreground'>business imperative</span>").replace("resilient and thriving workforce", "<span class='text-primary font-semibold'>resilient and thriving workforce</span>") }} />
              <ul className="space-y-4">
                {offerings.map((offering, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.organisationsPage.benefits_headline}</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              {t.organisationsPage.benefits_subheadline}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0 mb-4">{benefit.icon}</CardHeader>
                <CardContent className="space-y-2 p-0">
                  <CardTitle className="text-xl font-semibold font-headline">{benefit.title}</CardTitle>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.organisationsPage.cta2_headline}</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              {t.organisationsPage.cta2_subheadline}
            </p>
             <Button asChild size="lg" className="text-lg px-8 py-6 mt-4">
                <Link href="/login">{t.organisationsPage.cta2_button}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const Badge = ({children}: {children: React.ReactNode}) => (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1 text-base font-medium text-primary-foreground">
        <Building className="h-5 w-5"/>
        {children}
    </span>
)
