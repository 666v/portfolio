"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Header } from "@/components/header";
import { SocialLinks } from "@/components/social-links";
import { Stats } from "@/components/stats";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImgProfile from "@/app/assets/images/ImgProfile.jpg";
import CoverPhoto from "@/app/assets/images/CoverPhoto.jpg";
import { ProjectDetailsModal } from "@/components/project-details-modal";

const projects = [
  {
    id: 1,
    title: "Projects 1",
    technologies: "React Native, Expo, Clerk, Firebase, Tailwind",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    description: "There is a long-established fact that the readable content of a page will distract the reader from focusing on the appearance of the text or the arrangement of paragraphs on the page they are reading.",
  },
  {
    id: 2,
    title: "Projects 2",
    technologies: "React, Next.js, ContentFull, Motion, Tailwind",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
    description: "There is a long-established fact that the readable content of a page will distract the reader from focusing on the appearance of the text or the arrangement of paragraphs on the page they are reading.",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="relative blur-md w-full h-[300px]">
        <Image
          src={CoverPhoto}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <main className="max-w-6xl mx-auto px-6 py-12 -mt-32 relative z-10">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-md border-4 border-yellow-400 overflow-hidden bg-background">
              <Image
                src={ImgProfile}
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white">ALI DARWESH</h1>
          <p className="mt-2 text-gray-300">
            Front-end Developer
          </p>
          <SocialLinks />
          <Stats />
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
              Download CV
            </Button>
            <Button variant="secondary" size="icon">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="icon">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="portfolio" className="mt-12">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="portfolio" className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="group">
                  <ProjectCard
                    title={project.title}
                    technologies={project.technologies}
                    imageUrl={project.imageUrl}
                    onClick={() => setSelectedProject(project)} // عند النقر على البطاقة
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="about">
            <div className=" py-4 px-4">
              <h2 className="font-bold text-lg mb-2">About</h2>
              <p className="text-sm text-slate-500">
                I am Ali Darwesh, a passionate front-end developer specializing in web technologies and digital experience design. I work on creating interactive and user-friendly interfaces using the latest tools and technologies like React and Next.js.
              </p>
              <h3 className="font-bold text-lg mt-4">Technologies I've Been Working With:</h3>
              <ul className="list-disc pl-5 text-sm text-slate-500 mt-2">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML & CSS</li>
                <li>Tailwind</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* عرض نافذة تفاصيل المشروع عند تحديده */}
      {selectedProject && (
        <ProjectDetailsModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
}
