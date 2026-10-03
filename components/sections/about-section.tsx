"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Briefcase } from "lucide-react"

type Logo = {
  src: string
  alt: string
}

type Role = {
  title: string
  team?: string
  period: string
  description?: string
  incoming?: boolean
}

type Company = {
  organization: string
  logo?: Logo
  roles: Role[]
}

const education = {
  school: "Northeastern University",
  degree: "Bachelor of Science in Computer Science",
  period: "Sep. 2024 - May 2028",
  details: "Concentration: Systems · Minor: Math",
  logo: {
    src: "https://logos.hunter.io/northeastern.edu",
    alt: "Northeastern University logo",
  },
}

const experience: Company[] = [
  {
    organization: "Datadog",
    logo: {
      src: "https://www.google.com/s2/favicons?domain=datadoghq.com&sz=128",
      alt: "Datadog logo",
    },
    roles: [
      {
        title: "Software Engineer Intern",
        period: "Jan. 2027 - Apr. 2027",
        incoming: true,
      },
    ],
  },
  {
    organization: "Zipline",
    logo: {
      src: "https://www.google.com/s2/favicons?domain=flyzipline.com&sz=128",
      alt: "Zipline logo",
    },
    roles: [
      {
        title: "Software Engineer Intern",
        team: "Marketplace Software",
        period: "Jun. 2026 - Sep. 2026",
        description:
          "Shipped a merchant portal in Go that integrates Snowflake analytics with Redis caching to surface order and financial metrics for delivery partners, and a menu & availability tab for restaurant partners to manage menus and item stock status. Integrated Sentry for error monitoring and RudderStack for product analytics.",
      },
    ],
  },
  {
    organization: "Microsoft",
    logo: {
      src: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      alt: "Microsoft logo",
    },
    roles: [
      {
        title: "Software Engineer Intern",
        team: "Azure Resource Graph",
        period: "Apr. 2026 - Jun. 2026",
        description:
          "Built a distributed C# background worker to reconcile inconsistencies between Azure Data Lake and Cosmos DB and clean up abandoned staging data, using Cosmos DB FeedRanges, ETag-based concurrency control, and batch processing validated across 200+ unit tests.",
      },
      {
        title: "Software Engineer Intern",
        team: "Dynamics 365 Field Service",
        period: "Jan. 2026 - Apr. 2026",
        description:
          "Designed and built 2 end-to-end agent architectures with MCP servers, Power Automate, and Azure that let field technicians run work order operations through natural language in Copilot, spanning work orders, bookable resource bookings, and work order products and services. Built 10 agentic workflows and ran 30+ LLM evaluations to validate prompt and tool behavior.",
      },
    ],
  },
  {
    organization: "Siemens",
    logo: {
      src: "https://www.google.com/s2/favicons?domain=siemens.com&sz=128",
      alt: "Siemens logo",
    },
    roles: [
      {
        title: "Software Engineer Intern",
        team: "Innovation Core",
        period: "Jun. 2025 - Dec. 2025",
        description:
          "Deployed a project management platform for 300+ employees with TypeScript, React, Next.js, and PostgreSQL, improving query performance ~30% and accelerating deployments by containerizing services on Rancher.",
      },
    ],
  },
  {
    organization: "Northeastern SGA",
    logo: {
      src: "https://www.google.com/s2/favicons?domain=northeasternsga.com&sz=128",
      alt: "Northeastern SGA logo",
    },
    roles: [
      {
        title: "Software Engineer",
        team: "Digital Innovation",
        period: "Jan. 2025 - Oct. 2025",
        description:
          "Migrated the Northeastern SGA website from Squarespace to a self-hosted platform with custom interactive components. Built an admin dashboard with drag-and-drop tools that let SGA staff reassign members across pages and edit titles without touching code.",
      },
    ],
  },
  {
    organization: "Wordmogul",
    logo: {
      src: "/images/logos/wordmogul.png",
      alt: "Wordmogul logo",
    },
    roles: [
      {
        title: "Software Engineer Intern",
        period: "May 2024 - Nov. 2024",
        description:
          "Built LLM-powered blog generation with the OpenAI API, turning user prompts into full drafts and titles, and a scheduling system for timed post publishing using Python and Go. Set up event-driven Slack alerts on key user actions like page visits, post creation, and editing to surface engagement in real time.",
      },
    ],
  },
]

function CompanyLogo({ logo }: { logo?: Logo }) {
  return logo ? (
    <img src={logo.src} alt={logo.alt} className="h-6 w-6 shrink-0 rounded-sm" />
  ) : (
    <Briefcase className="h-5 w-5 text-primary shrink-0" />
  )
}

function RoleDetails({ role }: { role: Role }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-primary font-medium">{role.title}</span>
          {role.team && <span className="text-sm text-gray-300">· {role.team}</span>}
          {role.incoming && (
            <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
              Incoming
            </span>
          )}
        </div>
        <span className="text-xs uppercase tracking-wide text-gray-400 whitespace-nowrap">{role.period}</span>
      </div>
      {role.description && <p className="mt-1 text-sm text-gray-400">{role.description}</p>}
    </div>
  )
}

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-10rem)] flex flex-col justify-center py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">About Me</h2>
      <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center max-w-5xl mx-auto w-full">
        <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-600 opacity-20 blur-xl" />
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
            <Image
              src="/images/goldengatephoto.jpg"
              alt="Golden Gate Bridge"
              fill
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-gray-300">
            I&apos;m a software engineer from Queens, NY with 3+ years of experience building web applications and solving
            complex problems. I have experience in full-stack development, agentic AI, distributed systems, and product engineering.
          </p>
          <p className="text-gray-300">
            I became interested in software development during my junior year of high school when I decided to learn web
            development myself through <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer" className="underline">The Odin Project</a>. I really enjoyed the process of bringing ideas to life through code. Since then, I&apos;ve worked on various projects, ranging from personal websites to
            complex applications for hackathons and companies.
          </p>
          <p className="text-gray-300">
            I&apos;m a huge self-learner and believe that the best way to grow is by taking on new challenges, being
            consistent, and finishing what you start. Outside of coding, I enjoy speedcubing, photography, and photo editing!
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full mt-16">
        <h3 className="text-2xl font-semibold mb-6">Education</h3>
        <div className="border-l-2 border-primary pl-4">
          <div className="flex items-center gap-2 mb-2">
            <CompanyLogo logo={education.logo} />
            <span className="font-semibold text-base">{education.school}</span>
          </div>
          <RoleDetails role={{ title: education.degree, period: education.period, description: education.details }} />
        </div>

        <h3 className="text-2xl font-semibold mt-12 mb-6">Experience</h3>
        <ul className="space-y-8">
          {experience.map((company) => (
            <li key={company.organization} className="border-l-2 border-primary pl-4">
              <div className="flex items-center gap-2 mb-2">
                <CompanyLogo logo={company.logo} />
                <span className="font-semibold text-base">{company.organization}</span>
              </div>
              {company.roles.length === 1 ? (
                <RoleDetails role={company.roles[0]} />
              ) : (
                <ul className="space-y-4 ml-1 border-l border-gray-700 pl-4">
                  {company.roles.map((role) => (
                    <li key={`${role.team}-${role.period}`} className="relative">
                      <span className="absolute -left-[1.3rem] top-2 h-2 w-2 rounded-full bg-primary" />
                      <RoleDetails role={role} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
