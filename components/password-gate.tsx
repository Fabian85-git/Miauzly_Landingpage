"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const CORRECT_PASSWORD = "12345678"
const STORAGE_KEY = "miauzly_auth"

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "true") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem(STORAGE_KEY, "true")
      setError(false)
    } else {
      setError(true)
      setPassword("")
    }
  }

  if (isLoading) {
    return null
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue to-brand-yellow p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center text-[#2D2D2D] mb-2">Geschützter Bereich</h1>
            <p className="text-center text-[#6B6B6B] mb-6">Bitte geben Sie das Passwort ein, um fortzufahren.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError(false)
                  }}
                  placeholder="Passwort eingeben"
                  className={`w-full ${error ? "border-red-500" : ""}`}
                  autoFocus
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2">Falsches Passwort. Bitte versuchen Sie es erneut.</p>
                )}
              </div>

              <Button type="submit" className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-gray-900">
                Entsperren
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
