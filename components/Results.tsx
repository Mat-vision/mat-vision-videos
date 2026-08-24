import Reveal from './ui/Reveal'
import Image from 'next/image'

export default function Results() {
  return (
    <section className="bg-white px-6 pb-10">
      <div className="max-w-5xl mx-auto">
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#191919] px-6 pt-4 pb-6">
          <Reveal className="text-center mb-1">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Not Just talk
          </h2>
          </Reveal>

          <Reveal delay={100} className="text-center">
            <p className="text-white">
              Check the results and what my clients say
            </p>
          </Reveal>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 pt-6">
          <Image
            src="/assets/results-cropped.png"
            alt="Client results and testimonials"
            width={1920}
            height={390}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
