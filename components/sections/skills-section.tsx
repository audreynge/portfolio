"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Bot,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  KanbanSquare,
  Monitor,
  Network,
  Puzzle,
  Settings2,
  Wrench,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type SkillItem = {
  name: string
  iconUrl?: string
  fallbackIcon?: LucideIcon
}

const skills: Array<{
  category: string
  icon: LucideIcon
  items: SkillItem[]
}> = [
  {
    category: "Languages",
    icon: Code2,
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
    icon: Monitor,
    items: [
      { name: "React", iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "HTML/CSS", fallbackIcon: Braces },
    ],
  },
  {
    category: "Backend & Data",
    icon: Database,
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
    icon: Cloud,
    items: [
      { name: "Azure", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", iconUrl: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "Argo CD", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
      { name: "Sentry", iconUrl: "https://cdn.simpleicons.org/sentry/FFFFFF" },
      { name: "RudderStack", fallbackIcon: BarChart3 },
    ],
  },
  {
    category: "Systems & AI",
    icon: Network,
    items: [
      { name: "Distributed Systems", fallbackIcon: Network },
      { name: "MCP Servers", fallbackIcon: Puzzle },
      { name: "Agentic Workflows", fallbackIcon: Bot },
    ],
  },
  {
    category: "Tools & Practices",
    icon: Wrench,
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
      className="min-h-[calc(100vh-10rem)] flex flex-col justify-center py-8"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl shadow-lg p-6 bg-primary/10 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-700">
                <div className="p-2 rounded-lg bg-gray-800 text-primary">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-200">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 bg-gray-800/60 text-primary font-medium px-3 py-2 rounded-lg shadow-sm border border-gray-700"
                  >
                    {skill.iconUrl ? (
                      <img src={skill.iconUrl} alt={`${skill.name} icon`} className="h-3.5 w-3.5" />
                    ) : skill.fallbackIcon ? (
                      <skill.fallbackIcon className="h-3.5 w-3.5 opacity-90" />
                    ) : (
                      <Settings2 className="h-3.5 w-3.5 opacity-90" />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
