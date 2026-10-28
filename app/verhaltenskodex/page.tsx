"use client"

import { useState } from "react"

const ownerSections = [
  ["Das Wohl deiner Katze steht an erster Stelle", "Informiere den Katzensitter über den Charakter, die Gewohnheiten und die individuellen Bedürfnisse deiner Katze. Teile wichtige Informationen zu Gesundheit, Allergien, Unverträglichkeiten, Medikamenten und besonderen Verhaltensweisen mit. Stelle sicher, dass Futter, Streu, Pflegeprodukte und andere notwendige Utensilien in ausreichender Menge vorhanden sind. Sorge dafür, dass deine Katze während der Betreuung in einer sicheren Umgebung bleibt und ihre Grundbedürfnisse erfüllt werden können."],
  ["Sei ehrlich und transparent", "Beschreibe den Betreuungsbedarf deiner Katze realistisch und vollständig. Verschweige keine relevanten gesundheitlichen Probleme, Verhaltensauffälligkeiten oder besonderen Anforderungen. Besprich Erwartungen, Aufgaben und Verantwortlichkeiten vor der Buchung."],
  ["Behandle Katzensitter respektvoll", "Begegne deinem Katzensitter freundlich, wertschätzend und auf Augenhöhe. Respektiere seine vereinbarten Verfügbarkeiten, persönlichen Grenzen und Fähigkeiten. Kommuniziere Änderungen frühzeitig und verständlich und gib konstruktives Feedback."],
  ["Sorge für klare Anweisungen und eine gute Vorbereitung", "Erkläre Fütterungszeiten, Futtermengen, Reinigungsroutinen und weitere wichtige Abläufe verständlich. Hinterlege aktuelle Kontaktdaten, eine Notfallkontaktperson und die Kontaktdaten deiner Tierarztpraxis."],
  ["Sei erreichbar, wenn es darauf ankommt", "Stelle sicher, dass du während der Betreuung oder über eine vereinbarte Notfallkontaktperson erreichbar bist. Besprich vorab, wie bei gesundheitlichen Auffälligkeiten, einem Unfall oder anderen Notfällen gehandelt werden soll."],
  ["Halte Vereinbarungen und Buchungen ein", "Buche nur Betreuungen, die du tatsächlich benötigst. Halte vereinbarte Termine, Übergaben und Rückkehrzeiten zuverlässig ein und informiere den Katzensitter so früh wie möglich, wenn sich deine Pläne ändern."],
  ["Buche und bezahle über Miauzly", "Wickle Buchungen und Zahlungen über die vorgesehenen Miauzly-Prozesse ab. Vereinbare keine Umgehung der Plattform und wende dich bei Fragen oder Problemen rund um eine Buchung an Miauzly."],
  ["Gib faire und ehrliche Bewertungen ab", "Bewerte eine Betreuung auf Grundlage deiner tatsächlichen Erfahrungen. Gib ehrliches, sachliches und konstruktives Feedback und nutze Bewertungen nicht, um persönliche Konflikte auszutragen oder Druck auszuüben."],
  ["Respektiere die Privatsphäre und persönlichen Grenzen", "Behandle persönliche Informationen und Kontaktdaten deines Katzensitters vertraulich. Verzichte auf Belästigungen, Drohungen, Diskriminierung und unangemessenen Druck."],
  ["Übernimm Verantwortung bei Problemen", "Sprich Unklarheiten oder Schwierigkeiten frühzeitig und sachlich an. Melde ernsthafte Probleme, Sicherheitsbedenken oder unangemessenes Verhalten an Miauzly und arbeite an einer konstruktiven Lösung mit."],
]

const sitterSections = [
  ["Das Wohl der Katze steht an erster Stelle", "Behandle jede Katze mit Geduld, Respekt und Einfühlungsvermögen. Respektiere ihre Grenzen, zwinge sie niemals zu Kontakt und sorge dafür, dass sie sich in ihrer gewohnten Umgebung sicher und stressfrei fühlt."],
  ["Zuverlässigkeit ist Vertrauenssache", "Übernimm nur Betreuungen, für die du ausreichend Zeit, Erfahrung und Verfügbarkeit mitbringst. Halte vereinbarte Zeiten und Abmachungen zuverlässig ein und informiere die Katzenhalter frühzeitig, wenn sich etwas ändert."],
  ["Die Betreuungshinweise sind verbindlich", "Lies die Anweisungen der Katzenhalter sorgfältig durch und halte dich an die vereinbarten Abläufe. Verabreiche Medikamente nur nach ausdrücklicher Anweisung und schaffe keine neuen Risiken."],
  ["Gesundheit und Notfälle ernst nehmen", "Beobachte die Katze aufmerksam und achte auf Anzeichen von Krankheit, Schmerzen, Verletzungen oder ungewöhnlichem Verhalten. Kontaktiere bei Auffälligkeiten die Katzenhalter und bei akuten Notfällen unverzüglich eine Tierarztpraxis."],
  ["Respektiere das Zuhause und die Privatsphäre", "Behandle die Wohnung und das Eigentum der Katzenhalter sorgfältig. Bewahre Schlüssel, Zugangscodes und persönliche Informationen sicher auf und veröffentliche keine Bilder oder Videos ohne Zustimmung."],
  ["Kommuniziere offen und respektvoll", "Kläre Erwartungen, Betreuungszeiten, Fütterung, besondere Bedürfnisse und Notfallabläufe vor der Buchung. Informiere die Halter regelmässig und sei ehrlich bezüglich deiner Erfahrung und Fähigkeiten."],
  ["Nutze Miauzly für Buchungen und Zahlungen", "Wickle Buchungen und Zahlungen über Miauzly ab. Vereinbare keine Umgehung der Plattform und halte relevante Absprachen über die verfügbaren Miauzly-Kommunikationswege fest."],
  ["Gehe verantwortungsvoll mit Bewertungen um", "Bitte nach einer abgeschlossenen Betreuung freundlich um eine ehrliche Bewertung. Akzeptiere Feedback professionell und bewerte andere Mitglieder fair und auf Grundlage deiner tatsächlichen Erfahrungen."],
  ["Respekt und Fairness gelten für alle", "Begegne allen Mitgliedern der Miauzly-Community respektvoll und diskriminierungsfrei. Dulde keine Belästigung, Einschüchterung, Drohungen, Betrugsversuche oder missbräuchliches Verhalten."],
]

function CodeSection({ sections }: { sections: string[][] }) {
  return <div className="space-y-8">{sections.map(([title, text], index) => <article key={title}><h2 className="mb-2 text-xl font-semibold text-[#2D2D2D]">{index + 1}. {title}</h2><p className="leading-8 text-[#5f5f5f]">{text}</p></article>)}</div>
}

export default function VerhaltenskodexPage() {
  const [tab, setTab] = useState<"owner" | "sitter">("owner")
  return <main className="min-h-screen bg-white px-4 py-16 text-[#2D2D2D] md:px-8 md:py-24"><div className="mx-auto max-w-4xl"><a href="/" className="text-sm text-[#5f5f5f] hover:text-[#2D2D2D]">← Zurück zu miauzly</a><h1 className="mt-8 text-4xl font-semibold md:text-6xl">Verhaltenskodex</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f5f5f]">Miauzly lebt von Menschen, die Katzen lieben und Verantwortung füreinander übernehmen. Dieser Verhaltenskodex beschreibt die Grundsätze für eine sichere, respektvolle und vertrauensvolle Community.</p><div className="mt-12 flex border-b border-gray-200" role="tablist"><button role="tab" aria-selected={tab === "owner"} onClick={() => setTab("owner")} className={`px-4 py-3 text-sm font-medium ${tab === "owner" ? "border-b-2 border-[#FFC736] text-[#2D2D2D]" : "text-[#777]"}`}>für Halter:innen</button><button role="tab" aria-selected={tab === "sitter"} onClick={() => setTab("sitter")} className={`px-4 py-3 text-sm font-medium ${tab === "sitter" ? "border-b-2 border-[#FFC736] text-[#2D2D2D]" : "text-[#777]"}`}>für Sitter:innen</button></div><div className="mt-10">{tab === "owner" ? <CodeSection sections={ownerSections} /> : <CodeSection sections={sitterSections} />}</div><p className="mt-12 border-t border-gray-200 pt-8 text-lg font-medium">Unser gemeinsames Versprechen: Miauzly steht für Respekt, Verantwortung und echte Katzenliebe.</p></div></main>
}
