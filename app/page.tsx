import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import Projects from '@/components/Projects'
import Stats from '@/components/Stats'
import WhyMe from '@/components/WhyMe'
import Results from '@/components/Results'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Projects />
      <Stats />
      <WhyMe />
      <Results />
      <Faq />
      <Footer />
    </main>
  )
}
