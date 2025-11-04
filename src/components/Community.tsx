import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart } from "lucide-react";

export function Community() {
  const scrollToNewsletter = () => {
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1642799476920-0ebfac73897b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwY2F0JTIwdHJ1c3R8ZW58MXx8fHwxNzYxMjU0MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vertrauensvolle Katzenbetreuung"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              
              {/* Floating heart */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                <Heart className="w-6 h-6 text-[#D92534] fill-[#D92534]" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl text-[#2D2D2D]">
              Gemeinsam für glückliche Katzen
            </h2>
            
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              miauzly.ch entsteht aus einer Idee:<br />
              Katzen sollen in ihrer vertrauten Umgebung bleiben können – und wir helfen einander dabei.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8F3F8] flex items-center justify-center flex-shrink-0 mt-1">
                  🏡
                </div>
                <div className="text-left">
                  <p className="text-[#2D2D2D]">Weniger Stress für deine Katze</p>
                  <p className="text-sm text-[#6B6B6B]">Keine Tierpension – Betreuung im gewohnten Zuhause</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFF5E6] flex items-center justify-center flex-shrink-0 mt-1">
                  🤝
                </div>
                <div className="text-left">
                  <p className="text-[#2D2D2D]">Echte Community</p>
                  <p className="text-sm text-[#6B6B6B]">Lerne andere Katzenliebhaber in deiner Nähe kennen</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8F3F8] flex items-center justify-center flex-shrink-0 mt-1">
                  💚
                </div>
                <div className="text-left">
                  <p className="text-[#2D2D2D]">Flexibel und fair</p>
                  <p className="text-sm text-[#6B6B6B]">Entscheide selbst: bezahlte Betreuung oder Tausch</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={scrollToNewsletter}
              className="bg-[#F2A81D] hover:bg-[#E09815] text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Ich möchte informiert werden 🐾
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
