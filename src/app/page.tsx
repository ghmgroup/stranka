import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function Home() {
    // Read all image files from the public/gallery directory
    const galleryDir = path.join(process.cwd(), 'public/gallery')
    const galleryImages = fs.readdirSync(galleryDir).map(file => `/gallery/${file}`)

    return (
        <section className="mx-auto text-center space-y-8">
            <div className="relative w-full h-[700px] mx-auto max-w-full">
                <Image
                    src="/landing.jpg"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end items-center text-white space-y-4 pb-24">
                    <h1 className="text-5xl font-bold">Precízne strojárstvo. Slovenská kvalita.</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        GHM Group s.r.o. zabezpečuje zákazkovú výrobu, obrábanie, zváranie a montáž v našom závode v Prešove. Naša spoločnosť je známa svojou precíznosťou a kvalitou, ktorú poskytujeme našim klientom po celej Európe.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center text-black">
                        <Button size="lg" asChild>
                            <Link href="/machinery">Naše vybavenie</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">Kontaktujte nás</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold mt-12">Galéria</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-auto max-w-5xl">
                {galleryImages.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Gallery Image ${index + 1}`}
                        width={300}
                        height={200}
                        className="object-cover rounded-lg"
                        unoptimized
                    />
                ))}
            </div>
        </section>
    )
}
