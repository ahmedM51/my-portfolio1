"use client"

import { useRef, useState, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/data/translations"
import { projectsData } from "@/data/projects"

const categoryColors = {
  education: "4c1d95",
  services: "0369a1",
  corporate: "334155",
  ecommerce: "166534",
  systems: "713f12",
  restaurants: "991b1b",
  tourism: "0c4a6e",
}

const placeholderImage = (title, category) =>
  `https://placehold.co/800x600/${categoryColors[category] || "1e1b4b"}/ffffff?text=${encodeURIComponent(title)}`

export default function Projects() {
  const { lang, dir } = useLanguage()
  const t = translations[lang].projects
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })
  const [activeCategory, setActiveCategory] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const categories = [
    { key: "all", label: t.categories.all },
    { key: "corporate", label: t.categories.corporate },
    { key: "ecommerce", label: t.categories.ecommerce },
    { key: "systems", label: t.categories.systems },
    { key: "education", label: t.categories.education },
    { key: "restaurants", label: t.categories.restaurants },
    { key: "services", label: t.categories.services },
    { key: "tourism", label: t.categories.tourism },
  ]

  const projects = useMemo(() => {
    return projectsData.map((p) => ({
      ...p,
      title: p.title[lang],
      description: p.description[lang],
      results: p.results[lang],
      image: placeholderImage(p.title.en, p.category),
    }))
  }, [lang])

  const filtered = useMemo(
    () => projects.filter((p) => (activeCategory === "all" ? true : p.category === activeCategory)),
    [activeCategory, projects]
  )

  const displayed = showAll ? filtered : filtered.slice(0, 9)
  const hasMore = filtered.length > 9

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" dir={dir} className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
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
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key)
                setShowAll(false)
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 font-medium ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayed.map((project, index) => (
            <motion.div
              key={`${activeCategory}-${project.id}-${index}`}
              variants={itemVariants}
              className="bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-52 overflow-hidden bg-gray-800 shrink-0">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src =
                      "https://placehold.co/800x600/1e1b4b/a78bfa?text=Image+Not+Available"
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <ul className="mb-6 space-y-1.5 flex-1">
                  {project.results.slice(0, 5).map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700/50">
                  <a
                    href={project.url}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    {t.ctaLive}
                  </a>
                  <a
                    href="https://wa.me/201025612869"
                    className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={16} />
                    {t.ctaContact}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              {t.showAll}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
