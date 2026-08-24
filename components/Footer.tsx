import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#262626] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/mat-vision-logo-white.png"
            alt="Mat Vision Videos logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <span className="font-bold text-white text-sm">
            Mat Vision Videos
          </span>
        </div>
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Mat Vision Videos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
