import Reveal from './ui/Reveal'
import CTAButton from './ui/CTAButton'
import { faqItems } from '@/lib/data'

export default function Faq() {
  return (
    <section className="bg-black py-12 md:py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-3 md:mb-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
          >
            FAQ
          </h2>
        </Reveal>

        <Reveal delay={100} className="text-center mb-8 md:mb-10">
          <p className="text-white text-lg md:text-xl font-medium">Have any questions? Check these.</p>
        </Reveal>

        <div className="space-y-8 md:space-y-10 mb-10">
          {faqItems.map((item, i) => (
            <Reveal key={item.number} delay={i * 80}>
              <div className="flex gap-6">
                <span className="text-[4.25rem] md:text-[5rem] font-bold text-[#30c0ff] leading-none flex-shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-white font-bold text-[1.5rem] md:text-[1.875rem] leading-[0.95] mb-2">{item.question}</h3>
                  <p className="text-white text-[17px] md:text-[19px] leading-[1.15]">{item.answer}</p>
                </div>
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
