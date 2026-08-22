"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp, Linkedin, Phone, MessageCircle, Mail } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/data/translations"

export default function Footer() {
  const { lang, dir } = useLanguage()
  const t = translations[lang].footer
  const n = translations[lang].nav

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const links = [
    { name: n.home, href: "#home" },
    { name: n.about, href: "#about" },
    { name: n.skills, href: "#skills" },
    { name: n.certifications, href: "#certifications" },
    { name: n.projects, href: "#projects" },
    { name: n.contact, href: "#contact" },
  ]

  return (
    <footer dir={dir} className="bg-gray-900 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Vera
              </span>
              <span className="text-white">Tech</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">{t.description}</p>
            <div className="flex gap-3">
              <SocialLink href="https://www.linkedin.com/in/ahmed-mohamed-127532318" color="blue">
                <Linkedin size={18} />
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/am6313518?rdid=WmLCAOgDNrSEYLFh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AtY6UZJQF%2F#"
                color="indigo"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              </SocialLink>
              <SocialLink href="https://wa.me/201025612869" color="green">
                <MessageCircle size={18} />
              </SocialLink>
              <SocialLink href="mailto:contact@vera-tech-web.com" color="purple">
                <Mail size={18} />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contactInfo}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-purple-500" />
                <a
                  href="https://api.whatsapp.com/send/?phone=201025612869&text&type=phone_number&app_absent=0"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  01025612869
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MessageCircle size={16} className="text-green-500" />
                <a href="https://wa.me/201025612869" target="_blank" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-blue-500" />
                <a href="mailto:contact@vera-tech-web.com" className="hover:text-white transition-colors">
                  contact@vera-tech-web.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ahmed Mohamed. {t.rights}
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all border border-gray-700"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, color, children }) {
  const colors = {
    blue: "text-blue-400 hover:bg-blue-500 hover:text-white",
    indigo: "text-indigo-400 hover:bg-indigo-500 hover:text-white",
    green: "text-green-400 hover:bg-green-500 hover:text-white",
    purple: "text-purple-400 hover:bg-purple-500 hover:text-white",
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2.5 rounded-lg bg-gray-800 transition-all duration-300 hover:-translate-y-1 ${colors[color]}`}
    >
      {children}
    </a>
  )
}
