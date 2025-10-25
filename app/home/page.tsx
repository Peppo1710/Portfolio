import { Navigation } from "../components/nav"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Hero Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
              <span className="block text-zinc-400 text-2xl sm:text-3xl mb-2">Hii</span>
              <span className="block">Pradyumn this side</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-300">
              Crafting the future with code—across the web, blockchain, and high-performance computing.
            </h2>

            <p className="text-lg italic text-zinc-400">
              "Bridging the worlds of web, blockchain, and high-performance computing—one elegant solution at a time."
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed max-w-lg">
              I build robust web and web3 applications, craft smart contracts in Solidity, and engineer high-performance solutions in C++ and CUDA. My passion lies in merging cutting-edge technology with creative problem-solving, delivering impactful digital experiences across the stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/projects"
                className="group flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-zinc-200 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors duration-200"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-zinc-800 bg-zinc-200 rounded-full hover:bg-white transition-colors duration-200"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/LelouchviBritannia.jpg"
              alt="Pradyumn as Lelouch"
              width={340}
              height={420}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full h-px bg-zinc-800 my-16"></div>

        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Skills & Expertise</h2>
          <p className="mt-4 text-zinc-400">Technologies and tools I work with on a regular basis.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            "C++",
            "Solidity",
            "Web3",
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Parallel Computing",
            "CUDA"
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-colors duration-200"
            >
              <p className="text-center text-zinc-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
