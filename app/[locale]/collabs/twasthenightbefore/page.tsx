import { useTranslations } from "next-intl";
import Navbar from "../../(components)/LeafNavbar";
import Image from "next/image";

export default function TwasTheNightBefore() {
  const t = useTranslations('Splash');

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start font-serif">
      <Navbar/>
      <h1>'Twas The Night Before</h1>
      <div id="description">
        <h2>Cirque du Soleil</h2>
        <h2>Directed by James Hadley</h2>
        <h2>Artistic director: Jen Donohoo</h2>
        <h3>Acrobatic designer: Edesia Moreno Barata</h3>
      </div>
    </main>
  )
}