"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { LogoWhite } from "@/components/logo-white"
import { LanguageToggle } from "@/components/language-toggle"

const sections = [
  {
    title: "1. Anbieterin und Geltungsbereich",
    paragraphs: [
      "1.1 Die Plattform Miauzly (miauzly.ch und my.miauzly.ch, nachfolgend «Miauzly» oder «Plattform») wird betrieben von der Studio 2311 GmbH, Steinberggasse 20, 8400 Winterthur, Schweiz (nachfolgend «wir»). Kontakt: hello@miauzly.ch",
      "1.2 Diese AGB gelten für alle Personen, die die Plattform nutzen, insbesondere für Tierhalter:innen (nachfolgend «Owner») und Betreuungspersonen (nachfolgend «Sitter»), zusammen «Nutzer:innen».",
      "1.3 Mit der Registrierung oder Nutzung der Plattform akzeptierst du diese AGB in der jeweils gültigen Fassung.",
      "1.4 Die AGB liegen auf Deutsch und Englisch vor. Bei Widersprüchen geht die deutsche Fassung vor.",
    ],
  },
  {
    title: "2. Rolle von Miauzly",
    paragraphs: [
      "2.1 Miauzly ist eine Vermittlungsplattform. Wir bringen Owner und Sitter zusammen und stellen die technische Infrastruktur für Buchung, Kommunikation und Zahlung bereit.",
      "2.2 Der Vertrag über die Tierbetreuung (nachfolgend «Betreuungsvertrag») kommt ausschliesslich zwischen Owner und Sitter zustande. Miauzly ist nicht Vertragspartei des Betreuungsvertrags und erbringt keine Betreuungsleistungen.",
      "2.3 Sitter handeln selbständig und in eigener Verantwortung. Sie sind weder Arbeitnehmende noch Beauftragte von Miauzly. Sitter sind selbst verantwortlich für die Einhaltung gesetzlicher Pflichten, insbesondere für Steuern, Sozialversicherungsbeiträge (z. B. AHV) und allenfalls die Mehrwertsteuer.",
      "2.4 Miauzly übernimmt keine Gewähr für die Verfügbarkeit, Qualität, Zuverlässigkeit oder Eignung von Sitter oder Owner.",
    ],
  },
  {
    title: "3. Registrierung und Konto",
    paragraphs: [
      "3.1 Für die Nutzung der Plattform ist ein Konto erforderlich. Die Registrierung erfolgt per E-Mail und Passwort oder über ein Google-Konto.",
      "3.2 Die Registrierung ist nur Personen ab 18 Jahren gestattet.",
      "3.3 Du verpflichtest dich, wahrheitsgetreue und vollständige Angaben zu machen und diese aktuell zu halten. Pro Person ist nur ein Konto zulässig.",
      "3.4 Du bist für die Geheimhaltung deiner Zugangsdaten verantwortlich. Bei Verdacht auf Missbrauch informierst du uns umgehend unter hello@miauzly.ch.",
    ],
  },
  {
    title: "4. Buchung und Betreuung",
    paragraphs: [
      "4.1 Owner können über die Plattform Betreuungsanfragen an Sitter senden. Eine Buchung wird verbindlich, sobald der Sitter die Anfrage bestätigt.",
      "4.2 Owner sind verpflichtet, alle für die Betreuung relevanten Informationen vollständig und korrekt anzugeben, insbesondere zu Gesundheitszustand, Medikamenten, Fütterung, Verhalten des Tieres sowie zu Zugang und Schlüsselübergabe.",
      "4.3 Sitter verpflichten sich, die Betreuung sorgfältig, zuverlässig und gemäss den Absprachen mit dem Owner durchzuführen und den Owner bei Auffälligkeiten oder Problemen umgehend zu informieren.",
      "4.4 Im Notfall darf der Sitter das Tier ohne vorgängige Rücksprache zu einer Tierärztin oder einem Tierarzt bringen, wenn der Owner nicht rechtzeitig erreichbar ist. Die Kosten der tierärztlichen Behandlung trägt der Owner.",
      "4.5 Die Übergabe und Rückgabe von Schlüsseln regeln Owner und Sitter direkt untereinander.",
    ],
  },
  {
    title: "5. Preise, Gebühren und Zahlung",
    paragraphs: [
      "5.1 Der Preis für die Betreuung wird vom Sitter festgelegt und bei der Buchung angezeigt. Alle Preise verstehen sich in Schweizer Franken (CHF) [inkl. MWST, soweit anwendbar].",
      "5.2 Für die Vermittlung erhebt Miauzly eine Servicegebühr von 15 % des Betreuungspreises zuzüglich CHF 1.– pro Buchung. Die Servicegebühr wird vom Betreuungspreis abgezogen, bevor dieser an den Sitter ausbezahlt wird. Die Servicegebühr versteht sich inkl. MWST.",
      "5.3 Die Zahlung erfolgt über unseren Zahlungsdienstleister Stripe. Es gelten ergänzend dessen Nutzungsbedingungen. Der Owner wird mit der Bestätigung der Buchung belastet.",
      "5.4 Die Auszahlung an den Sitter erfolgt in der Regel innert 3–5 Werktagen nach Abschluss der Betreuung auf das hinterlegte Bankkonto.",
      "5.5 Miauzly ist berechtigt, Auszahlungen zurückzuhalten, wenn eine Beanstandung, ein Missbrauchsverdacht oder eine Streitigkeit vorliegt, bis der Sachverhalt geklärt ist.",
    ],
  },
  {
    title: "6. Stornierung und Rückerstattung",
    paragraphs: [
      "6.1 Storniert der Owner eine Buchung mehr als 24 Stunden vor Beginn der Betreuung, wird der bezahlte Betrag vollständig zurückerstattet.",
      "6.2 Storniert der Owner eine Buchung weniger als 24 Stunden vor Beginn der Betreuung, werden 50 % des bezahlten Betrags zurückerstattet.",
      "6.3 Storniert der Sitter eine bestätigte Buchung oder erscheint er nicht, erhält der Owner den bezahlten Betrag vollständig zurück. Bei wiederholten Stornierungen durch Sitter kann Miauzly das Konto einschränken oder sperren.",
      "6.4 Beanstandungen zu einer Betreuung sind innert 48 Stunden nach deren Ende an hello@miauzly.ch zu richten.",
    ],
  },
  {
    title: "7. Abonnement und Swaps",
    paragraphs: [
      "7.1 Miauzly bietet ein kostenpflichtiges Abonnement zum Preis von CHF 9.– pro Monat an. Das Abonnement berechtigt dazu, Betreuungen mit anderen Abo-Mitgliedern gegenseitig und ohne Servicegebühr zu tauschen («Swaps»).",
      "7.2 Das Abonnement verlängert sich jeweils automatisch um einen weiteren Monat und kann jederzeit auf das Ende der laufenden Abrechnungsperiode in den Kontoeinstellungen gekündigt werden. Bereits bezahlte Beträge werden nicht anteilig zurückerstattet.",
      "7.3 Bei Swaps erfolgt die Betreuung unentgeltlich und auf gegenseitiger Basis. Die Bestimmungen dieser AGB zu Betreuung und Haftung gelten sinngemäss.",
    ],
  },
  {
    title: "8. Haftung",
    paragraphs: [
      "8.1 Miauzly haftet nicht für Schäden, die im Zusammenhang mit dem Betreuungsvertrag oder Swaps entstehen, insbesondere nicht für Verletzung, Krankheit, Verlust oder Tod von Tieren, Schäden an Wohnung oder Eigentum sowie den Verlust von Schlüsseln. Für solche Schäden haften Owner und Sitter einander nach den gesetzlichen Bestimmungen.",
      "8.2 Miauzly haftet nicht für eine jederzeit unterbrechungs- und fehlerfreie Verfügbarkeit der Plattform sowie für Störungen bei Drittanbietern (z. B. Zahlungs-, Hosting- oder E-Mail-Dienste).",
      "8.3 Die Haftung von Miauzly ist, soweit gesetzlich zulässig, ausgeschlossen. Vorbehalten bleibt die Haftung für rechtswidrige Absicht und grobe Fahrlässigkeit.",
      "8.4 Wir empfehlen Owner und Sitter, eine Privathaftpflichtversicherung abzuschliessen und zu prüfen, ob diese Schäden an betreuten Tieren und fremden Wohnungen abdeckt.",
    ],
  },
  {
    title: "9. Pflichten und Verbote",
    paragraphs: ["9.1 Es ist untersagt:"],
    list: [
      "falsche Angaben zu machen oder sich als eine andere Person auszugeben;",
      "Owner oder Sitter, die über Miauzly kennengelernt wurden, zur Umgehung der Servicegebühr direkt ausserhalb der Plattform zu buchen;",
      "die Plattform missbräuchlich, rechtswidrig oder zum Nachteil anderer zu nutzen;",
      "gegen das Tierschutzgesetz zu verstossen.",
    ],
    after: ["9.2 Bei Verstössen kann Miauzly Inhalte entfernen und Konten vorübergehend oder dauerhaft sperren."],
  },
  {
    title: "10. Bewertungen und Inhalte",
    paragraphs: [
      "10.1 Nutzer:innen können nach einer Betreuung Bewertungen abgeben. Bewertungen müssen wahrheitsgetreu und sachlich sein und dürfen keine beleidigenden oder rechtswidrigen Inhalte enthalten.",
      "10.2 Miauzly behält sich vor, Bewertungen und Inhalte zu entfernen, die gegen diese AGB oder geltendes Recht verstossen.",
      "10.3 Mit dem Hochladen von Inhalten (z. B. Fotos, Profiltexte) räumst du Miauzly das unentgeltliche, nicht ausschliessliche Recht ein, diese Inhalte für den Betrieb und die Darstellung der Plattform zu nutzen. Du bestätigst, dass du die Rechte an diesen Inhalten besitzt.",
    ],
  },
  {
    title: "11. Datenschutz",
    paragraphs: ["Informationen zur Bearbeitung personenbezogener Daten findest du in unserer Datenschutzerklärung."],
  },
  {
    title: "12. Laufzeit und Kündigung des Kontos",
    paragraphs: [
      "12.1 Du kannst dein Konto jederzeit löschen. Bereits bestätigte Buchungen und Abonnemente bleiben davon unberührt, bis sie abgewickelt bzw. abgelaufen sind.",
      "12.2 Miauzly kann Konten aus wichtigem Grund jederzeit sperren oder löschen, insbesondere bei Verstössen gegen diese AGB.",
    ],
  },
  {
    title: "13. Änderungen der AGB",
    paragraphs: ["Miauzly kann diese AGB jederzeit ändern. Änderungen werden den Nutzer:innen mindestens 30 Tage vor Inkrafttreten per E-Mail oder auf der Plattform mitgeteilt. Nutzt du die Plattform nach Inkrafttreten weiter, gelten die geänderten AGB als akzeptiert."],
  },
  {
    title: "14. Schlussbestimmungen",
    paragraphs: [
      "14.1 Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.",
      "14.2 Es gilt ausschliesslich schweizerisches Recht.",
      "14.3 Gerichtsstand ist Winterthur / Sitz der Studio 2311 GmbH. Für Konsument:innen bleibt der gesetzliche Gerichtsstand an ihrem Wohnsitz vorbehalten.",
    ],
  },
]

export default function AgbPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/95 border-b border-gray-800">
        <div className="relative mx-auto max-w-7xl px-4 py-4 min-h-[90px] md:min-h-[150px]">
          <Link href="/" className="absolute top-6 left-6 md:top-9 md:left-9 h-[60px] w-[60px] md:h-[100px] md:w-[100px]">
            <LogoWhite />
          </Link>
          <div className="absolute top-6 right-6 md:top-9 md:right-9">
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 mx-auto max-w-4xl px-4 py-12 font-sans">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-blue transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück</span>
        </Link>
        <h1 className="text-4xl md:text-5xl mb-8 font-sans">Allgemeine Geschäftsbedingungen</h1>
        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl md:text-3xl mb-4 font-sans">{section.title}</h2>
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.list && (
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
