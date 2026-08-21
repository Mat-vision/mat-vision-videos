'use client'

import { useState } from 'react'
import Image from 'next/image'
import Reveal from './ui/Reveal'
import CTAButton from './ui/CTAButton'
import VideoModal from './ui/VideoModal'
import { projects } from '@/lib/data'
import type { Project } from '@/lib/data'

type Filter = 'all' | 'ads' | 'vsls'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          >
            Full Projects
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex justify-center gap-3 mb-14">
            {(['all', 'ads', 'vsls'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-[#2f9dff]/20 text-[#2f9dff] border border-[#2f9dff]/50'
                    : 'bg-transparent text-gray-400 border border-gray-700 hover:border-gray-500'
                }`}
              >
                {f === 'all' ? 'All' : f === 'ads' ? 'Ads' : 'VSLs'}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <ProjectCard
                project={project}
                onPlay={() => setSelectedVideo(project.videoUrl)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <CTAButton href="#contact" />
        </Reveal>
      </div>

      <VideoModal
        videoUrl={selectedVideo || ''}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  )
}

function ProjectCard({ project, onPlay }: { project: Project; onPlay: () => void }) {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer bg-[#0a0a0a]">
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        sizes="(max-width: 768px) 100vw, 400px"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          onClick={onPlay}
          className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 4L16 10L6 16V4Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <span className="text-xs text-gray-300 uppercase tracking-wider">
          {project.category === 'ads' ? 'Ad' : 'VSL'}
        </span>
      </div>
    </div>
  )
}
