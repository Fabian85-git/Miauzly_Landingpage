import { UserCircle, Search, Handshake } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <UserCircle className="w-12 h-12" />,
      number: "1",
      title: "Profil erstellen",
      description: "als Katzenbesitzer:in oder Sitter"
    },
    {
      icon: <Search className="w-12 h-12" />,
      number: "2",
      title: "Liebevolle Katzensitter gegen Bezahlung finden",
      description: "– oder sich mit Katzenbesitzer*innen zur gegenseitigen Betreuung vernetzen."
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      number: "3",
      title: "Treffen vereinbaren & Vertrauen aufbauen",
      description: "vor der ersten Betreuung"
    }
  ];

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mb-4">
            So einfach funktioniert's
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#F2A81D] to-[#4982A6]"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFF5E6] to-[#E8F3F8] flex items-center justify-center text-[#4982A6] shadow-lg">
                  {step.icon}
                </div>
                
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F2A81D] text-white mb-4">
                  {step.number}
                </div>
                
                <h3 className="mb-2 text-[#2D2D2D]">
                  {step.title}
                </h3>
                
                <p className="text-[#6B6B6B]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
