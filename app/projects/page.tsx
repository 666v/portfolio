"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProjectCard } from "@/components/project-card"
import { ProjectDetailsModal } from "@/components/project-details-modal"

const projects = [
  {
    id: 1,
    title: "Projects 1",
    technologies: "React Native, Expo, Clerk, Firebase, Tailwind",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    description: "BudgetWise is a comprehensive mobile application designed to help users manage their finances effectively. With intuitive interfaces and real-time updates, it allows users to track expenses, set budgets, and visualize spending patterns. The app integrates securely with bank accounts and credit cards, providing a holistic view of one's financial health."
  },
  {
    id: 2,
    title: "Projects 2",
    technologies: "React, Next.js, ContentFull, Motion, Tailwind",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    description: "There is a long-established fact that the readable content of a page will distract the reader from focusing on the appearance of the text or the arrangement of paragraphs on the page they are reading.",
  },
  {
    id: 3,
    title: "Projects 3",
    technologies: "React, Next.js, ContentFull, Motion, Tailwind",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    description: "There is a long-established fact that the readable content of a page will distract the reader from focusing on the appearance of the text or the arrangement of paragraphs on the page they are reading.",
  },
  {
    id: 4,
    title: "Projects 4",
    technologies: "React, Next.js, ContentFull, Motion, Tailwind",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    description: "There is a long-established fact that the readable content of a page will distract the reader from focusing on the appearance of the text or the arrangement of paragraphs on the page they are reading.",
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-12">All My Projects</h1>
        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <ProjectCard
                title={project.title}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </main>
      {selectedProject && (
        <ProjectDetailsModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  )
}

