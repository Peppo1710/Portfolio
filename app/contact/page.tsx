import { Navigation } from "../components/nav"
import { Card } from "../components/card"
import { Download, Mail, Phone, Github, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Contact</h2>
          <p className="mt-4 text-zinc-400">
            Get in touch with me for collaborations, opportunities, or just to say hello.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-12">
          {/* Download CV Button with fluorescent ivory white gradient */}
          <Link
            href="/Pradyumn_Resume.pdf"
            target="_blank"
            className="group relative inline-flex items-center justify-center px-8 py-4 mb-16 overflow-hidden font-medium transition duration-300 ease-out border-2 rounded-full shadow-md"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-gradient-to-r from-white via-ivory to-[#fffff0] group-hover:translate-x-0 ease-in-out">
              <Download className="w-6 h-6 mr-2" />
              Download CV
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease-in-out">
              <Download className="w-6 h-6 mr-2" />
              Download CV
            </span>
            <span className="relative invisible">Download CV</span>
          </Link>

          {/* Contact Cards */}
          <div className="flex flex-row flex-wrap gap-8 w-full max-w-4xl justify-center items-stretch">
            {/* Email Card */}
            <Card>
              <div className="relative w-full p-4 md:p-8 h-full flex flex-col items-center justify-center group">
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors duration-200">
                  <Mail className="w-8 h-8 text-zinc-200" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white">Email</h3>
                <p className="mt-2 text-center text-zinc-400 group-hover:text-zinc-300">
                  <a href="mailto:your.email@example.com" className="hover:underline">
                    pradyumn17.iiitn@gmail.com
                  </a>
                </p>
              </div>
            </Card>

            {/* Phone Card */}
            <Card >
              <div className="relative w-full p-4 md:p-8 h-full flex flex-col items-center justify-center group">
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors duration-200">
                  <Phone className="w-8 h-8 text-zinc-200" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white">Phone</h3>
                <p className="mt-2 text-center text-zinc-400 group-hover:text-zinc-300">
                  <a href="tel:+1234567890" className="hover:underline">
                    (+91)80807-92138
                  </a>
                </p>
              </div>
            </Card>

            {/* GitHub Card */}
            <Card>
              <div className="relative w-full p-4 md:p-8 h-full flex flex-col items-center justify-center group">
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors duration-200">
                  <Github className="w-8 h-8 text-zinc-200" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white">GitHub</h3>
                <p className="mt-2 text-center text-zinc-400 group-hover:text-zinc-300">
                  <a
                    href="https://github.com/Pradyumn1710"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/Pradyumn1710
                  </a>
                </p>
              </div>
            </Card>

            {/* X (Twitter) Card */}
            <Card>
              <div className="relative w-full p-4 md:p-8 h-full flex flex-col items-center justify-center group">
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors duration-200">
                  <Twitter className="w-8 h-8 text-zinc-200" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white">X (Twitter)</h3>
                <p className="mt-2 text-center text-zinc-400 group-hover:text-zinc-300">
                  <a
                    href="https://x.com/Xandacross17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @Xandacross17
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
