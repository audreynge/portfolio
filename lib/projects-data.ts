export type Project = {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    title: "Copywatch",
    description:
      "This project was made in an effort to explore the issue of small arts businesses' content being stolen and reuploaded as a cheaper product on other third party sites.",
    tags: ["Python", "TypeScript", "Puppeteer", "Cheerio", "Transformers", "PyTorch"],
    imageUrl: "/images/CopyrightInfringementDetector.png",
    demoUrl: "https://github.com/audreynge/Copywatch",
    repoUrl: "https://github.com/audreynge/Copywatch",
  },
  {
    title: "Lumen",
    description:
      "Platform that finds the safest and quickest path through neighborhoods, making it easier for tourists, travelers, and students.",
    tags: ["Express.js", "Flask", "Leaflet", "Next.js", "React.js", "Tailwind CSS", "Tesseract"],
    imageUrl: "https://i.ytimg.com/an_webp/lcP4n6n1Ke8/mqdefault_6s.webp?du=3000&sqp=CJLJ_s0G&rs=AOn4CLAt8BSPRPs4jNSsd6OhWy1zQ0r9pw",
    demoUrl: "https://www.youtube.com/watch?v=lcP4n6n1Ke8&ab_channel=AudreyN",
    repoUrl: "https://github.com/audreynge/Lumen",
  },
  {
    title: "Inquisiv.",
    description:
      "Streamlines the dropshipping process by identifying top-trending products and creating customized ad content with NLP-based sentiment analysis and generative AI models.",
    tags: ["Bootstrap", "Flask", "React.js", "PyTorch", "Sckit-learn", "Tailwind CSS", "TanStack Query"],
    imageUrl:
      "https://i.ytimg.com/vi/0Oie1cL4HYI/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYACnAWKAgwIABABGCYgZSg4MA8=&rs=AOn4CLAzbb2_mQulP6bwihdcGmzAEKt1ng",
    demoUrl: "https://devpost.com/software/inquisiv",
    repoUrl: "https://github.com/Sadfahlsdj/Finhacks_2025.git",
  },
  {
    title: "TrackNTrip",
    description:
      "Combines eco-conscious travel, budget optimization, and immersive discovery into an AI-driven web app by helping travelers make cost-effective and sustainable choices and transform their journey into an engaging and educational adventure.",
    tags: ["Leaflet", "OSMnx", "React.js", "Tailwind CSS", "TanStack Query", "XGBoost"],
    imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/260/209/datas/medium.png",
    demoUrl: "https://devpost.com/software/trackntrip",
    repoUrl: "https://github.com/Sadfahlsdj/Hack_Beanpot_2025",
  },
  {
    title: "EduVenture",
    description:
      "Aims to elevate FGLI students' college admissions journey with gamified milestones and integrated admissions chancing.",
    tags: ["Figma", "HTML", "JavaScript", "Tailwind CSS"],
    imageUrl:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/566/393/datas/medium.png",
    demoUrl: "https://devpost.com/software/eduventure",
    repoUrl: "https://github.com/mustafa-nom/Empower-Hacks",
  },
]
