import CTAButton from './ui/CTAButton'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 isolate transform-gpu border-b border-white/10 bg-[#16445a]/50 px-6 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.14)] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
          <Image
            src="/assets/mat-vision-logo-white.png"
            alt="Mat Vision Videos logo"
            width={42}
            height={42}
            className="object-contain"
          />
          <span className="font-bold text-white text-lg tracking-tight">
            Mat Vision Videos
          </span>
        </div>
        <CTAButton href="#contact" compact />
      </div>
    </nav>
  )
}
