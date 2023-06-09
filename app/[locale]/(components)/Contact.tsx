import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations('Splash');

  return (
    <section className="w-full flex flex-col justify-start items-center pt-5 pb-2 px-5 gap-4 max-w-6xl" id="contact">
      <h2 className="text-5xl font-bold mb-2">{t('contacto')}</h2>
      <form action="https://formspree.io/f/moqbvdgn" method="POST" className="bg-transparent flex flex-col w-full px-2 gap-5 font-sans items-center lg:w-3/5 lg:mt-5">
        <input type="text" name="nameInput" placeholder={t('namePH')} className="bg-transparent outline-none w-full placeholder-gray-600 border-b-2 border-black"/>
        <input type="text" name="emailInput"placeholder={t('emailPH')} className="bg-transparent outline-none w-full placeholder-gray-600 border-b-2 border-black"/>
        <textarea name="messageInput" id="" cols={10} rows={1} placeholder={t('descriptPH')} className="bg-transparent outline-none w-full resize-none placeholder-gray-600 border-b-2 border-black"></textarea>
        <button className="w-max bg-zinc-700 text-[#e6e0d3] py-2 px-4 rounded-full">{t('enviar')}🌹</button>
      </form>
      <div className="flex gap-3 mt-5 items-center">
        <Link href='https://www.instagram.com/anndrearf_/'>
          <Image
            src='/instagram.svg'
            alt="Instagram"
            width={20}
            height={20}
          />
        </Link>
        <Link href='https://www.youtube.com/channel/UClIYEaYRJ0AKhXOirmVSBKg'>
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
  )
}