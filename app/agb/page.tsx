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
  { title: "1. Provider and Scope", paragraphs: ["1.1 The Miauzly platform (miauzly.ch and my.miauzly.ch, hereinafter \"Miauzly\" or \"Platform\") is operated by Studio 2311 GmbH, Steinberggasse 20, 8400 Winterthur, Switzerland (hereinafter \"we\"). Contact: hello@miauzly.ch", "1.2 These Terms apply to all persons using the Platform, in particular pet owners (hereinafter \"Owners\") and caregivers (hereinafter \"Sitters\"), together \"Users\".", "1.3 By registering for or using the Platform, you accept these Terms in their currently valid version.", "1.4 These Terms are available in German and English. In the event of any discrepancy, the German version prevails."] },
  { title: "2. Role of Miauzly", paragraphs: ["2.1 Miauzly is an intermediary platform. We connect Owners and Sitters and provide the technical infrastructure for booking, communication and payment.", "2.2 The contract for pet care (hereinafter \"Care Contract\") is concluded exclusively between the Owner and the Sitter. Miauzly is not a party to the Care Contract and does not provide any care services.", "2.3 Sitters act independently and on their own responsibility. They are neither employees nor agents of Miauzly. Sitters are themselves responsible for complying with their legal obligations, in particular regarding taxes, social security contributions (e.g. AHV) and, where applicable, value added tax.", "2.4 Miauzly gives no guarantee as to the availability, quality, reliability or suitability of Sitters or Owners."] },
  { title: "3. Registration and Account", paragraphs: ["3.1 An account is required to use the Platform. You can register with an email address and password or with a Google account.", "3.2 Registration is only permitted for persons aged 18 or over.", "3.3 You agree to provide truthful and complete information and to keep it up to date. Only one account per person is permitted.", "3.4 You are responsible for keeping your login details confidential. If you suspect misuse, please inform us immediately at hello@miauzly.ch."] },
  { title: "4. Booking and Care", paragraphs: ["4.1 Owners can send care requests to Sitters via the Platform. A booking becomes binding as soon as the Sitter confirms the request.", "4.2 Owners must provide all information relevant to the care fully and accurately, in particular regarding the animal's health, medication, feeding and behaviour, as well as access and key handover.", "4.3 Sitters agree to provide care carefully, reliably and as agreed with the Owner, and to inform the Owner immediately of anything unusual or any problems.", "4.4 In an emergency, the Sitter may take the animal to a veterinarian without prior consultation if the Owner cannot be reached in time. The cost of veterinary treatment is borne by the Owner.", "4.5 Owners and Sitters arrange the handover and return of keys directly between themselves.", "4.6 A booking is considered completed on the day after the last day of care."] },
  { title: "5. Prices, Fees and Payment", paragraphs: ["5.1 The price for the care (hereinafter \"Care Price\") is set by the Sitter and shown before booking. All prices and fees are in Swiss francs (CHF).", "5.2 Miauzly charges the following fees for the use of the Platform:\n\nService fee for Owners: CHF 2.50 per booking. It is charged in addition to the Care Price and shown in the total amount before booking.\nCommission for Sitters: 15% of the Care Price. It is deducted from the Care Price before payout to the Sitter.\n\nThe service fee and commission include VAT.", "5.3 Payment is processed by our payment service provider Stripe using the payment methods shown at checkout. Stripe's terms of use apply in addition. The Owner is charged when the Sitter confirms the booking.", "5.4 To receive payouts, the Sitter must set up a payout account with Stripe and provide the information required by Stripe. The payout of the Care Price less commission is initiated after the booking is completed; the funds usually arrive in the bank account within a few business days.", "5.5 Miauzly may withhold payouts in the event of a complaint, suspected misuse or a dispute until the matter has been resolved."] },
  { title: "6. Cancellation and Refunds", paragraphs: ["6.1 If the Owner cancels a booking more than 24 hours before the care begins, the Care Price is refunded in full. The service fee of CHF 2.50 is not refunded.", "6.2 If the Owner cancels a booking less than 24 hours before the care begins, 50% of the Care Price is refunded. The service fee of CHF 2.50 is not refunded. The remaining 50% of the Care Price is paid out to the Sitter, less the 15% commission.", "6.3 If the Sitter cancels a confirmed booking or does not show up, the Owner receives a full refund of the amount paid, including the service fee. In the event of repeated cancellations by a Sitter, Miauzly may restrict or block the account.", "6.4 If Miauzly cancels a booking (e.g. due to misuse or violations of these Terms), the Owner receives a full refund of the amount paid, including the service fee, provided the Owner is not at fault.", "6.5 Refunds are made to the original payment method. Depending on the payment method, it may take a few business days for the refund to arrive.", "6.6 Complaints about a booking must be sent to hello@miauzly.ch within 48 hours after the care ends."] },
  { title: "7. Liability", paragraphs: ["7.1 Miauzly is not liable for any damage arising in connection with the Care Contract, in particular not for injury, illness, loss or death of animals, damage to homes or property, or the loss of keys. Owners and Sitters are liable to each other for such damage in accordance with the law.", "7.2 Miauzly is not liable for uninterrupted and error-free availability of the Platform at all times, or for disruptions caused by third-party providers (e.g. payment, hosting or email services).", "7.3 To the extent permitted by law, Miauzly's liability is excluded. Liability for unlawful intent and gross negligence remains reserved.", "7.4 We recommend that Owners and Sitters take out private liability insurance and check whether it covers damage to animals in their care and to other people's homes."] },
  { title: "8. Obligations and Prohibitions", paragraphs: ["8.1 It is prohibited to:"], list: ["provide false information or impersonate another person;", "book Owners or Sitters met through Miauzly directly outside the Platform in order to avoid the fees;", "use the Platform abusively, unlawfully or to the detriment of others;", "violate the Swiss Animal Welfare Act."], after: ["8.2 In the event of violations, Miauzly may remove content and suspend or permanently block accounts."] },
  { title: "9. Reviews and Content", paragraphs: ["9.1 Users can leave reviews after a booking has been completed. Reviews must be truthful and factual and must not contain offensive or unlawful content.", "9.2 Miauzly reserves the right to remove reviews and content that violate these Terms or applicable law.", "9.3 By uploading content (e.g. photos, profile texts), you grant Miauzly the free, non-exclusive right to use this content for operating and displaying the Platform. You confirm that you hold the rights to this content."] },
  { title: "10. Data Protection", paragraphs: ["Information on the processing of personal data can be found in our Privacy Policy."] },
  { title: "11. Term and Termination of the Account", paragraphs: ["11.1 You can delete your account at any time. Bookings already confirmed remain unaffected until they have been completed.", "11.2 Miauzly may suspend or delete accounts at any time for good cause, in particular in the event of violations of these Terms."] },
  { title: "12. Changes to the Terms", paragraphs: ["Miauzly may change these Terms at any time. Users will be notified of changes by email or on the Platform at least 30 days before they take effect. If you continue to use the Platform after the changes take effect, the amended Terms are deemed accepted."] },
  { title: "13. Final Provisions", paragraphs: ["13.1 Should any provision of these Terms be invalid, the validity of the remaining provisions remains unaffected.", "13.2 These Terms are governed exclusively by Swiss law.", "13.3 The place of jurisdiction is Winterthur / the registered office of Studio 2311 GmbH. For consumers, the statutory place of jurisdiction at their place of residence remains reserved."] },
]

const updatedGermanSections = [
  { title: "1. Anbieterin und Geltungsbereich", paragraphs: [
    "1.1 Die Plattform Miauzly (miauzly.ch und my.miauzly.ch, nachfolgend «Miauzly» oder «Plattform») wird betrieben von der Studio 2311 GmbH, Steinberggasse 20, 8400 Winterthur, Schweiz (nachfolgend «wir»). Kontakt: hello@miauzly.ch",
    "1.2 Diese AGB gelten für alle Personen, die die Plattform nutzen, insbesondere für Tierhalter:innen (nachfolgend «Owner») und Betreuungspersonen (nachfolgend «Sitter»), zusammen «Nutzer:innen».",
    "1.3 Mit der Registrierung oder Nutzung der Plattform akzeptierst du diese AGB in der jeweils gültigen Fassung.",
    "1.4 Die AGB liegen auf Deutsch und Englisch vor. Bei Widersprüchen geht die deutsche Fassung vor.",
  ] },
  { title: "2. Rolle von Miauzly", paragraphs: [
    "2.1 Miauzly ist eine Vermittlungsplattform. Wir bringen Owner und Sitter zusammen und stellen die technische Infrastruktur für Buchung, Kommunikation und Zahlung bereit.",
    "2.2 Der Vertrag über die Tierbetreuung (nachfolgend «Betreuungsvertrag») kommt ausschliesslich zwischen Owner und Sitter zustande. Miauzly ist nicht Vertragspartei des Betreuungsvertrags und erbringt keine Betreuungsleistungen.",
    "2.3 Sitter handeln selbständig und in eigener Verantwortung. Sie sind weder Arbeitnehmende noch Beauftragte von Miauzly. Sitter sind selbst verantwortlich für die Einhaltung gesetzlicher Pflichten, insbesondere für Steuern, Sozialversicherungsbeiträge (z. B. AHV) und allenfalls die Mehrwertsteuer.",
    "2.4 Miauzly übernimmt keine Gewähr für die Verfügbarkeit, Qualität, Zuverlässigkeit oder Eignung von Sitter oder Owner.",
  ] },
  { title: "3. Registrierung und Konto", paragraphs: [
    "3.1 Für die Nutzung der Plattform ist ein Konto erforderlich. Die Registrierung erfolgt per E-Mail und Passwort oder über ein Google-Konto.",
    "3.2 Die Registrierung ist nur Personen ab 18 Jahren gestattet.",
    "3.3 Du verpflichtest dich, wahrheitsgetreue und vollständige Angaben zu machen und diese aktuell zu halten. Pro Person ist nur ein Konto zulässig.",
    "3.4 Du bist für die Geheimhaltung deiner Zugangsdaten verantwortlich. Bei Verdacht auf Missbrauch informierst du uns umgehend unter hello@miauzly.ch.",
  ] },
  { title: "4. Buchung und Betreuung", paragraphs: [
    "4.1 Owner können über die Plattform Betreuungsanfragen an Sitter senden. Eine Buchung wird verbindlich, sobald der Sitter die Anfrage bestätigt.",
    "4.2 Owner sind verpflichtet, alle für die Betreuung relevanten Informationen vollständig und korrekt anzugeben, insbesondere zu Gesundheitszustand, Medikamenten, Fütterung, Verhalten des Tieres sowie zu Zugang und Schlüsselübergabe.",
    "4.3 Sitter verpflichten sich, die Betreuung sorgfältig, zuverlässig und gemäss den Absprachen mit dem Owner durchzuführen und den Owner bei Auffälligkeiten oder Problemen umgehend zu informieren.",
    "4.4 Im Notfall darf der Sitter das Tier ohne vorgängige Rücksprache zu einer Tierärztin oder einem Tierarzt bringen, wenn der Owner nicht rechtzeitig erreichbar ist. Die Kosten der tierärztlichen Behandlung trägt der Owner.",
    "4.5 Die Übergabe und Rückgabe von Schlüsseln regeln Owner und Sitter direkt untereinander.",
    "4.6 Eine Buchung gilt am Tag nach dem letzten Betreuungstag als abgeschlossen.",
  ] },
  { title: "5. Preise, Gebühren und Zahlung", paragraphs: [
    "5.1 Der Preis für die Betreuung (nachfolgend «Betreuungspreis») wird vom Sitter festgelegt und vor der Buchung angezeigt. Alle Preise und Gebühren verstehen sich in Schweizer Franken (CHF).",
    "5.2 Für die Nutzung der Plattform erhebt Miauzly folgende Gebühren: Servicegebühr für Owner: CHF 2.50 pro Buchung. Sie wird zusätzlich zum Betreuungspreis belastet und vor der Buchung im Gesamtbetrag ausgewiesen. Kommission für Sitter: 15 % des Betreuungspreises. Sie wird vom Betreuungspreis abgezogen, bevor dieser an den Sitter ausbezahlt wird. Servicegebühr und Kommission verstehen sich inkl. MWST.",
    "5.3 Die Zahlung erfolgt über unseren Zahlungsdienstleister Stripe mit den im Bezahlvorgang angezeigten Zahlungsmitteln. Es gelten ergänzend die Nutzungsbedingungen von Stripe. Der Owner wird mit der Bestätigung der Buchung durch den Sitter belastet.",
    "5.4 Für den Erhalt von Auszahlungen muss der Sitter sein Auszahlungskonto bei Stripe einrichten und dabei die von Stripe verlangten Angaben machen. Die Auszahlung des Betreuungspreises abzüglich Kommission wird nach Abschluss der Buchung ausgelöst; die Gutschrift auf dem Bankkonto erfolgt in der Regel innert weniger Werktage.",
    "5.5 Miauzly ist berechtigt, Auszahlungen zurückzuhalten, wenn eine Beanstandung, ein Missbrauchsverdacht oder eine Streitigkeit vorliegt, bis der Sachverhalt geklärt ist.",
  ] },
  { title: "6. Stornierung und Rückerstattung", paragraphs: [
    "6.1 Storniert der Owner eine Buchung mehr als 24 Stunden vor Beginn der Betreuung, wird der Betreuungspreis vollständig zurückerstattet. Die Servicegebühr von CHF 2.50 wird nicht zurückerstattet.",
    "6.2 Storniert der Owner eine Buchung weniger als 24 Stunden vor Beginn der Betreuung, werden 50 % des Betreuungspreises zurückerstattet. Die Servicegebühr von CHF 2.50 wird nicht zurückerstattet. Die übrigen 50 % des Betreuungspreises werden abzüglich der Kommission von 15 % an den Sitter ausbezahlt.",
    "6.3 Storniert der Sitter eine bestätigte Buchung oder erscheint er nicht, erhält der Owner den gesamten bezahlten Betrag inklusive Servicegebühr zurück. Bei wiederholten Stornierungen durch Sitter kann Miauzly das Konto einschränken oder sperren.",
    "6.4 Storniert Miauzly eine Buchung (z. B. bei Missbrauch oder Verstössen gegen diese AGB), erhält der Owner den gesamten bezahlten Betrag inklusive Servicegebühr zurück, sofern ihn kein Verschulden trifft.",
    "6.5 Rückerstattungen erfolgen auf das ursprünglich verwendete Zahlungsmittel. Die Gutschrift kann je nach Zahlungsmittel einige Werktage dauern.",
    "6.6 Beanstandungen zu einer Betreuung sind innert 48 Stunden nach deren Ende an hello@miauzly.ch zu richten.",
  ] },
  { title: "7. Versicherung und Haftung", paragraphs: [
    "7.1 Miauzly ist eine Tierbetreuungs-Vermittlungsplattform und bietet keine Versicherung oder Schadengarantie für Katzenbetreuungen an. Die Plattformgebühren dienen der Deckung der Kosten für den Betrieb und die Bereitstellung der Plattform sowie der damit verbundenen Dienstleistungen. Sie beinhalten keinen Versicherungsschutz. Katzensitter sind selbst dafür verantwortlich, zu prüfen, ob sie über einen ausreichenden Versicherungsschutz für ihre Betreuungstätigkeit verfügen. Katzenhalter empfehlen wir ebenfalls, ihren bestehenden Versicherungsschutz für Schäden und Vorfälle während einer Betreuung zu überprüfen. Im Schadenfall sind die beteiligten Parteien grundsätzlich dafür verantwortlich, die Zuständigkeit und eine allfällige Versicherungsdeckung mit ihrer Versicherung abzuklären. Die gesetzlichen Haftungsbestimmungen bleiben vorbehalten.",
    "7.2 Miauzly haftet nicht für Schäden, die im Zusammenhang mit dem Betreuungsvertrag entstehen, insbesondere nicht für Verletzung, Krankheit, Verlust oder Tod von Tieren, Schäden an Wohnung oder Eigentum sowie den Verlust von Schlüsseln. Für solche Schäden haften Owner und Sitter einander nach den gesetzlichen Bestimmungen.",
    "7.3 Miauzly haftet nicht für eine jederzeit unterbrechungs- und fehlerfreie Verfügbarkeit der Plattform sowie für Störungen bei Drittanbietern (z. B. Zahlungs-, Hosting- oder E-Mail-Dienste).",
    "7.4 Die Haftung von Miauzly ist, soweit gesetzlich zulässig, ausgeschlossen. Vorbehalten bleibt die Haftung für rechtswidrige Absicht und grobe Fahrlässigkeit.",
    "7.5 Wir empfehlen Owner und Sitter, eine Privathaftpflichtversicherung abzuschliessen und zu prüfen, ob diese Schäden an betreuten Tieren und fremden Wohnungen abdeckt.",
  ] },
  { title: "8. Pflichten und Verbote", paragraphs: ["8.1 Es ist untersagt:"], list: ["falsche Angaben zu machen oder sich als eine andere Person auszugeben;", "Owner oder Sitter, die über Miauzly kennengelernt wurden, zur Umgehung der Gebühren direkt ausserhalb der Plattform zu buchen;", "die Plattform missbräuchlich, rechtswidrig oder zum Nachteil anderer zu nutzen;", "gegen das Tierschutzgesetz zu verstossen."], after: ["8.2 Bei Verstössen kann Miauzly Inhalte entfernen und Konten vorübergehend oder dauerhaft sperren."] },
  { title: "9. Bewertungen und Inhalte", paragraphs: ["9.1 Nutzer:innen können nach Abschluss einer Buchung Bewertungen abgeben. Bewertungen müssen wahrheitsgetreu und sachlich sein und dürfen keine beleidigenden oder rechtswidrigen Inhalte enthalten.", "9.2 Miauzly behält sich vor, Bewertungen und Inhalte zu entfernen, die gegen diese AGB oder geltendes Recht verstossen.", "9.3 Mit dem Hochladen von Inhalten (z. B. Fotos, Profiltexte) räumst du Miauzly das unentgeltliche, nicht ausschliessliche Recht ein, diese Inhalte für den Betrieb und die Darstellung der Plattform zu nutzen. Du bestätigst, dass du die Rechte an diesen Inhalten besitzt."] },
  { title: "10. Datenschutz", paragraphs: ["Informationen zur Bearbeitung personenbezogener Daten findest du in unserer Datenschutzerklärung."] },
  { title: "11. Laufzeit und Kündigung des Kontos", paragraphs: ["11.1 Du kannst dein Konto jederzeit löschen. Bereits bestätigte Buchungen bleiben davon unberührt, bis sie abgewickelt sind.", "11.2 Miauzly kann Konten aus wichtigem Grund jederzeit sperren oder löschen, insbesondere bei Verstössen gegen diese AGB."] },
  { title: "12. Änderungen der AGB", paragraphs: ["Miauzly kann diese AGB jederzeit ändern. Änderungen werden den Nutzer:innen mindestens 30 Tage vor Inkrafttreten per E-Mail oder auf der Plattform mitgeteilt. Nutzt du die Plattform nach Inkrafttreten weiter, gelten die geänderten AGB als akzeptiert."] },
  { title: "13. Schlussbestimmungen", paragraphs: ["13.1 Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.", "13.2 Es gilt ausschliesslich schweizerisches Recht.", "13.3 Gerichtsstand ist Winterthur / Sitz der Studio 2311 GmbH. Für Konsument:innen bleibt der gesetzliche Gerichtsstand an ihrem Wohnsitz vorbehalten."] },
]

export default function AgbPage() {
  const { language } = useLanguage()
  const sections = language === "en" ? englishSections : updatedGermanSections
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
