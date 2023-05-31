import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center shadow-md">
      {/* desktop navbar */}
      <div className="hidden sm:flex h-14 font-sans items-center justify-between w-full max-w-6xl font-normal text-lg px-8">
        <div className="flex gap-4">
          <p>EN</p>
          <p>|</p>
          <p>FR</p>
          <p>|</p>
          <p>SP</p>
        </div>
        <div className="flex gap-3">
          <div className="group">
            <Link
              href="#about"
              className="hover:bg-[#383427] hover:text-[#e6e0d3] py-1 px-3 rounded-full">
              About
            </Link>
          </div>
          <div className="group">
            <Link
              href="#work"
              className="group-hover:bg-[#383427] group-hover:text-[#e6e0d3] hover:underline py-1 px-3 rounded-t-xl">
              Work
            </Link>
            <div className="invisible absolute z-50 flex flex-col group-hover:visible text-[#e6e0d3] bg-[#383427] cursor-pointer">
              <a className="my-2 block mx-4 hover:underline">
                Personal
              </a>
              <a className="my-2 block mx-4 hover:underline">
                Collaborations
              </a>
              <a className="my-2 block mx-4 hover:underline">
                Writings
              </a>
            </div>
          </div>
          <div className="group">
            <Link
              href="#contact"
              className="hover:bg-[#383427] hover:text-[#e6e0d3] py-1 px-3 rounded-full">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="h-12 w-full flex sm:hidden"></div>
    </nav>
  );
}
