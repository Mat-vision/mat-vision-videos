import Reveal from './ui/Reveal'

export default function Results() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-black"
          >
            Not Just talk
          </h2>
        </Reveal>

        <Reveal delay={100} className="text-center mb-16">
          <p className="text-gray-500">
            Check the results and what my clients say
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Ad Results', desc: 'Facebook Ads Manager screenshot' },
            { label: 'Video Stats', desc: 'Performance metrics dashboard' },
            { label: 'Client Testimonial', desc: 'Screenshots of client feedback' },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-100 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-3 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#9ca3af" strokeWidth="2" />
                        <path d="M9 12l2 2 4-4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-semibold text-black text-sm">{item.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
