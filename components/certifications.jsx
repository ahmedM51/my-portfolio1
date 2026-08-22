"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/data/translations"

export default function Certifications() {
  const { lang, dir } = useLanguage()
  const t = translations[lang].certifications
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const certifications = [
    {
      title: "Introduction to Digital Marketing",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/NWQNAVWD94VV",
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/5KPPNPQ6V1YH",
    },
    {
      title: "Google AI Specialization",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/BTG7P3PBB5EO",
    },
    {
      title: "AI for Content Creation",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/WNE150RD2CWY",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="certifications" dir={dir} className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] -z-10 -translate-y-1/2"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t.title}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg shadow-purple-500/20 shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-gray-400 mb-4">{cert.issuer}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    {t.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
