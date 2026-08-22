"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Building, Award, FileText } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/data/translations"

export default function About() {
  const { lang, dir } = useLanguage()
  const t = translations[lang].about
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <section id="about" dir={dir} className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <Image
                src="/profile.jpeg"
                alt={t.name}
                width={220}
                height={220}
                className="relative w-48 h-48 rounded-full object-cover border-4 border-purple-500/30 shadow-2xl"
                unoptimized
              />
            </div>
          </motion.div>

          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-wider text-purple-400 mb-2 font-medium">
              {t.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t.name}</h2>
            <p className="text-purple-300 text-lg mb-4">{t.role}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <InfoCard icon={<GraduationCap size={28} />} title={t.educationTitle}>
                <p className="text-gray-300 leading-relaxed">{t.education}</p>
              </InfoCard>

              <InfoCard icon={<Briefcase size={28} />} title={t.experienceTitle}>
                <p className="text-gray-300 mb-2 font-medium">{t.experienceRole}</p>
                <p className="text-gray-400 leading-relaxed">{t.experienceText}</p>
              </InfoCard>

              <InfoCard icon={<Building size={28} />} title={t.companyTitle}>
                <p className="text-gray-400 leading-relaxed">{t.companyText}</p>
              </InfoCard>
            </div>

            <div className="space-y-6">
              <InfoCard icon={<Award size={28} />} title={t.projectTitle}>
                <p className="text-gray-400 mb-4 leading-relaxed">{t.projectText}</p>
                <ul className="space-y-3 text-gray-300">
                  {t.projectFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 mt-4 leading-relaxed">{t.projectOutro}</p>
              </InfoCard>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://drive.google.com/file/d/1kXeIkJw38V86FNefeW5-5QZWCLtInyjN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-105"
            >
              <FileText size={18} /> {t.resume}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">{icon}</div>
        <h4 className="text-xl font-semibold text-white">{title}</h4>
      </div>
      {children}
    </div>
  )
}
