import { Heart, Users } from "lucide-react";

export function ForWhom() {
  const audiences = [
    {
      icon: <Heart className="w-8 h-8" />,
      emoji: "🏠",
      title: "Für Katzenbesitzer:innen",
      color: "#F2A81D",
      benefits: [
        "Wähle zwischen Bezahlung oder Nachbarschaftstausch",
        "Liebevolle Katzensitter gegen Bezahlung finden",
        "Mit Katzenbesitzer*innen in der Nähe vernetzen & Betreuung tauschen Marktplatz für Zubehör & Services",
        "Forum für Fragen, Tipps & Austausch"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      emoji: "🐾",
      title: "Für Katzensitter:innen",
      color: "#4982A6",
      benefits: [
        "Katzenliebe schenken – und dabei etwas dazuverdienen",
        "Bestimme selbst, wann du verfügbar bist",
        "Werde Teil einer liebevollen Katzen-Community",
        
      ]
    }
  ];

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mb-4">
            Für wen ist miauzly?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ backgroundColor: `${audience.color}15` }}
                >
                  {audience.emoji}
                </div>
                <h3 className="text-[#2D2D2D]">
                  {audience.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: audience.color }}
                    >
                      <svg 
                        className="w-4 h-4 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={3} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </div>
                    <p className="text-[#2D2D2D] flex-1">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
