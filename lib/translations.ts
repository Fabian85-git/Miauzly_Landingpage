export type Language = "de" | "en"

export const translations = {
  de: {
    hero: {
      badge: "Bald verfügbar in der Schweiz",
      title: "Die Schweizer Plattform für Katzenbetreuung- & Community",
      description:
        "miauzly.ch ist die erste Schweizer Plattform von Katzenfans für Katzenfans. Finde vertrauensvolle Katzensitter in deiner Nähe – oder biete selbst Katzenbetreuung an.",
      cta: "Jetzt kostenlos registrieren",
      secondaryCta: "Catsitter werden",
      waitlist: "Registrierung kostenlos · Sichere Bezahlung in CHF",
      waitlistLink: "Newsletter abonnieren",
    },
    howItWorks: {
      title: "Wie funktioniert miauzly?",
      audiences: [
        {
          title: "Für Katzenhalter:innen",
          steps: [
            { label: "Kostenloses Login", description: "Registriere dich kostenlos und buche vertrauensvolle Katzensitter gegen Bezahlung" },
            { label: "", description: "Buche Katzensitter gegen Bezahlung, wann immer du zusätzliche Unterstützung brauchst" },
          ],
          note: "Katzenhalter:innen können auch selbst als Catsitter aktiv werden",
        },
        {
          title: "Für Katzensitter:innen",
          steps: [
            { label: "", description: "Erstelle dein persönliches Profil und zeige deine Erfahrung" },
            { label: "", description: "Bewirb dich auf Buchungen oder werde direkt angefragt" },
            { label: "Faire Provision (15%)", description: "" },
            { label: "", description: "Sammle Bewertungen, baue Vertrauen auf und erhalte dadurch mehr Buchungen" },
          ],
          note: "",
        },
      ],
    },
    forWhom: {
      title: "Für wen ist miauzly?",
      audiences: [
        {
          title: "Für Katzenhalter:innen",
          benefits: [
            "Vernetze dich mit Katzenhalter:innen in deiner Nähe",
            "Oder finde liebevolle, verifizierte Katzensitter gegen Bezahlung\n",
          ],
        },
        {
          title: "Für Katzensitter:innen",
          benefits: [
            "Teile deine Katzenliebe – und verdiene dabei flexibel dazu\n",
            "Bestimme selbst, wann und wie oft du verfügbar bist\n",
            "Werde Teil einer lokalen Community von Katzenfans\n",
          ],
        },
      ],
    },
    whyMiauzly: {
      title: "Warum miauzly?",
      intro: [
        "Wir sind selber Katzenhalter. Und jedes Mal, wenn Ferien oder ein spontaner Ausflug ansteht, kommt dieselbe Sorge: Wer kümmert sich um unsere Fellnasen. Denn jede Katze hat ihren eigenen Charakter, ihre Routinen und Bedürfnisse. Und wir wünschen uns jemanden, der sie genauso liebevoll betreut, wie wir es selbst tun würden.",
        "Zwar gibt es bereits Plattformen für Tierbetreuung. Doch oft wirken sie unpersönlich, sind mit zusätzlichen Servicegebühren verbunden und vor allem: Keine ist auf Katzen spezialisiert.\n\nAus diesem Bedürfnis ist miauzly.ch entstanden: Ein Ort, an dem Katzenfans zusammenfinden. Wo Verständnis, Vertrauen und echte Katzenliebe im Mittelpunkt stehen. \nVon Katzenfans für Katzenfans.\n",
      ],
      features: [
        {
          title: "Nur für Katzen",
          description: "Keine All-in-One-Plattform sondern spezialisiert auf echte Katzenbedürfnisse\n",
        },
        {
          title: "Echte Community",
          description: "Lerne Katzenfans in deiner Nähe kennen",
        },
        {
          title: "Vertrauensvoll",
          description: "Echte Bewertungen und geprüfte Mitglieder",
        },
        {
          title: "Flexibel für jedes Budget",
          description: "Sitter legen ihre Preise selbst fest – du wählst, was passt",
        },
        {
          title: "Schweizer Plattform",
          description: "lokal, ehrlich, transparent",
        },
        {
          title: "Mehr für dich",
          description: "Faire Preise – transparent ausgewiesen in CHF",
        },
      ],
    },
    sneakPreview: {
      title: "So sieht miauzly aus",
      mockups: ["Home", "Profil Halter*innen", "Termine", "Marktplatz"],
      description: "",
      cta: "",
    },
      aboutUs: {
      title: "Über uns",
      backLink: "Zurück",
      navLabel: "Über uns",
      loginLabel: "Login",
      text: [
        "Die Inspiration für miauzly entstand durch meine beiden Mitbewohner und eigentlichen Chefs des Hauses: Rubio & Ramiro, zwei blinde, ehemalige Strassenkater. Vor jeder Reise stehe ich vor derselben Frage: Wer kümmert sich liebevoll und zuverlässig um meine Fellnasen? Professionelle Betreuung ist oft kostspielig oder schwer zugänglich. Zum Glück habe ich ein Netzwerk aus Menschen mit eigenen Katzen und vertrauenswürdigen Katzensitter*innen. Wir tauschen uns aus und helfen uns gegenseitig bei der Ferienbetreuung aus. Da wurde mir klar: So ein Netzwerk sollten alle Katzenfans haben.",
      ],
    },
    newsletter: {
      title: "Bleib auf dem Laufenden",
      subtitle: "",
      description: "Erhalte gelegentlich News, Katzen-Tipps und Infos zu neuen Funktionen von miauzly. Keine Werbung, kein Spam.",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "deine@email.ch",
      userTypeLabel: "Ich bin... (freiwillig)",
      userTypePlaceholder: "Bitte wählen",
      locationLabel: "Wohnort (freiwillig)",
      locationPlaceholder: "z.B. Zürich",
      userTypes: {
        owner: "Katzenbesitzer:in",
        sitter: "Sitter",
        both: "Beides",
        none: "Nichts",
      },
      submitButton: "Jetzt anmelden",
      privacy: "Mit der Anmeldung akzeptierst du unsere Datenschutzbestimmungen.",
      accountPrompt: "Noch kein Konto?",
      accountLink: "Jetzt auf my.miauzly.ch registrieren",
      successTitle: "Vielen Dank! 🎉",
      successMessage: "Du bist jetzt auf der Interessentenliste.",
      successSubMessage: "Wir melden uns bald bei dir!",
  trustIndicators: ["Made in Switzerland", "Datenschutz garantiert", "Community first"],
  },
  faq: {
  title: "FAQs",
  subtitle: "Häufig gestellte Fragen zu Miauzly",
  general: {
        title: "Allgemeines",
        items: [
          { question: "Was ist Miauzly?", answer: "Miauzly ist eine Schweizer Plattform, die Katzenhalter mit Katzensitter zusammenbringt. Wir konzentrieren uns ganz auf Katzen und ihre individuellen Bedürfnisse." },
          { question: "Was unterscheidet Miauzly von anderen Plattformen?", answer: "Miauzly ist 100% auf Katzen spezialisiert. Wir möchten Katzenhalter und Katzensitter zusammenbringen und eine vertrauensvolle Community schaffen, in der das Wohl der Katze an erster Stelle steht." },
          { question: "In welchen Regionen ist Miauzly verfügbar?", answer: "Miauzly richtet sich an Katzenhalter und Katzensitter in der Schweiz." },
          { question: "Welche Funktionen bietet Miauzly?", answer: "Vermittlung von Katzenhalter und Katzensitter gegen bezahlte Katzenbetreuung. Weitere Funktionen sind für die Zukunft geplant." },
          { question: "Bietet Miauzly eine Versicherung oder Garantie für Schäden an?", answer: "Miauzly ist eine Vermittlungsplattform und bietet keine eigene Versicherung oder Schadensgarantie an. Wir empfehlen Katzenhalter und Katzensitter, ihren bestehenden Versicherungsschutz zu prüfen und offene Fragen direkt mit ihrer Versicherung zu klären." },
          { question: "Wie kann ich Miauzly kontaktieren?", answer: "Bei Fragen zur Plattform, zur Registrierung oder zu einer Buchung kannst du dich über den auf unserer Website angegebenen Kontaktweg an uns wenden. Beschreibe dein Anliegen möglichst konkret, damit wir dir gezielt helfen können." },
        ],
      },
      owners: {
        title: "Für Katzenhalter*innen",
        items: [
          { question: "Wie finde ich einen passenden Katzensitter?", answer: "Vergleiche die verfügbaren Profile, Erfahrungen, Betreuungsangebote und Bewertungen. Besprich vor der Buchung die Bedürfnisse deiner Katze und deine Erwartungen an die Betreuung. So kannst du besser einschätzen, ob der Sitter zu euch passt." },
          { question: "Wie läuft eine Buchung ab?", answer: "Du suchst einen passenden Katzensitter, klärst die Details der Betreuung und stellst eine Buchungsanfrage über Miauzly. Sobald die Buchung bestätigt ist, kann die Betreuung wie vereinbart stattfinden. Den aktuellen Buchungsstatus und die weiteren Schritte findest du auf der Plattform." },
          { question: "Was kostet ein Katzensitter?", answer: "Die Preise werden von den Katzensitter selbst festgelegt. Sie können je nach Erfahrung, Betreuungsumfang und Dauer variieren. Der Betreuungspreis sowie die zusätzliche Servicegebühr von 2.50 CHF werden dir vor Abschluss der Buchung angezeigt." },
          { question: "Wann und wie bezahle ich die Betreuung?", answer: "Du bezahlst die Buchung vor Beginn der Betreuung über den vorgesehenen Zahlungsprozess von Miauzly. Für die Zahlungsabwicklung nutzen wir Stripe als Zahlungsdienstleister. Die Auszahlung an den Katzensitter erfolgt nach Abschluss der Betreuung gemäss den geltenden Auszahlungsbedingungen." },
          { question: "Warum sollte ich über Miauzly buchen und nicht direkt beim Sitter?", answer: "Wenn du über Miauzly buchst, profitierst du von einer transparenten Buchungs- und Zahlungsabwicklung. Nach jeder abgeschlossenen Betreuung kannst du eine Bewertung abgeben. So hilfst du anderen Katzenhalter, passende Sitter zu finden, und unterstützt zuverlässige Sitter dabei, Vertrauen und Sichtbarkeit aufzubauen.\n\nMit jeder Buchung über Miauzly hilfst du uns, diese Community weiterzuentwickeln und neue Funktionen für Katzenliebhaber zu ermöglichen." },
          { question: "Wie kann ich einschätzen, ob ein Katzensitter zuverlässig ist?", answer: "Sieh dir das Profil und die verfügbaren Bewertungen an. Besprich vorab die Bedürfnisse deiner Katze, deine Erwartungen und den Ablauf der Betreuung. Kläre offene Fragen, bevor du eine Buchung bestätigst.\n\nLies auch unseren Verhaltenskodex für Katzenhalter und unsere Hinweise für eine gute Betreuung." },
          { question: "Was sollte ich vor der ersten Betreuung vorbereiten?", answer: "Besprich mit deinem Katzensitter mindestens folgende Punkte:\nFutter, Fütterungszeiten und Trinkgewohnheiten\nKatzenklo und Reinigungsroutine\nMedikamente und gesundheitliche Besonderheiten\nCharakter, Ängste und individuelle Bedürfnisse\nVerhalten bei Notfällen und Kontaktdaten der Tierarztpraxis\nSchlüsselübergabe, Zugang zur Wohnung und deine Erreichbarkeit\n\nStelle ausreichend Futter, Streu und weitere benötigte Utensilien bereit. Je besser die Vorbereitung, desto entspannter ist die Betreuung für deine Katze." },
          { question: "Kann mein Katzensitter meiner Katze Medikamente geben?", answer: "Das sollte vorab ausdrücklich vereinbart werden. Informiere den Sitter über die erforderliche Anwendung und stelle sicher, dass er sich die Aufgabe zutraut. Bei Unsicherheiten sollte die Verabreichung mit der Tierarztpraxis geklärt werden." },
          { question: "Was ist, wenn meine Katze besonders scheu ist?", answer: "Viele Katzen brauchen Zeit, um Vertrauen zu einer neuen Person aufzubauen. Informiere deinen Sitter darüber, wie deine Katze auf Fremde reagiert und welche Situationen sie stressen können. Ein guter Katzensitter respektiert ihre Grenzen und zwingt sie nicht zu Kontakt. Teile möglichst genaue Informationen über ihre Gewohnheiten und Rückzugsmöglichkeiten." },
          { question: "Darf ich Fotos und Updates verlangen?", answer: "Das könnt ihr vorab gemeinsam vereinbaren. Viele Katzenhalter freuen sich über kurze Updates und Fotos während ihrer Abwesenheit. Besprecht, wie oft du informiert werden möchtest und über welchen Kanal die Kommunikation stattfinden soll." },
          { question: "Wie kann ich eine Buchung stornieren und welche Kosten fallen an?", answer: "Pläne können sich ändern. Für Stornierungen gelten bei Miauzly folgende Bedingungen:\n\nWenn du als Katzenhalter stornierst:\nMehr als 24 Stunden vor Betreuungsbeginn: Du erhältst den gesamten Betreuungspreis zurück. Die Servicegebühr von CHF 2.50 wird nicht zurückerstattet.\n\nWeniger als 24 Stunden vor Betreuungsbeginn: Du erhältst 50 % des Betreuungspreises zurück. Die Servicegebühr von CHF 2.50 wird nicht zurückerstattet. Die verbleibenden 50 % des Betreuungspreises werden abzüglich der Miauzly-Kommission von 15 % an den Katzensitter ausbezahlt. Die Kommission dient zur Deckung der Plattformkosten, der technischen Infrastruktur und Weiterentwicklung, der Zahlungsabwicklung sowie der Personal- und Administrationskosten.\n\nWenn der Katzensitter eine bestätigte Buchung storniert oder nicht erscheint:\nDu erhältst den gesamten bezahlten Betrag inklusive der Servicegebühr von CHF 2.50 zurück. Bei wiederholten Stornierungen kann Miauzly das Konto des Sitters einschränken oder sperren.\n\nBitte informiere die andere Person so früh wie möglich, wenn sich deine Pläne ändern." },
          { question: "Was passiert, wenn während der Betreuung etwas schiefgeht?", answer: "Besprich vor Betreuungsbeginn, wie du erreichbar bist und welche Tierarztpraxis im Notfall kontaktiert werden soll. Informiere den Sitter über gesundheitliche Besonderheiten deiner Katze und hinterlege eine Notfallkontaktperson. Bei einem akuten Notfall hat die notwendige tierärztliche Hilfe Vorrang. Bei Problemen mit der Buchung oder der Zusammenarbeit kannst du dich an Miauzly wenden." },
          { question: "Kann ich meinen Katzensitter nach der Betreuung bewerten?", answer: "Ja. Nach einer abgeschlossenen Betreuung kannst du deine Erfahrungen bewerten. Deine ehrliche und sachliche Bewertung hilft anderen Katzenhalter bei ihrer Entscheidung und unterstützt zuverlässige Katzensitter dabei, Vertrauen aufzubauen." },
          { question: "Was kann ich tun, wenn ich mit einer Betreuung unzufrieden bin?", answer: "Sprich das Problem möglichst zeitnah und sachlich mit deinem Katzensitter an. Wenn ihr keine Lösung findet oder ein ernsthaftes Problem vorliegt, kannst du dich an Miauzly wenden und den Sachverhalt möglichst konkret schildern." },
        ],
      },
      sitters: {
        title: "Für Katzensitter:innen",
        items: [
          { question: "Wie werde ich Katzensitter:in?", answer: "Du kannst dich als Katzensitter registrieren und dein Profil mit Informationen zu deiner Erfahrung, Verfügbarkeit und deinem Betreuungsangebot ergänzen." },
          { question: "Muss ich Erfahrung mit Katzen haben?", answer: "Ja, du solltest bereits Erfahrung mit Katzen haben und Verantwortung für ihr Wohlbefinden übernehmen. Gib deine Erfahrung ehrlich an und übernimm nur Betreuungen, für die du die nötigen Kenntnisse und Möglichkeiten mitbringst." },
          { question: "Was kostet es, Katzensitter bei Miauzly zu werden?", answer: "Die Registrierung ist kostenlos. Bei jeder erfolgreichen Buchung wird eine Provision von 15 % des Betreuungshonorars abgezogen. Diese deckt Plattformkosten, Zahlungsabwicklung und weitere Betriebskosten." },
          { question: "Wann erhalte ich mein Geld?", answer: "Deine Auszahlung wird automatisch ausgelöst, sobald das Sitting abgeschlossen ist: Wir überweisen deinen Anteil 3 Tage nach dem Sitting an unseren Zahlungspartner Stripe. Von dort wird das Geld auf dein Bankkonto ausgezahlt. Insgesamt dauert es in der Regel rund zwei Wochen nach dem letzten Sitting-Tag, bis das Geld auf deinem Konto ist." },
          { question: "Wie erhalte ich mehr Buchungsanfragen?", answer: "Ein vollständiges und authentisches Profil ist ein guter Anfang. Beschreibe deine Erfahrung und Verfügbarkeit, reagiere zuverlässig auf Anfragen und bitte nach abgeschlossenen Betreuungen freundlich um ehrliche Bewertungen." },
          { question: "Was passiert, wenn ich eine bestätigte Betreuung nicht wahrnehmen kann?", answer: "Informiere die Katzenhalter unverzüglich und versuche, gemeinsam eine Lösung zu finden. Bei wiederholten Stornierungen kann Miauzly dein Konto einschränken oder sperren." },
          { question: "Kann ich Zahlungen direkt von Katzenhaltern entgegennehmen?", answer: "Nutze den vorgesehenen Zahlungsprozess von Miauzly. So bleiben Buchung und Zahlung nachvollziehbar und werden gemäss den geltenden Plattformbedingungen abgewickelt." },
          { question: "Kann ich Bewertungen für mein Profil erhalten?", answer: "Ja. Nach abgeschlossenen Betreuungen können Katzenhalter ihre Erfahrungen bewerten. Bitte sie freundlich um ehrliches Feedback, ohne Druck auszuüben." },
          { question: "Warum sollen mich Halter über Miauzly buchen und nicht direkt?", answer: "Über Miauzly kannst du deine Sichtbarkeit erhöhen und mit positiven Bewertungen Vertrauen aufbauen. Die Buchungs- und Zahlungsabwicklung läuft bequem über die Plattform." },
        ],
      },
    },
    footer: {
      tagline: "Die Schweizer Plattform für Katzensitting und Community.",
      legal: "Rechtliches",
      links: {
        impressum: "Impressum",
    datenschutz: "Datenschutz",
    agb: "AGB",
    kontakt: "Kontakt",
      },
      contact: "hello@miauzly.ch",
      social: "Folge uns",
      copyright: "© 2026 miauzly.ch – Mit ❤️ für Katzen gemacht",
      madeWith: "",
    },
    privacy: {
      title: "Datenschutzerklärung für Miauzly",
      backLink: "Zurück",
      sections: {
        responsible: {
          title: "1. Verantwortliche Stelle",
          content: [
            "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
            "Miauzly",
            "E-Mail: hello@miauzly.ch",
          ],
        },
        collection: {
          title: "2. Erhebung und Verarbeitung personenbezogener Daten",
          content: [
            "Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen – zum Beispiel, wenn Sie Ihre E-Mail-Adresse auf unserer Website eintragen, um Informationen oder Updates zu Miauzly zu erhalten.",
            "Zusätzlich können bei der Nutzung der Website automatisch technische Daten (z. B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs) erhoben werden, um den sicheren Betrieb und die Stabilität der Website zu gewährleisten.",
          ],
        },
        purpose: {
          title: "3. Zweck der Datenverarbeitung",
          content: [
            "Die von Ihnen übermittelten Daten werden ausschliesslich dazu verwendet, Sie über Neuigkeiten und den Start von Miauzly zu informieren oder Ihre Anfrage zu beantworten.",
            "Eine Weitergabe an Dritte erfolgt nur, wenn dies für die technische Bereitstellung der Website notwendig ist.",
          ],
        },
        hosting: {
          title: "4. Hosting und Datenweitergabe",
          content: [
            "Unsere Website wird von Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Beim Aufruf der Website werden technische Daten (z. B. IP-Adresse, Browserinformationen) an Vercel übermittelt. Vercel verarbeitet diese Daten in unserem Auftrag.",
            "Sofern Sie Ihre E-Mail-Adresse über ein Formular einreichen, wird die Eingabe über den Dienst Web3Forms verarbeitet. Die Daten werden dabei verschlüsselt übertragen.",
          ],
        },
        storage: {
          title: "5. Speicherung der Daten",
          content: [
            "Ihre E-Mail-Adresse wird nur so lange gespeichert, wie sie für den jeweiligen Zweck erforderlich ist – insbesondere bis Sie Ihre Einwilligung widerrufen oder die Löschung verlangen.",
            "Sie können sich jederzeit per E-Mail an hello@miauzly.ch abmelden oder Ihre Daten löschen lassen.",
          ],
        },
        rights: {
          title: "6. Rechte der betroffenen Personen",
          content: [
            "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit gemäss dem Schweizer Datenschutzgesetz (DSG) und der Datenschutz-Grundverordnung (DSGVO).",
            "Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie uns eine E-Mail an hello@miauzly.ch senden.",
          ],
        },
        security: {
          title: "7. Sicherheit",
          content: [
            "Wir treffen geeignete technische und organisatorische Massnahmen, um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.",
          ],
        },
        changes: {
          title: "8. Änderungen dieser Datenschutzerklärung",
          content: [
            "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version ist jederzeit auf dieser Seite abrufbar.",
            "Letzte Aktualisierung: März 2026",
          ],
        },
      },
    },
    imprint: {
      title: "Impressum",
      backLink: "Zurück",
      sections: {
        responsible: {
          title: "Betreiberin / Verantwortlich für den Inhalt",
          content: [
            "E-Mail: hello@miauzly.ch",
            "Studio 2311 GmbH",
            "Steinberggasse 20",
            "8400 Winterthur Schweiz",
            "UID: CHE-170.333.789",
            "Miauzly ist eine Marke der Studio 2311 GmbH.",
          ],
        },
        disclaimer: {
          title: "Haftungsausschluss",
          content: [
            "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.",
          ],
        },
        lastUpdate: {
          content: "Letzte Aktualisierung: Oktober 2026",
        },
      },
    },
  },
  en: {
    hero: {
      badge: "Coming soon in Switzerland",
      title: "The Swiss platform for cat care and community.",
      description:
        "miauzly.ch is Switzerland's first platform by cat lovers for cat lovers. Find trusted cat sitters near you – or offer cat care yourself.",
      cta: "Sign up for free",
      secondaryCta: "Become a cat sitter",
      waitlist: "Free registration · Secure payments in CHF",
      waitlistLink: "Subscribe to newsletter",
    },
    howItWorks: {
      title: "How does miauzly work?",
      audiences: [
        {
          title: "For cat owners",
          steps: [
            { label: "Free login", description: "Register for free and book trusted cat sitters for a fee" },
            { label: "", description: "Book cat sitters for a fee whenever you need extra support" },
          ],
          note: "Cat owners can also become active as cat sitters",
        },
        {
          title: "For cat sitters",
          steps: [
            { label: "", description: "Create your personal profile and showcase your experience" },
            { label: "", description: "Apply for bookings or get requested directly" },
            { label: "Fair commission (15%)", description: "" },
            { label: "", description: "Collect reviews, build trust and receive more bookings" },
          ],
          note: "",
        },
      ],
    },
    forWhom: {
      title: "Who is miauzly for?",
      audiences: [
        {
          title: "For cat owners",
          benefits: [
            "Connect with cat owners in your area",
            "Or find loving, verified cat sitters for a fee\n",
          ],
        },
        {
          title: "For cat sitters",
          benefits: [
            "Share your love for cats – and earn flexibly\n",
            "Decide yourself when and how often you are available\n",
            "Become part of a local community of cat lovers\n",
          ],
        },
      ],
    },
    whyMiauzly: {
      title: "Why miauzly?",
      intro: [
        "We are cat owners ourselves. And every time a vacation or spontaneous trip comes up, the same worry arises: Who will take care of our furry friends? Each cat has its own character, routines, and needs. And we want someone who cares for them as lovingly as we would.",
        "While there are already platforms for pet care, they often seem impersonal, come with additional service fees, and most importantly: none are specialized for cats.\n\nFrom this need, miauzly.ch was born: A place where cat lovers come together. Where understanding, trust, and genuine cat love are at the center.\nBy cat lovers, for cat lovers.\n",
      ],
      features: [
        {
          title: "Cats only",
          description: "Not an all-in-one platform but specialized in genuine cat needs\n",
        },
        {
          title: "Real Community",
          description: "Meet cat lovers in your area",
        },
        {
          title: "Trustworthy",
          description: "Real reviews and verified members",
        },
        {
          title: "Flexible for every budget",
          description: "Sitters set their own rates – you choose what fits",
        },
        {
          title: "Swiss platform",
          description: "local, honest, transparent",
        },
        {
          title: "More for you",
          description: "Fair prices – clearly shown in CHF",
        },
      ],
    },
    sneakPreview: {
      title: "Take a look inside",
      mockups: ["Home", "Owner Profile", "Appointments", "Marketplace"],
      description: "",
      cta: "",
    },
    aboutUs: {
      title: "About us",
      backLink: "Back",
      navLabel: "About us",
      loginLabel: "Login",
      text: [
        "The inspiration for miauzly came from my two roommates and actual bosses of the house: Rubio & Ramiro, two blind, former street cats. Before every trip, I face the same question: Who will care for my furry friends lovingly and reliably? Professional care is often expensive or hard to access. Luckily, I have a network of people with their own cats and trustworthy cat sitters. We share tips and help each other out with vacation care. That's when I realised: Every cat lover should have a network like this.",
      ],
    },
    newsletter: {
      title: "Stay in the loop",
      subtitle: "",
      description: "Get occasional news, cat care tips and updates on new miauzly features. No ads, no spam.",
      emailLabel: "Email address",
      emailPlaceholder: "your@email.com",
      userTypeLabel: "I am... (optional)",
      userTypePlaceholder: "Please select",
      locationLabel: "Location (optional)",
      locationPlaceholder: "e.g. Zurich",
      userTypes: {
        owner: "Cat owner",
        sitter: "Sitter",
        both: "Both",
        none: "Neither",
      },
      submitButton: "Sign up now",
      privacy: "By signing up, you accept our privacy policy.",
      accountPrompt: "No account yet?",
      accountLink: "Sign up now at my.miauzly.ch",
      successTitle: "Thank you! 🎉",
      successMessage: "You are now on the waiting list.",
      successSubMessage: "We'll get in touch soon!",
  trustIndicators: ["Made in Switzerland", "Privacy guaranteed", "Community first"],
  },
  faq: {
  title: "FAQs",
  subtitle: "Frequently asked questions about Miauzly",
  general: {
        title: "General",
        items: [
          { question: "What is Miauzly?", answer: "Miauzly is a Swiss platform that connects cat owners with cat sitters. We focus entirely on cats and their individual needs." },
          { question: "What makes Miauzly different from other platforms?", answer: "Miauzly is 100% dedicated to cats. We want to connect cat owners and cat sitters and create a trusted community where the wellbeing of the cat comes first." },
          { question: "Which regions is Miauzly available in?", answer: "Miauzly is aimed at cat owners and cat sitters in Switzerland." },
          { question: "What features does Miauzly offer?", answer: "Matching cat owners with cat sitters for paid cat care. More features are planned for the future." },
          { question: "Does Miauzly offer insurance or a guarantee against damage?", answer: "Miauzly is a matching platform and does not offer its own insurance or guarantee against damage. We recommend that cat owners and cat sitters review their existing insurance coverage and clarify any open questions directly with their insurance provider." },
          { question: "How can I contact Miauzly?", answer: "For questions about the platform, registration or a booking, you can contact us through the contact method provided on our website. Please describe your request as specifically as possible so we can help you effectively." },
        ],
      },
      owners: {
        title: "For cat owners",
        items: [
          { question: "How do I find a suitable cat sitter?", answer: "Compare available profiles, experience, care offers and reviews. Discuss your cat's needs and your expectations before booking." },
          { question: "How does a booking work?", answer: "You search for a suitable cat sitter, clarify the care details and submit a booking request through Miauzly. Once confirmed, the care can take place as agreed." },
          { question: "How much does a cat sitter cost?", answer: "Cat sitters set their own prices, which may vary. The care price and the additional CHF 2.50 service fee are shown before you complete the booking." },
          { question: "When and how do I pay for the care?", answer: "You pay for the booking before the care begins through Miauzly's payment process. Stripe is used as our payment service provider. The cat sitter is paid after the care has been completed." },
          { question: "What should I prepare before the first booking?", answer: "Discuss food, feeding times, the litter box, medication, health details, your cat's personality, emergency contacts, key handover and how you can be reached. Provide enough food, litter and any other necessary supplies." },
          { question: "Can my cat sitter give my cat medication?", answer: "This should be explicitly agreed in advance. Explain how it must be administered and make sure the sitter feels comfortable with the task. If unsure, clarify it with the veterinary practice." },
          { question: "Can I request photos and updates?", answer: "You can agree this together in advance. Discuss how often you would like updates and which channel should be used." },
          { question: "How can I cancel a booking?", answer: "Cancellations are subject to Miauzly's current booking and cancellation terms. Please inform the other person as early as possible if your plans change." },
          { question: "Can I review my cat sitter after the care?", answer: "Yes. After completed care, you can honestly and factually review your experience. Your review helps other cat owners make their decision." },
        ],
      },
      sitters: {
        title: "For cat sitters",
        items: [
          { question: "How do I become a cat sitter?", answer: "You can register as a cat sitter and complete your profile with information about your experience, availability and care offer." },
          { question: "Do I need experience with cats?", answer: "Yes, you should already have experience with cats and be willing to take responsibility for their wellbeing. Be honest about your experience and only accept care assignments you are equipped to handle." },
          { question: "What does it cost to become a cat sitter on Miauzly?", answer: "Registration is free. A 15% commission of the care fee is deducted from each successful booking to cover platform, payment processing and operating costs." },
          { question: "When will I receive my money?", answer: "Your payment is automatically processed as soon as the pet-sitting assignment is complete: We transfer your share to our payment partner, Stripe, 3 days after the assignment ends. From there, the money is transferred to your bank account. It usually takes about two weeks after the last day of the assignment for the money to appear in your account." },
          { question: "How can I get more booking requests?", answer: "A complete and authentic profile is a good start. Describe your experience and availability, respond reliably and politely ask for honest reviews after completed care assignments." },
          { question: "What happens if I cannot fulfil a confirmed booking?", answer: "Inform the cat owner immediately and try to find a solution together. Miauzly may restrict or suspend your account in case of repeated cancellations." },
          { question: "Can I accept payments directly from cat owners?", answer: "Use Miauzly's designated payment process. This keeps bookings and payments traceable and ensures they are handled according to the platform terms." },
          { question: "Can I receive reviews for my profile?", answer: "Yes. Cat owners can review their experience after completed care assignments. Ask politely for honest feedback without applying pressure." },
          { question: "Why should owners book me through Miauzly instead of directly?", answer: "Miauzly helps you increase your visibility and build trust through positive reviews. Booking and payment are handled conveniently through the platform." },
        ],
      },
    },
    footer: {
      tagline: "The Swiss platform for cat sitting and community.",
      legal: "Legal",
      links: {
        impressum: "Imprint",
    datenschutz: "Privacy",
    agb: "Terms",
    kontakt: "Contact",
      },
      contact: "hello@miauzly.ch",
      social: "Follow us",
      copyright: "© 2026 miauzly.ch – Made with ❤️ for cats",
      madeWith: "",
    },
    privacy: {
      title: "Privacy Policy for Miauzly",
      backLink: "Back",
      sections: {
        responsible: {
          title: "1. Responsible Party",
          content: ["Responsible for data processing on this website:", "Miauzly", "Email: hello@miauzly.ch"],
        },
        collection: {
          title: "2. Collection and Processing of Personal Data",
          content: [
            "We only collect personal data if you provide it voluntarily – for example, when you enter your email address on our website to receive information or updates about Miauzly.",
            "Additionally, technical data (e.g., IP address, browser type, time of access) may be collected automatically when using the website to ensure secure operation and stability.",
          ],
        },
        purpose: {
          title: "3. Purpose of Data Processing",
          content: [
            "The data you provide is used exclusively to inform you about news and the launch of Miauzly or to respond to your inquiry.",
            "Data is only shared with third parties if necessary for the technical provision of the website.",
          ],
        },
        hosting: {
          title: "4. Hosting and Data Sharing",
          content: [
            "Our website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. When accessing the website, technical data (e.g., IP address, browser information) is transmitted to Vercel. Vercel processes this data on our behalf.",
            "If you submit your email address via a form, the input is processed by the Web3Forms service. The data is transmitted in encrypted form.",
          ],
        },
        storage: {
          title: "5. Data Storage",
          content: [
            "Your email address is only stored for as long as necessary for the respective purpose – especially until you revoke your consent or request deletion.",
            "You can unsubscribe or have your data deleted at any time by sending an email to hello@miauzly.ch.",
          ],
        },
        rights: {
          title: "6. Rights of Data Subjects",
          content: [
            "You have the right to information, correction, deletion, restriction of processing, and data portability in accordance with the Swiss Data Protection Act (DSG) and the General Data Protection Regulation (GDPR).",
            "You can revoke your consent at any time by sending us an email to hello@miauzly.ch.",
          ],
        },
        security: {
          title: "7. Security",
          content: [
            "We take appropriate technical and organizational measures to protect your data from loss, misuse, and unauthorized access.",
          ],
        },
        changes: {
          title: "8. Changes to this Privacy Policy",
          content: [
            "We reserve the right to update this privacy policy as needed. The current version is always available on this page.",
            "Last updated: March 2026",
          ],
        },
      },
    },
    imprint: {
      title: "Imprint",
      backLink: "Back",
      sections: {
        responsible: {
          title: "Operator / Responsible for the content",
          content: [
            "Email: hello@miauzly.ch",
            "Studio 2311 GmbH",
            "Steinberggasse 20",
            "8400 Winterthur, Switzerland",
            "UID: CHE-170.333.789",
            "Miauzly is a brand of Studio 2311 GmbH.",
          ],
        },
        disclaimer: {
          title: "Disclaimer",
          content: [
            "Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.",
          ],
        },
        lastUpdate: {
          content: "Last updated: October 2026",
        },
      },
    },
  },
}
