import Reveal from './ui/Reveal'
import CTAButton from './ui/CTAButton'
import { faqItems } from '@/lib/data'

export default function Faq() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
          >
            FAQ
          </h2>
        </Reveal>

        <Reveal delay={100} className="text-center mb-16">
          <p className="text-gray-400">Have any questions? Check these.</p>
        </Reveal>

        <div className="space-y-8 mb-16">
          {faqItems.map((item, i) => (
            <Reveal key={item.number} delay={i * 80}>
              <div className="flex gap-6">
                <span className="text-3xl font-bold text-[#2f9dff] flex-shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
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
