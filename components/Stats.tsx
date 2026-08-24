'use client'

import { useEffect, useRef, useState } from 'react'
import Reveal from './ui/Reveal'
import { stats } from '@/lib/data'

export default function Stats() {
  return (
    <section
      className="py-7 px-6"
      style={{ background: '#111' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#30c0ff] mb-1">
                  <CountUp value={stat.value} />
                </div>
                <p className="text-white text-base md:text-lg font-medium">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayed, setDisplayed] = useState('0')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10)
    const suffix = value.replace(/[0-9]/g, '')
    const duration = 1500
    const steps = 40
    const increment = numericPart / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericPart) {
        setDisplayed(value)
        clearInterval(timer)
      } else {
        setDisplayed(Math.floor(current) + suffix)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [started, value])

  return <span ref={ref}>{displayed}</span>
}
