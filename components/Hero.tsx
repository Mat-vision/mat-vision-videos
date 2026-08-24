'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import CTAButton from './ui/CTAButton'
import { heroVideoUrl } from '@/lib/data'

interface GumletPlayer {
  on(event: string, callback: () => void | Promise<void>): void
  play(): Promise<void>
  unmute(): Promise<void>
  setLoop(loop: boolean): Promise<void>
  setCurrentTime(seconds: number): Promise<void>
}

export default function Hero() {
  const [preview, setPreview] = useState(true)
  const [playerReady, setPlayerReady] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<GumletPlayer | null>(null)
  const videoSrc = `${heroVideoUrl}?autoplay=${preview ? 'true' : 'false'}&loop=${preview ? 'true' : 'false'}&disable_player_controls=${preview ? 'true' : 'false'}&player_color=%2330c0ff&thumbnail=%2Fassets%2Fshowreel-thumbnail.png`

  useEffect(() => {
    if (!iframeRef.current) return

    let cancelled = false
    import('player.js').then(({ default: playerjs }) => {
      if (cancelled || !iframeRef.current) return

      const player = new playerjs.Player(iframeRef.current)
      playerRef.current = player
      player.on('ready', async () => {
        if (preview) {
          setPlayerReady(true)
        } else {
          try {
            await player.setLoop(false)
            await player.setCurrentTime(0)
            await player.unmute()
            await player.play()
          } finally {
            setPlayerReady(true)
          }
        }
      })
    })

    return () => {
      cancelled = true
      playerRef.current = null
    }
  }, [preview, videoSrc])

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-8 overflow-hidden rounded-b-[5.5rem]">
      <div
        className="absolute inset-0 rounded-b-[5.5rem] overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 15% 15%, #08485c 0%, #062d42 25%, #041522 50%, #000 100%), radial-gradient(ellipse at 85% 85%, #073f53 0%, #052230 35%, #040d15 60%, #000 100%)',
          backgroundBlendMode: 'screen',
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1
          className="relative top-1 text-[clamp(2.1rem,4vw,3.5rem)] text-white leading-none mb-3 whitespace-nowrap"
          style={{ fontFamily: "'Helvetica Neue World', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          <span className="hnw-roman hero-roman">Turn your copy into </span>
          <span className="hnw-bold hero-bold">videos that sell</span>
        </h1>
        <p
          className="relative top-1 text-white text-3xl md:text-4xl leading-none mb-7"
          style={{ fontFamily: "'Helvetica Neue World', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          <span className="hnw-bold">500M+</span>
          <span className="hnw-roman"> paid views generated</span>
        </p>

        <div
          className="relative w-full max-w-[700px] lg:max-w-[800px] mx-auto aspect-video overflow-hidden cursor-pointer group mb-7"
        >
          <iframe
            key={videoSrc}
            ref={iframeRef}
            src={videoSrc}
            title="Showreel video player"
            className="absolute inset-0 h-full w-full border-0"
            referrerPolicy="origin"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
            allowFullScreen
          />
          {preview && (
            <div className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center" onClick={() => { setPlayerReady(false); setPreview(false) }}>
              {!playerReady && <Image
                  src="/assets/showreel-thumbnail.png"
                  alt="Showreel thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />}
              <button
                type="button"
                onClick={(event) => { event.stopPropagation(); setPlayerReady(false); setPreview(false) }}
                aria-label="Unmute showreel"
                className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-black/60 text-white"
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 10V14H8L13 19V5L8 10H4Z" fill="currentColor" />
                  <path d="M17 9L21 15M21 9L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}
          {!preview && !playerReady && <div className="absolute inset-0 z-10 bg-black" />}
        </div>

        <CTAButton href="#contact" />
      </div>

    </section>
  )
}
