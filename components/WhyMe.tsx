import Reveal from './ui/Reveal'
import CTAButton from './ui/CTAButton'
import { whyMeCards } from '@/lib/data'

export default function WhyMe() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Why me?
          </h2>
        </Reveal>

        <Reveal delay={100} className="text-center mb-16">
          <p className="text-gray-300">Simple. Three reasons...</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {whyMeCards.map((card, i) => (
            <Reveal key={card.number} delay={i * 150}>
              <div className="border border-[#262626] rounded-2xl p-8 bg-[#0a0a0a] hover:border-[#2f9dff]/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-bold text-[#2f9dff]">{card.number}</span>
                  <h3
                    className="text-xl font-bold text-white pt-2"
                  >
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <CTAButton href="#contact" />
        </Reveal>
      </div>
    </section>
  )
}
