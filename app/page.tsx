import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import Projects from '@/components/Projects'
import Stats from '@/components/Stats'
import WhyMe from '@/components/WhyMe'
import Results from '@/components/Results'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[#111]">
        <Hero />
      </div>
      <LogoStrip />
      <Projects />
      <Stats />
      <WhyMe />
      <Results />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
