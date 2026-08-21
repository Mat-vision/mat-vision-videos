export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#262626] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 4L28 28H4L16 4Z" stroke="#2f9dff" strokeWidth="2" fill="none" />
            <circle cx="16" cy="18" r="4" fill="#2f9dff" />
          </svg>
          <span className="font-bold text-white text-sm">
            Mat Vision Videos
          </span>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mat Vision Videos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
