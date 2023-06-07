import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations('Splash');

  return (
    <section className="w-full flex flex-col justify-start items-center py-5 px-5 gap-4 max-w-6xl" id="about">
      <h2 className="text-5xl font-bold mb-2">{t('navAbout')}</h2>
      <div className="flex flex-col gap-4 sm:flex-row items-center">
        <Image
          src='/aboutMe.jpg'
          alt=""
          width={683}
          height={734}
          className="rounded-full border-4 p-1 border-black w-[683px] sm:w-[350px] sm:h-[350px] lg:w-[683px]"
        />
        <p className="font-sans text-justify text-sm font-medium">
          {t('description')}
        </p>
      </div>
    </section>
  );
}
