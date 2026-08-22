"use client"

import { useRef, useEffect, useState } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNpm, FaBootstrap, FaSearch } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiVercel,
  SiSass,
  SiTypescript,
  SiThreedotjs,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si"
import { MdAdsClick } from "react-icons/md"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/data/translations"

export default function Skills() {
  const { lang, dir } = useLanguage()
  const t = translations[lang].skills
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

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={36} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={36} /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={36} /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" size={36} /> },
    { name: "Next.js", icon: <SiNextdotjs size={36} /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#E34F26]" size={36} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={36} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={36} /> },
    { name: "Three.js", icon: <SiThreedotjs className="text-[#000000]" size={36} /> },
    { name: "Framer Motion", icon: <SiFramer className="text-[#000000]" size={36} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" size={36} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={36} /> },
  ]

  const technologies = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={24} /> },
    { name: "GitHub", icon: <FaGithub size={24} /> },
    { name: "Redux-toolkit", icon: <SiRedux className="text-[#764ABC]" size={24} /> },
    { name: "npm", icon: <FaNpm className="text-[#CB3837]" size={24} /> },
    { name: "Vercel", icon: <SiVercel size={24} /> },
    { name: "SASS/SCSS", icon: <SiSass className="text-[#CC6699]" size={24} /> },
    { name: "SEO", icon: <FaSearch className="text-[#4285F4]" size={24} /> },
    { name: "Social Media Ads", icon: <MdAdsClick className="text-[#FF5722]" size={24} /> },
  ]

  return (
    <section id="skills" dir={dir} className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">{t.core}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800/60 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium text-center text-sm">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">{t.tools}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-gray-800/60 rounded-xl border border-gray-700/50 hover:border-purple-500/30 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 group"
                >
                  <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
