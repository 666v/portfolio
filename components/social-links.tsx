"use client";

import { Github, Instagram, Twitter, Youtube } from 'lucide-react'

export function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4 justify-center">
      <a
        href="#"
        className="text-white hover:text-yellow-400 transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="text-white hover:text-yellow-400 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="text-white hover:text-yellow-400 transition-colors"
        aria-label="YouTube"
      >
        <Youtube className="w-5 h-5" />
      </a>
      <a
        href="#"
        className="text-white hover:text-yellow-400 transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
    </div>
  )
}

