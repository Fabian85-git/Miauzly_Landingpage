"use client"

import { useState, type FormEvent } from "react"
import { Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  async function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData()
    formData.append("access_key", "5f1f06aa-ed2b-483f-b2cc-844fa01b8b93")
    formData.append("email", email)
    formData.append("subject", "Neue Newsletter-Anmeldung von miauzly.ch")
    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })
    const data = await response.json()
    if (data.success) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <footer className="bg-[#2D2D2D] text-white px-4 py-12 bg-[rgba(46,46,46,1)]">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl">miauzly.ch</h3>
            </div>
            <p className="text-gray-400">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm opacity-60">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  {t.footer.links.impressum}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  {t.footer.links.datenschutz}
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  {t.footer.links.agb}
                </Link>
              </li>
              <li>
                <Link href="/verhaltenskodex" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  Verhaltenskodex
                </Link>
              </li>
              <li>
                <a href="mailto:hello@miauzly.ch" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  hello@miauzly.ch
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm opacity-60">Newsletter erhalten</h4>
            {submitted ? (
              <p className="text-sm text-gray-300">Danke für deine Anmeldung.</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex max-w-sm gap-2">
                <label htmlFor="footer-newsletter-email" className="sr-only">E-Mail-Adresse</label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="deine@email.ch"
                  className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFC736]"
                />
                <button type="submit" className="rounded-full bg-[#FFC736] px-4 py-2 text-sm font-medium text-[#2D2D2D] hover:bg-[#ffd45c]">
                  Senden
                </button>
              </form>
            )}
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm opacity-60">{t.footer.social}</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/miauzlycats"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4ECDC4] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@miauzlycats"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4ECDC4] flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
