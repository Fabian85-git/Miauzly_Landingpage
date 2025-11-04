import { Cat, Users, Shield, Lightbulb, MapPin } from "lucide-react";

export function WhyMiauzly() {
  const features = [
    {
      icon: <Cat className="w-8 h-8" />,
      emoji: "🐱",
      title: "Nur für Katzen",
      description: "Spezialisiert auf die Bedürfnisse von Katzenbesitzer:innen"
    },
    {
      icon: <Users className="w-8 h-8" />,
      emoji: "🤝",
      title: "Community-basiert",
      description: "gegenseitig helfen statt anonym buchen"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      emoji: "🏡",
      title: "Vertrauensvoll",
      description: "Profile, Bewertungen, Verifizierung"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      emoji: "💡",
      title: "Flexibel",
      description: "Bezahlt oder kostenlos gegen gegenseitige Katzenbetreuung"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      emoji: "🇨🇭",
      title: "Schweizer Plattform",
      description: "lokal, ehrlich, transparent"
    }
  ];

  return (
    <section className="bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mb-6">
            Warum miauzly.ch?
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-[#2D2D2D]">
            <p>
              Wir sind selbst Katzenbesitzer. Und jedes Mal, wenn Ferien oder ein spontaner Ausflug ansteht, kommt dieselbe Sorge: Wer kümmert sich um unsere Fellnasen? Jede Katze hat eigene Bedürfnisse. Und wir wünschen uns jemanden, der während unserer Abwesenheit genauso liebevoll aufpasst wie wir selbst. Weil uns diese Frage so oft beschäftigt hat, haben wir miauzly.ch gegründet: eine Plattform von Katzenfans für Katzenfans in der Schweiz.
            </p>
            <p>
              Hier kannst du dich mit Katzenbesitzer*innen in deiner Nähe vernetzen, euch gegenseitig kostenlos unterstützen und dabei Geld sparen. Oder du findest liebevolle Katzensitter gegen Bezahlung.
            </p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF5E6] to-[#E8F3F8] flex items-center justify-center text-2xl flex-shrink-0">
                  {feature.emoji}
                </div>
                <div>
                  <h3 className="mb-2 text-[#2D2D2D]">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B6B6B]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
