import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Splash() {
  const t = useTranslations('Splash');
  return (
    <section className="w-full flex flex-col sm:flex-row flex-wrap justify-start sm:justify-around items-center py-5 px-5 gap-2 lg:gap-x-10 max-w-6xl">
      <div className="flex flex-col items-center sm:items-end sm:w-min text-center sm:text-right gap-2">
        <h1 className="text-5xl sm:text-6xl font-bold">
          Andrea Ramírez Falcón
        </h1>
        <h2 className="text-2xl font-semibold bg-zinc-700 text-[#e6e0d3] px-5 py-1 rounded-full sm:mt-2 w-max">{t('job')}</h2>
      </div>
      <div className="flex flex-col items-end">
        <Image
          src="/splash.png"
          alt="CyrWheel"
          width={716}
          height={420}
          className="rounded-xl w-[400px] sm:w-[450px] lg:w-[650px]"
        />
        <p className="text-xs">
          Photo:{" "}
          <Link href="https://www.claralaurent.com/" className="underline">
            Clara Laurent
          </Link>
        </p>
      </div>
      <h3 className="text-sm sm:text-base lg:text-lg text-center px-5 sm:px-35 lg:px-56 font-sans italic font-medium sm:font-normal sm:mt-0 lg:mt-5 sm:w-full">
        {t('quote')}
      </h3>
      <div className="flex gap-3 items-center">
        <Link href='https://www.instagram.com/anndrearf_/'>
          <Image
            src='/instagram.svg'
            alt="Instagram"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://www.youtube.com/channel/UClIYEaYRJ0AKhXOirmVSBKg">
          <Image
            src='/youtube.svg'
            alt="YouTube"
            width={25}
            height={25}
          />
        </Link>
        <Link href='https://www.linkedin.com/in/andrea-ram%C3%ADrez-falc%C3%B3n-505378207/'>
          <Image
            src='/linkedin.svg'
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </section>
  );
}
