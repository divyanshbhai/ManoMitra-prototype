
import Link from 'next/link';
import Image from 'next/image';

export default function SosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Image src="/logo-manomitra.png" alt="ManoMitra Logo" width={200} height={50} />
                </Link>
            </div>
        </header>
        <main className="flex-1 flex items-center justify-center">
            {children}
        </main>
    </div>
  );
}
