import CTAButton from './ui/CTAButton'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 isolate transform-gpu border-b border-white/10 bg-black/70 px-4 py-4 md:px-6 shadow-[0_4px_20px_rgba(0,0,0,0.14)] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
          <Image
            src="/assets/mat-vision-logo-white.png"
            alt="Mat Vision Videos logo"
            width={42}
            height={42}
            className="h-9 w-9 object-contain md:h-[42px] md:w-[42px]"
          />
          <span className="whitespace-nowrap font-bold text-white text-sm tracking-tight md:text-lg">
            Mat Vision Videos
          </span>
        </div>
        <CTAButton href="#contact" compact />
      </div>
    </nav>
  )
}
