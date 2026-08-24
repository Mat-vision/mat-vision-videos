import Image from 'next/image'
import Reveal from './ui/Reveal'
import { logoImages } from '@/lib/data'

export default function LogoStrip() {
  return (
    <section className="relative bg-[#111] rounded-b-[2.75rem] md:rounded-b-[5.5rem] pt-6 pb-6 overflow-hidden">
      <Reveal className="relative -translate-y-2 text-center mb-4 px-6">
        <p className="text-white/70 text-sm font-bold tracking-widest uppercase">
          Trusted by 100+ brands
        </p>
      </Reveal>

      <div className="w-full relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-40 bg-gradient-to-r from-[#111] via-[#111]/85 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-40 bg-gradient-to-l from-[#111] via-[#111]/85 to-transparent" />
        <div className="flex w-full overflow-hidden relative">
          <div
            className="flex w-max items-center"
            style={{
              animation: 'scroll-logos 30s linear infinite',
            }}
          >
            {[0, 1].map((group) => (
              <div key={group} className="flex flex-shrink-0 items-center gap-[3rem] pr-[3rem] md:gap-[7.5rem] md:pr-[7.5rem]">
                {logoImages.map((logo) => (
                  <div
                    key={`${logo.name}-${group}`}
                    className={`relative h-16 w-[150px] flex-shrink-0 md:w-[170px] ${logo.name === 'Agen CFO' ? '-mx-14' : ''}`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain filter brightness-0 invert opacity-70"
                      sizes="220px"
                      style={{ transform: `scale(${logo.scale ?? 1})` }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
