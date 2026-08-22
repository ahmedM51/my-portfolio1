"use client"

import { Send, Mail, Phone, MapPin, Linkedin, Globe, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/data/translations"
import Image from "next/image"

export default function Contact() {
  const { lang, dir } = useLanguage()
  const t = translations[lang].contact

  return (
    <section id="contact" dir={dir} className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">{t.infoTitle}</h3>
              <div className="space-y-5">
                <InfoRow
                  icon={<Phone size={20} />}
                  label={t.whatsapp}
                  value="01025612869"
                  href="https://api.whatsapp.com/send/?phone=201025612869&text&type=phone_number&app_absent=0"
                />
                <InfoRow
                  icon={<MapPin size={20} />}
                  label={t.location}
                  value={lang === "ar" ? "المنصورة، شارع الجلاء" : "Mansoura, El Galaa Street"}
                />
                <InfoRow
                  icon={<Globe size={20} />}
                  label={t.website}
                  value="vera-tech-web.com"
                  href="https://vera-tech-web.com"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">{t.follow}</h3>
              <div className="flex gap-3">
                <SocialLink href="https://www.linkedin.com/in/ahmed-mohamed-127532318" color="blue">
                  <Linkedin size={20} />
                </SocialLink>
                <SocialLink
                  href="https://www.facebook.com/am6313518?rdid=WmLCAOgDNrSEYLFh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AtY6UZJQF%2F#"
                  color="indigo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </SocialLink>
                <SocialLink href="https://wa.me/201025612869" color="green">
                  <MessageCircle size={20} />
                </SocialLink>
                <SocialLink href="mailto:contact@vera-tech-web.com" color="purple">
                  <Mail size={20} />
                </SocialLink>
              </div>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden border border-gray-800">
              <Image
                src="https://placehold.co/600x300/1e1b4b/a78bfa?text=Let's+Connect"
                alt="Contact"
                fill
                className="object-cover opacity-60"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 to-transparent"></div>
            </div>
          </div>

          <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-6">{t.formTitle}</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white"
                    placeholder="Ahmed Mohamed"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                  {t.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {t.send}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-gray-800 text-purple-400">{icon}</div>
      <div>
        <h4 className="font-medium mb-1 text-white">{label}</h4>
        <p className="text-gray-400 text-sm">{value}</p>
      </div>
    </div>
  )

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:bg-gray-800/50 p-2 -mx-2 rounded-xl transition-colors"
    >
      {content}
    </a>
  ) : (
    <div className="p-2 -mx-2">{content}</div>
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
      className={`p-3 rounded-lg bg-gray-800 transition-all duration-300 hover:-translate-y-1 ${colors[color]}`}
    >
      {children}
    </a>
  )
}
