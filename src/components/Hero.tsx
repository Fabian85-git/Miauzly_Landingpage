import { Button } from "./ui/button";
import LogoWhite2 from "../imports/LogoWhite2";

export function Hero() {
  const scrollToNewsletter = () => {
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1730465661954-edef864f9a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBjb3p5JTIwaG9tZSUyMHdhcm18ZW58MXx8fHwxNzYxMjU0ODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Katze zuhause"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      {/* Logo in top left */}
        <div className="absolute top-9 left-9 z-10 h-[100px] w-[100px]">
        <LogoWhite2 />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-[#4982A6] px-4 py-2 mb-6">
              <span className="text-sm text-white">Bald verfügbar in der Schweiz</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6">
              Liebevolle Katzensitter finden oder selber Katzenliebe schenken
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              miauzly.c ist die neue Plattform von Katzenfans für Katzenfans in der Schweiz. 
              Verbinde dich mit Katzenbesitzer*innen in deiner Nähe  für gegenseitige Betreuung im 
              Tausch oder finde liebevolle Katzensitter gegen Bezahlung
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={scrollToNewsletter}
                className="bg-[#F2A81D] hover:bg-[#E09815] text-white rounded-full px-12 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Jetzt auf die Interessentenliste setzen
              </Button>
              
              <p className="text-sm text-gray-300 max-w-md">
                Trage dich auf die Warteliste ein und erfahre, wenn miauzly startet.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
