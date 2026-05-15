"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ROLE_ROTATION = ["Software Engineer", "CS @ Northeastern", "Speedcuber", "Photographer"]

const roleChipClassName =
  "inline-flex min-h-[2.75rem] md:min-h-[3.25rem] items-center rounded-lg border border-violet-500/35 bg-violet-950/30 px-4 py-2 md:px-5 md:py-2.5 font-mono text-base md:text-lg text-violet-300 shadow-[0_0_14px_rgba(167,139,250,0.18)]"

const roleCaretClassName =
  "ml-1 inline-block h-[1.1em] w-[3px] animate-pulse rounded-full bg-violet-200/90"

const sectionMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
}

export default function HomeSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLE_ROTATION[roleIndex]
    const delay = isDeleting ? 45 : displayedRole.length === currentRole.length ? 1200 : 90

    const timer = window.setTimeout(() => {
      if (isDeleting) {
        if (displayedRole.length > 0) {
          setDisplayedRole((prev) => prev.slice(0, -1))
          return
        }

        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLE_ROTATION.length)
        return
      }

      if (displayedRole.length < currentRole.length) {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1))
        return
      }

      setIsDeleting(true)
    }, delay)

    return () => {
      window.clearTimeout(timer)
    }
  }, [displayedRole, isDeleting, roleIndex])

  return (
    <motion.section
      {...sectionMotion}
      className="w-full max-w-6xl mx-auto min-h-[min(100vh-10rem,900px)] flex flex-col justify-center items-center text-center pb-8"
    >
      <div className="flex flex-col items-center max-w-lg">
        <div className="relative w-44 h-44 md:w-56 md:h-56 mb-5 md:mb-7">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-purple-600 opacity-20 blur-xl" />
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
            <Image
              src="/images/AudreyNg-Headshot.jpg?height=256&width=256"
              alt="Audrey Ng Headshot"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <p className="text-gray-300 text-lg">Hi 👋, I&apos;m</p>
        <h1 className="text-primary md:text-4xl lg:text-5xl font-semibold mb-5 md:mb-7">Audrey Ng</h1>
        <h2 className="text-lg md:text-2xl mb-4 md:mb-5 min-h-[3.25rem] md:min-h-[3.75rem] flex items-center justify-center w-full">
          <span className={roleChipClassName}>
            {displayedRole || "\u00a0"}
            <span className={roleCaretClassName} aria-hidden />
          </span>
        </h2>
        <Link
          href="/about"
          className="mt-1 inline-flex underline underline-offset-4 items-center gap-2 text-base font-medium hover:text-violet-200 transition-colors"
        >
          About me
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>
      </div>
    </motion.section>
  )
}
