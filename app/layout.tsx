import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/Footer"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ALI DARWESH",
  description: "Front-end Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        {children}
        <footer className="w-full flex items-center justify-center py-3">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
