"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Linkedin, Globe, Phone } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/data/translations"
import Image from "next/image"

export default function Navbar() {
  const { lang, dir, toggleLang } = useLanguage()
  const t = translations[lang].nav
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.skills, href: "#skills" },
    { name: t.certifications, href: "#certifications" },
    { name: t.projects, href: "#projects" },
    { name: t.contact, href: "#contact" },
  ]

  return (
    <header
      dir={dir}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl py-3 shadow-lg shadow-purple-900/10 border-b border-gray-800/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
              <Image
                src="https://h.top4top.io/p_38322s08n1.jpeg"
                alt="Ahmed Mohamed"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Ahmed
            </span>
            <span className="text-white">Mohamed</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors text-sm font-medium group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=201025612869&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-800 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <Phone size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-mohamed-127532318"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-800 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-all border border-gray-700"
            >
              <Globe size={14} />
              {t.language}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gray-800 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-all border border-gray-700"
            >
              <Globe size={12} />
              {t.language}
            </button>
            <button
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 bg-gray-950/95 border-t border-gray-800">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white py-2 transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-3 pt-4 border-t border-gray-800">
              <a
                href="https://api.whatsapp.com/send/?phone=201025612869&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-green-400 hover:text-white transition-all"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-mohamed-127532318"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-blue-400 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
