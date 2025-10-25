"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "The Developer", href: "/home" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Experience", href: "/experience" },
];

export default function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && window.performance && window.performance.getEntriesByType) {
      const navEntries = window.performance.getEntriesByType("navigation");
      if (navEntries.length > 0) {
        const navType = (navEntries[0] as PerformanceNavigationTiming).type;
        // Only animate on direct entry ("navigate")
        if (navType === "navigate") {
          setShouldAnimate(true);
        } else {
          setShouldAnimate(false);
        }
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className={`my-16 ${shouldAnimate ? "animate-fade-in" : ""}`}>
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className={`hidden w-screen h-px ${shouldAnimate ? "animate-glow" : ""} md:block ${shouldAnimate ? "animate-fade-left" : ""} bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0`} />
      <Particles
        className={`absolute inset-0 -z-10 ${shouldAnimate ? "animate-fade-in" : ""}`}
        quantity={100}
      />
      <h1 className={`py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline ${shouldAnimate ? "animate-title" : ""} font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text `}>
        Pradyumn
      </h1>

      <div className={`hidden w-screen h-px ${shouldAnimate ? "animate-glow" : ""} md:block ${shouldAnimate ? "animate-fade-right" : ""} bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0`} />
      <div className={`my-16 text-center ${shouldAnimate ? "animate-fade-in" : ""}`}>
        <h2 className="text-sm text-zinc-500 ">
        While others wait for one to finish, I begin with all — time bends for those who think in threads.
        </h2>
      </div>
    </div>
  );
}

/* 
  In every parallel algorithm lies a truth: unity is born not from sameness, but from synchronized chaos.

  While others seek clarity in a single thread, I find truth in the chaos of concurrency — for in parallelism, the universe reveals its real speed.
*/
