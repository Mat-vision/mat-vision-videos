'use client'

import { useRef, useState } from 'react'
import Reveal from './ui/Reveal'
import CTAButton from './ui/CTAButton'
import VideoModal from './ui/VideoModal'
import { projects } from '@/lib/data'
import type { Project } from '@/lib/data'

type Filter = 'all' | 'ads' | 'vsls'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  function scrollBy(direction: 'left' | 'right') {
    if (!scrollRef.current) return
    const card = scrollRef.current.querySelector('.project-card') as HTMLElement
    const cardWidth = card?.offsetWidth ?? 400
    scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' })
  }

  return (
    <section className="bg-black py-10 md:py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Full Projects
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex justify-center gap-2 mb-8">
            {(['all', 'ads', 'vsls'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  activeFilter === f
                    ? 'bg-[#2f9dff]/20 text-[#2f9dff] border border-[#2f9dff]/50'
                    : 'bg-transparent text-white border border-gray-700 hover:border-gray-500'
                }`}
              >
                {f === 'all' ? 'All' : f === 'ads' ? 'Ads' : 'VSLs'}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative">
          <button
            onClick={() => scrollBy('left')}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center cursor-pointer hover:bg-black/90"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPlay={() => setSelectedVideo(project.videoUrl)}
              />
            ))}
          </div>

          <button
            onClick={() => scrollBy('right')}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center cursor-pointer hover:bg-black/90"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <Reveal className="text-center mt-8">
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
    <div
      className="project-card relative flex-shrink-0 w-[400px] rounded-xl overflow-hidden bg-[#0a0a0a] cursor-pointer snap-start"
      onClick={onPlay}
    >
      <div className="relative aspect-video">
        <img
          src={`/api/gumlet-thumbnail/${project.gumletId}`}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <path d="M12 8L28 18L12 28V8Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  )
}
