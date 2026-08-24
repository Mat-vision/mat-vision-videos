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
  const startRequested = useRef(false)
  const videoSrc = `${heroVideoUrl}?autoplay=true&loop=true&disable_player_controls=false&player_color=%2330c0ff&thumbnail=%2Fassets%2Fshowreel-thumbnail.png`

  async function startShowreel(player: GumletPlayer) {
    await Promise.all([
      player.setLoop(false),
      player.setCurrentTime(0),
      player.unmute(),
      player.play(),
    ])
  }

  function handleShowreelStart() {
    startRequested.current = true
    setPreview(false)

    if (playerRef.current) {
      void startShowreel(playerRef.current).catch(() => undefined)
    }
  }

  useEffect(() => {
    if (!iframeRef.current) return

    let cancelled = false
    import('player.js').then(({ default: playerjs }) => {
      if (cancelled || !iframeRef.current) return

      const player = new playerjs.Player(iframeRef.current)
      playerRef.current = player
      player.on('ready', async () => {
        setPlayerReady(true)
        if (startRequested.current) {
          await startShowreel(player).catch(() => undefined)
        }
      })
    })

    return () => {
      cancelled = true
      playerRef.current = null
    }
  }, [videoSrc])

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-8 overflow-hidden rounded-b-[2.75rem] md:rounded-b-[5.5rem]">
      <div
        className="absolute inset-0 rounded-b-[2.75rem] md:rounded-b-[5.5rem] overflow-hidden"
        style={{
          background: '#000',
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1
          className="relative top-1 max-w-full text-[clamp(2.1rem,4vw,3.5rem)] text-white leading-none mb-3 whitespace-normal md:whitespace-nowrap"
          style={{ fontFamily: "'Helvetica Neue World', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          <span className="hnw-roman hero-roman">Ads and VSLs<br className="md:hidden" /> </span>
          <span className="hnw-bold hero-bold">edited to convert</span>
        </h1>
        <p
          className="relative top-1 whitespace-nowrap text-white text-xl md:text-4xl leading-none mb-7"
          style={{ fontFamily: "'Helvetica Neue World', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          <span className="hnw-bold">500M+</span>
          <span className="hnw-roman"> paid views generated</span>
        </p>

        <div
          className="relative -mx-6 w-screen max-w-none sm:mx-auto sm:w-full sm:max-w-[700px] lg:max-w-[800px] aspect-video overflow-hidden cursor-pointer group mb-7"
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
            <div className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center" onClick={handleShowreelStart}>
              {!playerReady && <Image
                  src="/assets/showreel-thumbnail.png"
                  alt="Showreel thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />}
              <button
                type="button"
                 onClick={(event) => { event.stopPropagation(); handleShowreelStart() }}
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
        </div>

        <CTAButton href="#contact" />
      </div>

    </section>
  )
}
