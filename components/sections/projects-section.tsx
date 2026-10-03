"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/projects-data"

export default function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto w-full py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </motion.section>
  )
}
