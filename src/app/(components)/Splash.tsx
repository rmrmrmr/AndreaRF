import Image from "next/image";
import Link from "next/link";

export default function Splash() {
  return (
    <section className="w-full flex flex-col justify-start items-center py-5 px-5 gap-2">
      <h1 className="text-7xl font-bold text-center leading-[60px]">
        Andrea Ramírez Falcón
      </h1>
      <h2 className="text-4xl font-semibold bg-zinc-700 text-[#e6e0d3] px-5 py-1 rounded-full mb-2">Circus Artist</h2>
      <div className="flex flex-col items-end">
        <Image
          src="/splash.png"
          alt="CyrWheel"
          width={400}
          height={420}
          className="rounded-xl"
        />
        <p className="text-xs">
          Photo{" "}
          <Link href="https://www.claralaurent.com/" className="underline">
            Clara Laurent
          </Link>
        </p>
      </div>
      <h3 className="text-sm text-center px-5 font-sans italic font-medium mt-2">
        Everyone continues to write the history of creation in their own way.
        What was previously unconscious, becomes visible.
      </h3>
      <div className="flex gap-3 mt-3">
        <Image
          src='/instagram.svg'
          alt="instagram"
          width={25}
          height={25}
        />
        <Image
          src='/youtube.svg'
          alt="instagram"
          width={25}
          height={25}
        />
        <Image
          src='/linkedin.svg'
          alt="instagram"
          width={25}
          height={25}
        />
      </div>
    </section>
  );
}
