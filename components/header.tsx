'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code2 } from 'lucide-react'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-white">
          <Code2 className="w-6 h-6 rotate-12" />
          <span>Portfolio</span>
        </Link>
        <nav className="flex gap-6">
          <Link 
            href="/" 
            className={pathname === "/" ? "text-yellow-400 hover:text-yellow-300" : "text-white hover:text-gray-300"}
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className={pathname === "/projects" ? "text-yellow-400 hover:text-yellow-300" : "text-white hover:text-gray-300"}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  )
}