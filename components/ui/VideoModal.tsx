'use client'

import { useEffect } from 'react'

interface VideoModalProps {
  videoUrl: string
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ videoUrl, isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90" />
      <div
        className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 5L15 15M15 5L5 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {videoUrl.includes('play.gumlet.io/embed/') ? (
          <iframe
            src={videoUrl}
            title="Gumlet video player"
            className="absolute inset-0 h-full w-full border-0"
            referrerPolicy="origin"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
            allowFullScreen
          />
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  )
}
