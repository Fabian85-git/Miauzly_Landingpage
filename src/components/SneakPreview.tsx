import { Smartphone } from "lucide-react";

export function SneakPreview() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mb-4">
            Ein erster Blick auf miauzly
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Mockup 1: Dashboard */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2D2D2D] rounded-[3rem] p-4 shadow-2xl w-full max-w-[280px]">
              <div className="bg-white rounded-[2.5rem] overflow-hidden h-[520px]">
                {/* Status bar */}
                <div className="bg-white h-8 flex items-center justify-center">
                  <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="p-4 space-y-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm">Katzensitter in deiner Nähe</h3>
                    <div className="w-8 h-8 rounded-full bg-[#FFF5E6]"></div>
                  </div>
                  
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-xl p-3 shadow-sm">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F2A81D] to-[#4982A6]"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-3 bg-[#F5F5F0] rounded w-24"></div>
                          <div className="h-2 bg-[#F5F5F0] rounded w-16"></div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <div key={star} className="w-3 h-3 text-[#FFB7C5]">⭐</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#6B6B6B]">Dashboard mit Profilen</p>
          </div>
          
          {/* Mockup 2: Chat/Buchung */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2D2D2D] rounded-[3rem] p-4 shadow-2xl w-full max-w-[280px]">
              <div className="bg-white rounded-[2.5rem] overflow-hidden h-[520px]">
                <div className="bg-white h-8 flex items-center justify-center">
                  <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="p-4 space-y-4 bg-gray-50 h-full">
                  <div className="flex items-center gap-3 bg-white rounded-xl p-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F2A81D] to-[#4982A6]"></div>
                    <div>
                      <div className="h-3 bg-[#F5F5F0] rounded w-20 mb-1"></div>
                      <div className="h-2 bg-[#F5F5F0] rounded w-16"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                      <div className="h-2 bg-[#F5F5F0] rounded w-full mb-1"></div>
                      <div className="h-2 bg-[#F5F5F0] rounded w-3/4"></div>
                    </div>
                    
                    <div className="bg-[#4982A6] text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] ml-auto">
                      <div className="h-2 bg-white/30 rounded w-full mb-1"></div>
                      <div className="h-2 bg-white/30 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#6B6B6B]">Chat & Buchungsansicht</p>
          </div>
          
          {/* Mockup 3: Community Tausch */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2D2D2D] rounded-[3rem] p-4 shadow-2xl w-full max-w-[280px]">
              <div className="bg-white rounded-[2.5rem] overflow-hidden h-[520px]">
                <div className="bg-white h-8 flex items-center justify-center">
                  <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="p-4 space-y-4 bg-gray-50">
                  <div className="text-center">
                    <h3 className="text-sm mb-2">Tauschbörse</h3>
                    <div className="inline-flex gap-2 bg-white rounded-full p-1 shadow-sm">
                      <button className="px-4 py-2 rounded-full bg-[#F2A81D] text-white text-xs">
                        Angebote
                      </button>
                      <button className="px-4 py-2 rounded-full text-[#6B6B6B] text-xs">
                        Gesuche
                      </button>
                    </div>
                  </div>
                  
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-xl p-3 shadow-sm">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex gap-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF5E6] to-[#E8F3F8] flex items-center justify-center">
                            🐱
                          </div>
                          <div>
                            <div className="h-3 bg-[#F5F5F0] rounded w-16 mb-1"></div>
                            <div className="h-2 bg-[#F5F5F0] rounded w-12"></div>
                          </div>
                        </div>
                        <div className="text-xs text-[#F2A81D]">🔄</div>
                      </div>
                      <div className="h-2 bg-[#F5F5F0] rounded w-full mb-1"></div>
                      <div className="h-2 bg-[#F5F5F0] rounded w-4/5"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#6B6B6B]">Community-Tauschübersicht</p>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-[#6B6B6B]">
            Wir entwickeln gerade die erste Version von miauzly.ch.<br />
            Melde dich an, um frühzeitig Zugang zur Beta zu erhalten 🐾
          </p>
        </div>
      </div>
    </section>
  );
}
