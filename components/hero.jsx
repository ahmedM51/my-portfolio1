"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/data/translations"

export default function Hero() {
  const { lang, dir } = useLanguage()
  const t = translations[lang].hero
  const textRef = useRef(null)
  const typingRef = useRef(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const roles = t.roles
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 100

    if (typingRef.current) clearTimeout(typingRef.current)

    const type = () => {
      const currentRole = roles[roleIndex]
      textElement.textContent = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1)

      charIndex += isDeleting ? -1 : 1
      typingSpeed = isDeleting ? 50 : 100

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true
        typingSpeed = 1500
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
      }

      typingRef.current = setTimeout(type, typingSpeed)
    }

    typingRef.current = setTimeout(type, 500)

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current)
    }
  }, [t, lang])

  return (
    <section
      id="home"
      dir={dir}
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[url('../public/coverHero.jpg')] bg-cover bg-center bg-no-repeat h-screen bg-fixed"
    >
      <div className="absolute inset-0 bg-gray-950/70"></div>
      <div className="container px-4 md:px-6 z-10">
        <span className="inline-block px-4 py-1 mb-4 rounded-full text-sm font-medium bg-gray-800/80 text-gray-300">
          {t.badge}
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          {t.intro}{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {t.name}
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8 flex items-center justify-center gap-2">
          <span>{t.subtitle}</span>
          <span ref={textRef} className="text-white font-medium min-w-[10rem]"></span>
          <span className="inline-block w-0.5 h-6 bg-purple-500 animate-pulse"></span>
        </div>

        <p className="max-w-2xl text-gray-300 mb-10 mx-auto text-lg leading-relaxed">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:scale-105"
          >
            {t.ctaWork}
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all hover:scale-105 border border-gray-700"
          >
            {t.ctaContact}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a
          href="#about"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}
