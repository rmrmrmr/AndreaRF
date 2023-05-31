import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center shadow-md">
      {/* desktop navbar */}
      <div className="hidden sm:flex h-14 font-sans items-center justify-between w-full max-w-6xl font-semibold text-lg px-8">
        <div className="flex gap-4">
          <p>EN</p>
          <p>|</p>
          <p>FR</p>
          <p>|</p>
          <p>SP</p>
        </div>
        <div className="flex gap-4">
          <Link href="#about">About</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="h-12 w-full flex sm:hidden">
      </div>
    </nav>
  )
}