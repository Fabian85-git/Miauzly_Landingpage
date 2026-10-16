"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { LogoWhite } from "@/components/logo-white"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

const germanSections = [
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

const englishSections = [
  { title: "1. Provider and Scope", paragraphs: ["1.1 The Miauzly platform (miauzly.ch and my.miauzly.ch, hereinafter “Miauzly” or “Platform”) is operated by Studio 2311 GmbH, Steinberggasse 20, 8400 Winterthur, Switzerland (hereinafter “we”). Contact: hello@miauzly.ch", "1.2 These Terms and Conditions (“Terms”) apply to all persons using the Platform, in particular pet owners (“Owners”) and pet sitters (“Sitters”), together “Users”.", "1.3 By registering for or using the Platform, you accept these Terms in their current version.", "1.4 These Terms are available in German and English. In case of discrepancies, the German version prevails."] },
  { title: "2. Role of Miauzly", paragraphs: ["2.1 Miauzly is an intermediary platform. We connect Owners and Sitters and provide the technical infrastructure for booking, communication and payment.", "2.2 The contract for pet care (“Care Contract”) is concluded exclusively between the Owner and the Sitter. Miauzly is not a party to the Care Contract and does not provide any pet care services.", "2.3 Sitters act independently and on their own responsibility. They are neither employees nor agents of Miauzly. Sitters are themselves responsible for complying with their legal obligations, in particular regarding taxes, social security contributions (e.g. AHV) and, where applicable, value added tax.", "2.4 Miauzly makes no warranty as to the availability, quality, reliability or suitability of any Sitter or Owner."] },
  { title: "3. Registration and Account", paragraphs: ["3.1 An account is required to use the Platform. You can register with an email address and password or with a Google account.", "3.2 Registration is only permitted for persons aged 18 or over.", "3.3 You agree to provide truthful and complete information and to keep it up to date. Only one account per person is permitted.", "3.4 You are responsible for keeping your login details confidential. If you suspect misuse, please notify us immediately at hello@miauzly.ch."] },
  { title: "4. Booking and Pet Care", paragraphs: ["4.1 Owners can send care requests to Sitters via the Platform. A booking becomes binding as soon as the Sitter confirms the request.", "4.2 Owners must provide all information relevant to the care completely and accurately, in particular regarding the animal’s health, medication, feeding and behaviour, as well as access to the home and key handover.", "4.3 Sitters agree to provide the care carefully, reliably and as agreed with the Owner, and to inform the Owner immediately of any irregularities or problems.", "4.4 In an emergency, the Sitter may take the animal to a veterinarian without prior consultation if the Owner cannot be reached in time. The costs of veterinary treatment are borne by the Owner.", "4.5 Owners and Sitters arrange the handover and return of keys directly between themselves."] },
  { title: "5. Prices, Fees and Payment", paragraphs: ["5.1 The price for the care is set by the Sitter and shown at the time of booking. All prices are in Swiss francs (CHF) [including VAT, where applicable].", "5.2 For its intermediary services, Miauzly charges a service fee of 15% of the care price plus CHF 1.00 per booking. The service fee is deducted from the care price before it is paid out to the Sitter. The service fee includes VAT.", "5.3 Payments are processed by our payment service provider Stripe, whose terms of use also apply. The Owner is charged when the booking is confirmed.", "5.4 Payment to the Sitter is generally made within 3–5 working days after the care has ended, to the bank account on file.", "5.5 Miauzly may withhold payouts in the event of a complaint, suspected misuse or a dispute until the matter has been resolved."] },
  { title: "6. Cancellation and Refunds", paragraphs: ["6.1 If the Owner cancels a booking more than 24 hours before the care begins, the amount paid is refunded in full.", "6.2 If the Owner cancels a booking less than 24 hours before the care begins, 50% of the amount paid is refunded.", "6.3 If the Sitter cancels a confirmed booking or does not show up, the Owner receives a full refund. If a Sitter cancels repeatedly, Miauzly may restrict or suspend their account.", "6.4 Complaints about a care service must be sent to hello@miauzly.ch within 48 hours after it has ended."] },
  { title: "7. Subscription and Swaps", paragraphs: ["7.1 Miauzly offers a paid subscription for CHF 9.00 per month. The subscription allows members to exchange care with other subscribers on a mutual basis and without a service fee (“Swaps”).", "7.2 The subscription renews automatically for one further month at a time and can be cancelled at any time in the account settings, effective at the end of the current billing period. Amounts already paid are not refunded pro rata.", "7.3 Care provided through Swaps is free of charge and on a mutual basis. The provisions of these Terms on care and liability apply accordingly."] },
  { title: "8. Liability", paragraphs: ["8.1 Miauzly is not liable for damage arising in connection with a Care Contract or a Swap, in particular for injury, illness, loss or death of animals, damage to homes or property, or lost keys. Owners and Sitters are liable to each other for such damage in accordance with the statutory provisions.", "8.2 Miauzly is not liable for the uninterrupted and error-free availability of the Platform at all times, or for disruptions caused by third-party providers (e.g. payment, hosting or email services).", "8.3 To the extent permitted by law, Miauzly’s liability is excluded. Liability for unlawful intent and gross negligence remains reserved.", "8.4 We recommend that Owners and Sitters take out personal liability insurance and check whether it covers damage to animals in their care and to other people’s homes."] },
  { title: "9. Obligations and Prohibited Conduct", paragraphs: ["9.1 It is prohibited to:"], list: ["provide false information or impersonate another person;", "book Owners or Sitters met through Miauzly directly outside the Platform in order to avoid the service fee;", "use the Platform abusively, unlawfully or to the detriment of others;", "violate animal welfare legislation."], after: ["9.2 In the event of violations, Miauzly may remove content and suspend accounts temporarily or permanently."] },
  { title: "10. Reviews and Content", paragraphs: ["10.1 Users may submit reviews after a care service. Reviews must be truthful and objective and must not contain offensive or unlawful content.", "10.2 Miauzly reserves the right to remove reviews and content that violate these Terms or applicable law.", "10.3 By uploading content (e.g. photos, profile texts), you grant Miauzly a free, non-exclusive right to use this content for operating and presenting the Platform. You confirm that you hold the rights to this content."] },
  { title: "11. Data Protection", paragraphs: ["Information on how we process personal data can be found in our Privacy Policy."] },
  { title: "12. Term and Account Termination", paragraphs: ["12.1 You can delete your account at any time. Bookings already confirmed and active subscriptions remain unaffected until they have been completed or have expired.", "12.2 Miauzly may suspend or delete accounts at any time for good cause, in particular in the event of violations of these Terms."] },
  { title: "13. Changes to these Terms", paragraphs: ["Miauzly may amend these Terms at any time. Users will be notified of changes by email or on the Platform at least 30 days before they take effect. If you continue to use the Platform after the changes take effect, the amended Terms are deemed accepted."] },
  { title: "14. Final Provisions", paragraphs: ["14.1 Should any provision of these Terms be invalid, the validity of the remaining provisions shall not be affected.", "14.2 These Terms are governed exclusively by Swiss law.", "14.3 The place of jurisdiction is Winterthur (registered office of Studio 2311 GmbH). Consumers may in any case bring proceedings at the statutory place of jurisdiction at their place of residence."] },
]

export default function AgbPage() {
  const { language } = useLanguage()
  const sections = language === "en" ? englishSections : germanSections
  const isEnglish = language === "en"

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
          <span>{isEnglish ? "Back" : "Zurück"}</span>
        </Link>
        <h1 className="text-4xl md:text-5xl mb-8 font-sans">{isEnglish ? "Terms and Conditions" : "Allgemeine Geschäftsbedingungen"}</h1>
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
