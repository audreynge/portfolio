import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Fragment } from "react"

type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl?: string
  repoUrl: string
}

export default function ProjectCard({ title, description, tags, imageUrl, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <article className="grid gap-5 md:grid-cols-[18rem_1fr] md:gap-8 py-8 border-t border-gray-800">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-800">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-gray-400">
          {tags.map((tag, i) => (
            <Fragment key={tag}>
              {i > 0 && <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-gray-500" />}
              <span>{tag}</span>
            </Fragment>
          ))}
        </div>
        <div className="mt-4 flex gap-5 text-sm font-medium">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gray-200 hover:text-violet-200 transition-colors"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-200 hover:text-violet-200 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
