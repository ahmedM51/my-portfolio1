"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en")
  const [dir, setDir] = useState("ltr")

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("portfolio-lang") : null
    if (saved === "ar" || saved === "en") {
      setLang(saved)
      setDir(saved === "ar" ? "rtl" : "ltr")
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
      document.documentElement.dir = dir
    }
  }, [lang, dir])

  const toggleLang = () => {
    const next = lang === "en" ? "ar" : "en"
    setLang(next)
    setDir(next === "ar" ? "rtl" : "ltr")
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio-lang", next)
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
