import CTAButton from './ui/CTAButton'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 4L28 28H4L16 4Z"
              stroke="#2f9dff"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="16" cy="18" r="4" fill="#2f9dff" />
          </svg>
          <span className="font-bold text-white text-lg tracking-tight">
            Mat Vision Videos
          </span>
        </div>
        <CTAButton href="#contact" className="text-sm !px-6 !py-3" />
      </div>
    </nav>
  )
}
