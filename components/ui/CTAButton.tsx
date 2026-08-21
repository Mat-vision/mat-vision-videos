import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  className?: string
}

export default function CTAButton({ href = '#', onClick, className = '' }: CTAButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-200 cursor-pointer ${className}`}
    >
      Get started now
      <span className="w-8 h-8 rounded-full bg-[#2f9dff] flex items-center justify-center flex-shrink-0">
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
    </Link>
  )
}
