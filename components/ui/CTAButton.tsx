'use client'

import { useRouter } from 'next/navigation'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  className?: string
  compact?: boolean
}

export default function CTAButton({ href = '#contact', onClick, className = '', compact = true }: CTAButtonProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault()
      const targetId = href.slice(1)
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      if (href !== '#') {
        router.replace(href, { scroll: false })
      }
    }
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex shrink-0 items-center whitespace-nowrap bg-white text-black font-semibold rounded-full motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:scale-[1.1] ${compact ? 'h-11 gap-2 pl-4 pr-1 text-xs md:pl-5 md:text-sm' : 'h-14 gap-3 pl-8 pr-1 text-lg'} ${className}`}
    >
      Get started now
      <span className={`${compact ? 'w-9 h-9' : 'w-11 h-11'} rounded-full bg-black flex items-center justify-center flex-shrink-0 p-1`}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 7H12M12 7L7 2M12 7L7 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}
