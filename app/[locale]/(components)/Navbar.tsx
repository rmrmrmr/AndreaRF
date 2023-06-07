import Link from "next/link";
import { useTranslations } from "next-intl";


export default function Navbar() {
  const t = useTranslations('Splash');

  return (
    <nav className="w-full flex justify-center shadow-md">
      {/* desktop navbar */}
      <div className="hidden sm:flex h-14 font-sans items-center justify-between w-full max-w-6xl font-normal text-lg px-8">
        <div className="flex gap-4">
          <Link href="/en">EN</Link>
          <p>|</p>
          <Link href="/es">ES</Link>
          <p>|</p>
          <Link href="/fr">FR</Link>
        </div>
        <div className="flex">
          <div className="group mr-3">
            <div className="flex group-hover:bg-[#383427] group-hover:text-[#e6e0d3] items-center gap-2 rounded-full px-3 py-1">
              <Link
                href="#about"
              >
                {t('navAbout')}
              </Link>
            </div>
          </div>
          <div className="group mr-2">
            <div className="flex group-hover:bg-[#383427] group-hover:text-[#e6e0d3] items-center gap-2 rounded-t-xl px-3 py-1">
              <Link
                href="#work"
              >
                {t('navWork')}
              </Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div className="invisible absolute z-50 flex flex-col group-hover:visible text-[#e6e0d3] bg-[#383427] rounded-b-xl rounded-tr-md cursor-pointer">
              <Link href="#work" className="my-2 block mx-4 hover:underline">
                {t('navPersonal')}
              </Link>
              <Link href="#work" className="my-2 block mx-4 hover:underline">
                {t('navCollabs')}
              </Link>
              <Link href="#work" className="my-2 block mx-4 hover:underline">
                {t('navWritings')}
              </Link>
            </div>
          </div>
          <div className="group">
            <div className="flex group-hover:bg-[#383427] group-hover:text-[#e6e0d3] items-center gap-2 rounded-full px-3 py-1">
              <Link
                href="#contact"
              >
                {t('navContact')}
              </Link> 
            </div>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="h-12 w-full flex sm:hidden"></div>
    </nav>
  );
}
