import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
    return (
        <section className="mx-auto max-w-xl space-y-8">
            <h2 className="text-3xl font-semibold text-center">Kontaktujte nás</h2>

            <Card>
                <CardContent className="space-y-4 pt-6">
                    <div className="flex items-start gap-4">
                        <Phone className="shrink-0" />
                        <div>+421 948 018 323</div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Mail className="shrink-0" />
                        <div>ghmgroup.po@gmail.com</div>
                    </div>

                    <address className="not-italic">
                        Priemyselný park Šalgovík<br />
                        Sekčovská 87<br />
                        080 01 Prešov, Slovensko
                    </address>
                </CardContent>
            </Card>
        </section>
    )
}

