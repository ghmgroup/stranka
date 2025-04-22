'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const links = [
    { href: '/', label: 'Domov' },
    { href: '/about', label: 'O nás' },
    { href: '/machinery', label: 'Stroje' },
    { href: '/contact', label: 'Kontakt' },
]

export default function Navbar() {
    const path = usePathname()

    return (
        <nav className="w-full border-b">
            <div className="mx-auto max-w-6xl flex items-center gap-8 px-4 py-3">
                <Link href="/">
                    <Image src="/favicon.png" alt="ghm logo" width={40} height={40} priority />
                </Link>

                <ul className="flex gap-6 text-sm font-medium">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className={cn(
                                    'transition-colors hover:text-primary',
                                    path === l.href ? 'text-primary' : 'text-muted-foreground'
                                )}
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

