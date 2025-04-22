import './globals.css'
import { cn } from '@/lib/utils'
import { inter } from '@/lib/fonts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'GHM Group s.r.o.',
    description: 'precision engineering & custom fabrication in prešov since 2017',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={cn(inter.className, 'min-h-screen flex flex-col')}>
                <Navbar />
                <main className="flex-1 w-full py-6">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
