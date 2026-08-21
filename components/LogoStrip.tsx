import Reveal from './ui/Reveal'
import { logos } from '@/lib/data'

export default function LogoStrip() {
  return (
    <section className="relative -mt-10 bg-black rounded-t-[2.5rem] pt-20 pb-16 px-6">
      <Reveal className="text-center mb-12">
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Trusted by 100+ brands
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="text-gray-500 hover:text-gray-400 transition-colors opacity-60 grayscale hover:grayscale-0"
                dangerouslySetInnerHTML={{ __html: logo.svg }}
                style={{ width: '120px', height: '40px' }}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
