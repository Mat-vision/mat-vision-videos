import Reveal from './ui/Reveal'
import CTAButton from './ui/CTAButton'
import { whyMeCards } from '@/lib/data'

export default function WhyMe() {
  return (
    <section className="bg-black py-10 md:py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-1">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
          >
            The PPP Framework
          </h2>
        </Reveal>

        <Reveal delay={100} className="text-center mb-8">
          <p className="text-white text-lg md:text-xl font-medium">            My system behind editing winning Ads & VSLs</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {whyMeCards.map((card, i) => (
            <Reveal key={card.number} delay={i * 150}>
                <div className="border border-[#777] rounded-3xl pt-5 px-5 pb-5 bg-black h-full">
                <span className="float-left mr-2 text-[4.25rem] md:text-[5rem] font-bold text-white leading-[0.85]">
                  {card.number}
                </span>
                <h3 className="mb-2 text-[1.5rem] md:text-[1.875rem] font-bold text-white leading-[0.95]">
                  {card.title.split(' ').map((word) => (
                    <span key={word} className="block">{word}</span>
                  ))}
                </h3>
                <p className="text-white text-[17px] md:text-[19px] leading-[1.15]">{card.description}</p>
                <div className="clear-both" />
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
