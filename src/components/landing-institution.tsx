
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BarChart3, Users, ShieldAlert, GraduationCap, Building } from 'lucide-react';
import React from 'react';
import { translations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/language-context';

export default function InstitutionLandingPage() {
    const { locale } = useLanguage();
    const t = translations[locale];

    const benefits = [
        {
            icon: <ShieldAlert className="h-10 w-10 text-primary" />,
            title: t.institutionsPage.benefit1_title,
            description: t.institutionsPage.benefit1_desc,
        },
        {
            icon: <BarChart3 className="h-10 w-10 text-primary" />,
            title: t.institutionsPage.benefit2_title,
            description: t.institutionsPage.benefit2_desc,
        },
        {
            icon: <Users className="h-10 w-10 text-primary" />,
            title: t.institutionsPage.benefit3_title,
            description: t.institutionsPage.benefit3_desc,
        },
        {
            icon: <GraduationCap className="h-10 w-10 text-primary" />,
            title: t.institutionsPage.benefit4_title,
            description: t.institutionsPage.benefit4_desc,
        },
    ];

    const offerings = t.institutionsPage.offerings;

  return (
    <div className="w-full">
      <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32 bg-primary/5 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start space-y-6">
              <Badge>{t.institutionsPage.badge}</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline" dangerouslySetInnerHTML={{ __html: t.institutionsPage.headline.replace("Strategic Asset", "<span class='text-primary'>Strategic Asset</span>") }} />
              <p className="max-w-[600px] text-muted-foreground md:text-xl" dangerouslySetInnerHTML={{ __html: t.institutionsPage.subheadline.replace("scalable, anonymous, and integrated", "<span class='font-semibold text-foreground'>scalable, anonymous, and integrated</span>") }} />
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/login">{t.institutionsPage.cta}</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl shadow-2xl shadow-primary/20">
              <Image
                src="/Admin dashboard showing positive analytics for an Indian institution.jpeg"
                alt="Admin dashboard showing positive analytics for an Indian institution"
                width={600}
                height={400}
                className="rounded-2xl"
                data-ai-hint="Indian analytics dashboard"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative rounded-2xl shadow-2xl shadow-primary/20">
               <Image
                src="/A diverse group of Indian students looking happy and supported.jpeg"
                alt="A diverse group of Indian students looking happy and supported"
                width={600}
                height={400}
                className="rounded-2xl"
                data-ai-hint="Indian students happy"
              />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.institutionsPage.section2_headline}</h2>
              <p className="text-muted-foreground md:text-lg" dangerouslySetInnerHTML={{ __html: t.institutionsPage.section2_body.replace("force multiplier", "<span class='text-primary font-semibold'>force multiplier</span>").replace("scalable, 24/7 AI first-aid", "<span class='font-semibold text-foreground'>scalable, 24/7 AI first-aid</span>") }} />
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
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.institutionsPage.benefits_headline}</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              {t.institutionsPage.benefits_subheadline}
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
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.institutionsPage.cta2_headline}</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
              {t.institutionsPage.cta2_subheadline}
            </p>
             <Button asChild size="lg" className="text-lg px-8 py-6 mt-4">
                <Link href="/login">{t.institutionsPage.cta2_button}</Link>
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

    
