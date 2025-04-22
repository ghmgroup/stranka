import { Card, CardContent } from '@/components/ui/card'

export default function About() {
    return (
        <section className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-3xl font-semibold">Kto sme</h2>

            <Card>
                <CardContent className="space-y-4 pt-6">
                    <p>
                        Spoločnosť GHM Group s.r.o. bola založená v roku 2017 a nadväzuje na skúsenosti odborníkov z bývalej firmy VUKOV Extra a.s. Zameriavame sa na kusovú výrobu s vysokou presnosťou, zváranie a montáž pre priemyselných klientov v celej Európe.
                    </p>

                    <p>
                        Vďaka priebežným investíciám do technológií a CNC strojov dokážeme zabezpečiť flexibilitu, kvalitu a rýchle dodacie lehoty.
                    </p>
                </CardContent>
            </Card>
        </section>
    )
}

