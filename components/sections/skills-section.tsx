"use client"

import { motion } from "framer-motion"
import {
  Bot,
  Braces,
  Cpu,
  Database,
  KanbanSquare,
  Network,
  Puzzle,
  Settings2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type SkillItem = {
  name: string
  iconUrl?: string
  fallbackIcon?: LucideIcon
}

const skills: Array<{
  category: string
  items: SkillItem[]
}> = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Go", iconUrl: "https://cdn.simpleicons.org/go/00ADD8" },
      { name: "Java", iconUrl: "https://cdn.simpleicons.org/openjdk/FFFFFF" },
      { name: "C#", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "C", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/c/c-original.svg" },
      { name: "C++", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "x86 Assembly", fallbackIcon: Cpu },
      { name: "SQL", fallbackIcon: Database },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "HTML/CSS", fallbackIcon: Braces },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Express", iconUrl: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Cosmos DB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cosmosdb/cosmosdb-original.svg" },
      { name: "Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Snowflake", iconUrl: "https://cdn.simpleicons.org/snowflake/29B5E8" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Azure", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", iconUrl: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "Argo CD", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
      { name: "Sentry", iconUrl: "https://cdn.simpleicons.org/sentry/FFFFFF" },
      { name: "RudderStack", iconUrl: "https://www.rudderstack.com/images/logos/logo-mark-white.svg" },
    ],
  },
  {
    category: "Systems & AI",
    items: [
      { name: "Distributed Systems", fallbackIcon: Network },
      { name: "MCP Servers", fallbackIcon: Puzzle },
      { name: "Agentic Workflows", fallbackIcon: Bot },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", iconUrl: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Figma", iconUrl: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Agile/Scrum", fallbackIcon: KanbanSquare },
    ],
  },
]

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto w-full py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
      <div>
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 md:grid-cols-[13rem_1fr] md:gap-4 py-5 border-t border-gray-800"
          >
            <h3 className="text-sm font-medium text-gray-400 md:pt-0.5">{group.category}</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {group.items.map((skill) => {
                const FallbackIcon = skill.fallbackIcon ?? Settings2
                return (
                  <li key={skill.name} className="inline-flex items-center gap-2 text-gray-200">
                    {skill.iconUrl ? (
                      <img src={skill.iconUrl} alt="" className="h-4 w-4" />
                    ) : (
                      <FallbackIcon className="h-4 w-4 text-gray-400" aria-hidden />
                    )}
                    {skill.name}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
