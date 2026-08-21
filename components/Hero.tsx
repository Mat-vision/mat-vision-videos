'use client'

import { useState } from 'react'
import Image from 'next/image'
import CTAButton from './ui/CTAButton'
import VideoModal from './ui/VideoModal'
import { heroVideoUrl, heroThumbnail } from '@/lib/data'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, #0d2140 0%, #0a1a33 40%, #060f1f 70%, #000 100%)',
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-tight mb-6"
        >
          Turn your copy into videos that sell
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12">
          500M+ paid views generated
        </p>

        <div
          className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden cursor-pointer group mb-12"
          onClick={() => setModalOpen(true)}
        >
          <Image
            src={heroThumbnail}
            alt="Showreel thumbnail"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M10 8L22 14L10 20V8Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        <CTAButton href="#contact" />
      </div>

      <VideoModal
        videoUrl={heroVideoUrl}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  )
}
