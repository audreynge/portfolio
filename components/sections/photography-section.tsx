"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type PhotoItem = {
  src: string
  location: string
  date: string
}

const photos: PhotoItem[] = [
  {
    src: "/images/photography/DSCF0375.JPG",
    location: "Above the clouds 🌤️",
    date: "May 2026",
  },
  {
    src: "/images/photography/DSCF0163.JPG",
    location: "Newport Beach, California",
    date: "May 2026",
  },
  {
    src: "/images/photography/DSCF0174.JPG",
    location: "Newport Beach, California",
    date: "May 2026",
  },
  {
    src: "/images/photography/DSC_9272.JPG",
    location: "Seattle, Washington",
    date: "Jan. 2026",
  },
  {
    src: "/images/photography/DSC_9259.JPG",
    location: "Seattle, Washington",
    date: "Jan. 2026",
  },
  {
    src: "/images/photography/IMG_4141.jpg",
    location: "Seattle, Washington",
    date: "Jan. 2026",
  },
  {
    src: "/images/photography/IMG_4143.JPG",
    location: "Seattle, Washington",
    date: "Jan. 2026",
  },
  {
    src: "/images/photography/keshi-concert.jpg",
    location: "Boston, Massachusetts",
    date: "Jul. 2025",
  },
  {
    src: "/images/photography/IMG_1769.jpg",
    location: "Boston, Massachusetts",
    date: "May 2025",
  }
]

export default function PhotographySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-5xl mx-auto w-full py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold">Photography</h2>
      <p className="mt-3 mb-10 max-w-2xl text-gray-300">
        I&apos;ve been taking photos on and off since 2018. I mostly shoot street photography with a Fujifilm X100VI - check out more of my work on <a href="https://www.instagram.com/f5p0int6/" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>!
      </p>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <figure key={photo.src} className="mb-6 break-inside-avoid">
            <Image
              src={photo.src}
              alt={photo.location}
              width={1600}
              height={1000}
              className="h-auto w-full rounded-lg border border-gray-800"
            />
            <figcaption className="mt-2 flex flex-wrap items-center gap-x-2.5 text-sm text-gray-400">
              <span>{photo.location}</span>
              <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-gray-500" />
              <span>{photo.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </motion.section>
  )
}
