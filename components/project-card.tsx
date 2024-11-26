"use client";

import Image from "next/image"

interface ProjectCardProps {
  title: string
  technologies: string
  imageUrl: string
  onClick: () => void
}

export function ProjectCard({ title, technologies, imageUrl, onClick }: ProjectCardProps) {
  return (
    <div 
      className="grid md:grid-cols-[300px,1fr] gap-6 rounded-lg overflow-hidden bg-card p-4 transition-colors hover:bg-accent cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground">{technologies}</p>
      </div>
    </div>
  )
}

