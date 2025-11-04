import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, CheckCircle2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && userType) {
      // In a real app, this would send to a backend
      console.log("Newsletter signup:", { email, userType });
      setSubmitted(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        setUserType("");
      }, 5000);
    }
  };

  return (
    <section id="newsletter" className="bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#F2A81D] to-[#4982A6] mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mb-4">
                  Trag dich ein – wir halten dich auf dem Laufenden!
                </h2>
                <p className="text-lg text-[#6B6B6B]">
                  Wir starten bald mit der Beta.<br />
                  Wenn du als Erste:r dabei sein möchtest, trag deine E-Mail ein. Keine Werbung, kein Spam.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail-Adresse</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="deine@email.ch"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl border-gray-200 bg-gray-50 h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="userType">Ich bin...</Label>
                  <Select value={userType} onValueChange={setUserType} required>
                    <SelectTrigger id="userType" className="rounded-xl border-gray-200 bg-gray-50 h-12">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="owner">Katzenbesitzer:in</SelectItem>
                      <SelectItem value="sitter">Sitter</SelectItem>
                      <SelectItem value="both">Beides</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#F2A81D] hover:bg-[#E09815] text-white rounded-full py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  Jetzt anmelden 🐾
                </Button>
                
                <p className="text-xs text-center text-[#6B6B6B]">
                  Mit der Anmeldung akzeptierst du unsere Datenschutzbestimmungen.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E8F3F8] mb-6 animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-[#4982A6]" />
              </div>
              <h3 className="text-2xl text-[#2D2D2D] mb-4">
                Vielen Dank! 🎉
              </h3>
              <p className="text-lg text-[#6B6B6B] mb-6">
                Du bist jetzt auf der Interessentenliste.<br />
                Wir melden uns bald bei dir!
              </p>
              <div className="text-6xl animate-[wave_0.5s_ease-in-out_infinite]">
                🐾
              </div>
            </div>
          )}
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          <div>
            <div className="text-2xl mb-1">🇨🇭</div>
            <p className="text-sm text-[#6B6B6B]">Made in Switzerland</p>
          </div>
          <div>
            <div className="text-2xl mb-1">🔒</div>
            <p className="text-sm text-[#6B6B6B]">Datenschutz garantiert</p>
          </div>
          <div>
            <div className="text-2xl mb-1">💚</div>
            <p className="text-sm text-[#6B6B6B]">Community first</p>
          </div>
        </div>
      </div>
    </section>
  );
}
