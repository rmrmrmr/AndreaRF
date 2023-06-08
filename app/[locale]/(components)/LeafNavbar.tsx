import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Splash");

  return (
    <nav className="w-full flex justify-center shadow-md">
      {/* desktop navbar */}
      <div className="hidden sm:flex h-14 font-sans items-center justify-between w-full max-w-6xl font-normal text-lg px-8">
        <div className="flex gap-4">
          <Link href="/en" className="hover:underline">EN</Link>
          <p>|</p>
          <Link href="/es" className="hover:underline">ES</Link>
          <p>|</p>
          <Link href="/fr" className="hover:underline">FR</Link>
        </div>
        <div className="flex">
          <Link
            href="/"
            className="hover:bg-[#383427] hover:text-[#e6e0d3] rounded-full px-3 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="h-12 w-full flex sm:hidden"></div>
    </nav>
  );
}
