import { Cairo } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext"

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata = {
  title: "Ahmed Mohamed | Vera Tech",
  description:
    "Professional portfolio of Ahmed Mohamed, founder of Vera Tech. Web development, AI education, and digital solutions.",
}

export default function RootLayout({ children }) {
  return (
    <html className="dark scroll-smooth">
      <body
        className={`${cairo.variable} font-sans bg-gray-950 text-gray-100 antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
