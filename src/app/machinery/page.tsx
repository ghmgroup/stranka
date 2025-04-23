import { machines } from '@/content/machinery'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Machinery() {
    return (
        <section className="mx-auto max-w-5xl space-y-8">
            <h2 className="text-3xl font-semibold text-center">Strojové vybavenie</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {machines.map((m) => (
                    <Card key={m.name}>
                        <CardHeader className='gap-5'>
                            <Image
                                src={m.imageUrl}
                                alt={m.name}
                                width={300}
                                height={200}
                                className="object-cover"
                                unoptimized
                            />
                            <CardTitle>{m.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm space-y-1">
                                {m.specs.map((s) => (
                                    <li key={s}>• {s}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

