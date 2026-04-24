export type Language = "de" | "en"

export const translations = {
  de: {
    hero: {
      badge: "Bald verfügbar in der Schweiz",
      title: "Liebevolle Katzensitter finden oder selber Katzenliebe teilen",
      description:
        "Bald verfügbar: miauzly.ch ist die neue Plattform von Katzenfans für Katzenfans in der Schweiz. Verbinde dich bei uns mit Katzenhalter*innen in deiner Nähe für gegenseitige Betreuung im Tausch oder finde liebevolle Katzensitter gegen Bezahlung.",
      cta: "Auf Interessentenliste setzen",
      waitlist: "Trage dich auf die Warteliste ein und erfahre, wenn miauzly startet.",
    },
    howItWorks: {
      title: "So einfach funktioniert's",
      steps: [
        {
          title: "Profil erstellen",
          description: "Profil erstellen als Katzenbesitzer:in oder Sitter",
        },
        {
          title: "Vernetzen",
          description:
            "Vernetze dich mit Katzenfans in deiner Nähe für gegenseitige, kostenlose Betreuung oder finde verlässliche Katzensitter gegen Bezahlung!",
        },
        {
          title: "Kennenlernen",
          description:
            "Lernt euch persönlich kennen, bevor die erste Betreuung stattfindet – für ein gutes Gefühl auf beiden Seiten.",
        },
      ],
    },
    forWhom: {
      title: "Für wen ist miauzly?",
      audiences: [
        {
          title: "Für Katzenhalter:innen",
          benefits: [
            "Mit Katzenbesitzer*innen in der Nähe vernetzen & Betreuung tauschen",
            "Finde liebevolle Katzensitter gegen Bezahlung",
            "Marktplatz für Zubehör & Services",
            "Forum für Fragen, Tipps & Austausch",
          ],
        },
        {
          title: "Für Katzensitter:innen",
          benefits: [
            "Katzenliebe teilen – und dabei etwas dazuverdienen",
            "Bestimme selbst, wann du verfügbar bist",
            "Werde Teil einer liebevollen Katzen-Community",
          ],
        },
      ],
    },
    whyMiauzly: {
      title: "Warum miauzly?",
      intro: [
        "Wir sind selbst Katzenbesitzer. Und jedes Mal, wenn Ferien oder ein spontaner Ausflug ansteht, kommt dieselbe Sorge: Wer kümmert sich um unsere Fellnasen? Jede Katze hat eigene Bedürfnisse. Und wir wünschen uns jemanden, der während unserer Abwesenheit genauso liebevoll aufpasst wie wir selbst. Weil uns diese Frage so oft beschäftigt hat, haben wir miauzly.ch gegründet: eine Plattform von Katzenfans für Katzenfans in der Schweiz.",
        "Hier kannst du dich mit Katzenhalter:innen in deiner Nähe vernetzen, euch gegenseitig kostenlos unterstützen und dabei Geld sparen. Oder du findest liebevolle Katzensitter gegen Bezahlung.",
      ],
      features: [
        {
          title: "Nur für Katzen",
          description: "Spezialisiert auf die Bedürfnisse von Katzenhalter:innen",
        },
        {
          title: "Community-basiert",
          description: "gegenseitig helfen statt anonym buchen",
        },
        {
          title: "Vertrauensvoll",
          description: "Profile, Bewertungen, Verifizierung",
        },
        {
          title: "Flexibel",
          description: "Bezahlt oder kostenlos gegen gegenseitige Katzenbetreuung",
        },
        {
          title: "Schweizer Plattform",
          description: "lokal, ehrlich, transparent",
        },
      ],
    },
    sneakPreview: {
      title: "Ein erster Blick auf miauzly",
      mockups: ["Home", "Profil Halter*innen", "Termine", "Marktplatz"],
      description: "Wir entwickeln gerade die erste Version von miauzly.ch.",
      cta: "Melde dich an, um frühzeitig Zugang zur Beta zu erhalten",
    },
    aboutUs: {
      title: "Über uns",
      backLink: "Zurück",
      navLabel: "Über uns",
      text: [
        "Die Inspiration für Miauzly entstand durch meine beiden Mitbewohner und eigentlichen Chefs des Hauses: Rubio & Ramiro, zwei blinde, ehemalige Strassenkater.",
        "Jedes Mal, wenn ich verreisen wollte, stand ich vor der Herausforderung, jemanden zu finden, der sich liebevoll und zuverlässig um meine Fellnasen kümmert – so, als wären es die eigenen Katzen. Professionelle Betreuung ist dabei oft kostspielig und nicht für jede*n leicht zugänglich.",
        "Glücklicherweise habe ich in meinem nahen Umfeld viele tolle Menschen mit Katzen, mit denen wir uns austauschen, gegenseitig unterstützen und auch bei der Ferienbetreuung helfen.",
        "Ich dachte mir: So ein Netzwerk sollte jede*r haben. Aus diesem Gedanken entstand Miauzly – eine Schweizer Community, die Katzenbesitzer*innen verbindet, Erfahrungsaustausch ermöglicht und Menschen zusammenbringt, die Katzen lieben.",
      ],
    },
    newsletter: {
      title: "Trag dich ein – wir halten dich auf dem Laufenden!",
      subtitle: "Wir starten bald mit der Beta.",
      description: "Wenn du als Erste:r dabei sein möchtest, trag deine E-Mail-Adresse ein. Keine Werbung, kein Spam.",
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
      successTitle: "Vielen Dank! 🎉",
      successMessage: "Du bist jetzt auf der Interessentenliste.",
      successSubMessage: "Wir melden uns bald bei dir!",
      trustIndicators: ["Made in Switzerland", "Datenschutz garantiert", "Community first"],
    },
    footer: {
      tagline: "Die Schweizer Plattform für Katzensitting und Community.",
      legal: "Rechtliches",
      links: {
        impressum: "Impressum",
        datenschutz: "Datenschutz",
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
          title: "Verantwortlich für den Inhalt dieser Website:",
          content: ["Miauzly", "E-Mail: hello@miauzly.ch"],
        },
        disclaimer: {
          title: "Haftungsausschluss",
          content: [
            "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.",
          ],
        },
        lastUpdate: {
          content:           "Letzte Aktualisierung: März 2026",
        },
      },
    },
  },
  en: {
    hero: {
      badge: "Coming soon in Switzerland",
      title: "Find loving cat sitters or share your love for cats",
      description:
        "Coming soon: miauzly.ch is the new platform by cat lovers for cat lovers in Switzerland. Connect with cat owners nearby for mutual care exchange or find reliable cat sitters for a fee.",
      cta: "Join the waiting list now",
      waitlist: "Sign up for the waiting list and find out when miauzly launches.",
    },
    howItWorks: {
      title: "How it works",
      steps: [
        {
          title: "Create profile",
          description: "Create a profile as a cat owner or sitter",
        },
        {
          title: "Connect",
          description: "Connect with cat lovers nearby for mutual, free care or find reliable cat sitters for a fee!",
        },
        {
          title: "Meet",
          description:
            "Get to know each other in person before the first care session – for a good feeling on both sides.",
        },
      ],
    },
    forWhom: {
      title: "Who is miauzly for?",
      audiences: [
        {
          title: "For cat owners",
          benefits: [
            "Connect with nearby cat owners & exchange care",
            "Find loving cat sitters for a fee",
            "Marketplace for accessories & services",
            "Forum for questions, tips & exchange",
          ],
        },
        {
          title: "For cat sitters",
          benefits: [
            "Share your love for cats – and earn some extra money",
            "Decide yourself when you are available",
            "Become part of a loving cat community",
          ],
        },
      ],
    },
    whyMiauzly: {
      title: "Why miauzly?",
      intro: [
        "We are cat owners ourselves. And every time a vacation or spontaneous trip comes up, the same worry arises: Who will take care of our furry friends? Every cat has its own needs. And we want someone who cares as lovingly as we do during our absence. Because this question has occupied us so often, we founded miauzly.ch: a platform by cat lovers for cat lovers in Switzerland.",
        "Here you can connect with cat owners nearby, support each other for free and save money. Or you can find loving cat sitters for a fee.",
      ],
      features: [
        {
          title: "Cats only",
          description: "Specialized in the needs of cat owners",
        },
        {
          title: "Community-based",
          description: "help each other instead of anonymous booking",
        },
        {
          title: "Trustworthy",
          description: "Profiles, reviews, verification",
        },
        {
          title: "Flexible",
          description: "Paid or free in exchange for mutual cat care",
        },
        {
          title: "Swiss platform",
          description: "local, honest, transparent",
        },
      ],
    },
    sneakPreview: {
      title: "A first look at miauzly",
      mockups: ["Home", "Owner Profile", "Appointments", "Marketplace"],
      description: "We are currently developing the first version of miauzly.ch.",
      cta: "Sign up to get early access to the beta",
    },
    aboutUs: {
      title: "About us",
      backLink: "Back",
      navLabel: "About us",
      text: [
        "The inspiration for Miauzly came from my two roommates and actual bosses of the house: Rubio & Ramiro, two blind, former street cats.",
        "Every time I wanted to travel, I faced the challenge of finding someone to care for my furry friends lovingly and reliably – as if they were their own cats. Professional care is often expensive and not easily accessible for everyone.",
        "Fortunately, I have many wonderful people with cats in my close circle, with whom we exchange experiences, support each other, and also help with vacation care.",
        "I thought to myself: Everyone should have such a network. From this thought, Miauzly was born – a Swiss community that connects cat owners, enables experience exchange, and brings together people who love cats.",
      ],
    },
    newsletter: {
      title: "Sign up – we'll keep you updated!",
      subtitle: "We're launching the beta soon.",
      description: "If you want to be among the first, enter your email. No ads, no spam.",
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
      successTitle: "Thank you! 🎉",
      successMessage: "You are now on the waiting list.",
      successSubMessage: "We'll get in touch soon!",
      trustIndicators: ["Made in Switzerland", "Privacy guaranteed", "Community first"],
    },
    footer: {
      tagline: "The Swiss platform for cat sitting and community.",
      legal: "Legal",
      links: {
        impressum: "Imprint",
        datenschutz: "Privacy",
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
          title: "Responsible for the content of this website:",
          content: ["Miauzly", "Email: hello@miauzly.ch"],
        },
        disclaimer: {
          title: "Disclaimer",
          content: [
            "Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.",
          ],
        },
        lastUpdate: {
          content:           "Last updated: March 2026",
        },
      },
    },
  },
}
