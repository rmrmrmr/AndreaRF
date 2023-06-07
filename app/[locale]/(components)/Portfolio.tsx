import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations('Splash');

  return (
    <section className="w-full h-screen flex flex-col justify-start items-center py-5 px-5 gap-4" id="work">
      <h2 className="text-5xl font-bold mb-2">{t('navWork')}</h2>
      <div className="flex flex-col items-center justify-center grow">
        <p className="text-xl font-medium">Section under construction 👷🏻‍♀️🏗️</p>
      </div>
    </section>
  )
}