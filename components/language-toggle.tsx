"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
      <Button
        onClick={() => setLanguage("de")}
        className={`rounded-full px-3 py-1 text-sm transition-all ${
          language === "de" ? "bg-white text-[#2D2D2D] hover:bg-white" : "bg-transparent text-white hover:bg-white/20"
        }`}
        variant="ghost"
        size="sm"
      >
        DE
      </Button>
      <Button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-sm transition-all ${
          language === "en" ? "bg-white text-[#2D2D2D] hover:bg-white" : "bg-transparent text-white hover:bg-white/20"
        }`}
        variant="ghost"
        size="sm"
      >
        EN
      </Button>
    </div>
  )
}
