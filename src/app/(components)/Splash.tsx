import Image from "next/image";
import Link from "next/link";

export default function Splash() {
  return (
    <section className="w-full flex flex-col sm:flex-row flex-wrap justify-start sm:justify-around items-center py-5 px-5 gap-2 sm:gap-0 max-w-6xl">
      <div className="mb-2 flex flex-col items-end sm:w-1/3 text-center sm:text-right">
        <h1 className="text-7xl sm:text-6xl font-bold leading-[60px]">
          Andrea Ramírez Falcón
        </h1>
        <h2 className="text-4xl font-semibold bg-zinc-700 text-[#e6e0d3] px-5 py-1 rounded-full sm:mt-2">Circus Artist</h2>
      </div>
      <div className="flex flex-col items-end">
        <Image
          src="/splash.png"
          alt="CyrWheel"
          width={400}
          height={420}
          className="rounded-xl flex sm:hidden"
        />
        <Image
          src="/splash.png"
          alt="CyrWheel"
          width={600}
          height={420}
          className="rounded-xl hidden sm:flex"
        />
        <p className="text-xs">
          Photo{" "}
          <Link href="https://www.claralaurent.com/" className="underline">
            Clara Laurent
          </Link>
        </p>
      </div>
      <h3 className="text-sm sm:text-lg text-center px-5 sm:px-56 font-sans italic font-medium sm:font-normal mt-2 sm:mt-5 sm:w-full">
        Everyone continues to write the history of creation in their own way.
        What was previously unconscious, becomes visible.
      </h3>
      <div className="flex gap-3 mt-3 items-center">
        <Link href='https://www.instagram.com/anndrearf_/'>
          <Image
            src='/instagram.svg'
            alt="Instagram"
            width={20}
            height={20}
          />
        </Link>
        <Link href='https://www.linkedin.com/in/andrea-ram%C3%ADrez-falc%C3%B3n-505378207/'>
          <Image
            src='/youtube.svg'
            alt="YouTube"
            width={25}
            height={25}
          />
        </Link>
        <Link href='https://www.youtube.com/channel/UClIYEaYRJ0AKhXOirmVSBKg'>
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
