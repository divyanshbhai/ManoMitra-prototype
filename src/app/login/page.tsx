
"use client";

import LoginForm from '@/components/login-form';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <div className="absolute top-8 left-8">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                 <Image src="/logo-manomitra.png" alt="ManoMitra Logo" width={200} height={50} />
            </Link>
        </div>
      <LoginForm />
    </div>
  );
}
