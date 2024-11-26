"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    technologies: string
    imageUrl: string
    description: string
  }
}

export function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.technologies}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

