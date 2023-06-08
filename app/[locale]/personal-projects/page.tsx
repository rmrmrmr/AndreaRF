import { useTranslations } from "next-intl";
import Navbar from "../(components)/LeafNavbar";

export default function Personal() {
  const t = useTranslations('Splash');

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start font-serif">
      <Navbar/>
      <h1>Personal Projects site under construction 👷🏻‍♀️🏗️</h1>
    </main>
  )
}
