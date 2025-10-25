import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye, Github, ExternalLink } from "lucide-react";

// Featured Projects
const featuredProjects = [
  {
    slug: "lu_factorization",
    title: "LU Factorization",
    description:
      "A CUDA and C-based implementation of LU decomposition for efficient matrix factorization, optimized for parallel processing.",
    date: "2024-02-15",
    published: true,
    type: "featured",
  },
  {
    slug: "secondbrain",
    title: "Second Brain",
    description:
      "A MERN stack end to end project that allows you to create a knowledge base and search for information. Inspired by Notion and Tiago Forte's Second Brain concept.",
    date: "2024-03-10",
    published: true,
    type: "featured",
  },
];

// Common Projects
const commonProjects = [
  {
    slug: "navix",
    title: "Navix",
    description:
      "A ship navigation system built with a C++ backend for core logic, an Express backend server, and a React frontend using Leaflet.js. It uses data structures and Dijkstra's algorithm to find optimal routes from A to B.",
    date: "2024-04-05",
    published: true,
    type: "common",
  },
  {
    slug: "echo",
    title: "Echo",
    description:
      "A web application that utilizes machine learning to interpret sign language and includes speech-to-text functionality, built with React and Node.js.",
    date: "2024-04-20",
    published: true,
    type: "common",
  },
  {
    slug: "skillo",
    title: "Skillo",
    description:
      "A basic course selling application that is simple and classic.",
    date: "2024-04-20",
    published: true,
    type: "common",
  },
  {
    slug: "mailmywork",
    title: "MailMyWork Extension",
    description:
      "A browser extension that acts as both a to-do tracker and a mailer. It paraphrases and sends your daily scrum updates to your boss automatically, helping you manage daily tasks and focus on what matters most.",
    date: "2024-05-10",
    published: true,
    type: "common",
  },
];

const experience = [
  {
    slug: "scoas",
    title: "SCOAS",
    description:
      "A web application that utilizes machine learning to interpret sign language and includes speech-to-text functionality, built with React and Node.js.",
    date: "2024-04-20",
    published: true,
    type: "experience",
  },
  {
    slug: "incence",
    title: "Echo",
    description:
      "A web application that utilizes machine learning to interpret sign language and includes speech-to-text functionality, built with React and Node.js.",
    date: "2024-04-20",
    published: true,
    type: "experience",
  }
]
export const revalidate = 60;

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-zinc-300">Featured</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <Card key={project.slug}>
                  <article className="relative w-full p-4 md:p-8 flex flex-col">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        {project.date ? (
                          <time dateTime={new Date(project.date).toISOString()}>
                            {Intl.DateTimeFormat(undefined, {
                              dateStyle: "medium",
                            }).format(new Date(project.date))}
                          </time>
                        ) : (
                          <span>SOON</span>
                        )}
                      </div>
                    </div>

                    <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                      {project.title}
                    </h2>
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {project.description}
                    </p>
                    <div className="mt-8 flex gap-3">
                      <a
                        href={`https://github.com/Pradyumn1710/${project.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-100 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={`https://${project.slug}.pradyumn.co.in`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-100 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        <span>Deploy</span>
                      </a>
                    </div>
                  </article>
                </Card>
              ))}
            </div>
          </>
        )}

        <div className="w-full h-px bg-zinc-800 my-8" />

        {/* Common Projects */}
        {commonProjects.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-zinc-300">Common</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {commonProjects.map((project) => (
                <Card key={project.slug}>
                  <article className="p-4 md:p-8 flex flex-col">
                    <div className="flex justify-between gap-2 items-center">
                      <span className="text-xs text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                        {project.date ? (
                          <time dateTime={new Date(project.date).toISOString()}>
                            {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                              new Date(project.date),
                            )}
                          </time>
                        ) : (
                          <span>SOON</span>
                        )}
                      </span>
                    </div>
                    <h2 className="z-20 text-xl font-medium lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {project.title}
                    </h2>
                    <p className="z-20 mt-4 text-sm text-zinc-400 group-hover:text-zinc-200">
                      {project.description}
                    </p>
                    <div className="mt-6 flex gap-3">
                      <a
                        href={`https://github.com/Pradyumn1710/${project.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-100 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={`https://${project.slug}.pradyumn.co.in`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-100 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        <span>Deploy</span>
                      </a>
                    </div>
                  </article>
                </Card>
              ))}
            </div>
          </>
        )}
</div>
    </div>
  );
}

