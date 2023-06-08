import { useTranslations } from "next-intl";
import CollabsNavbar from "../../(components)/CollabsNavbar";
import Image from "next/image";
import Carousel from "../../(components)/Carousel";

export default function TwasTheNightBefore() {
  const t = useTranslations("Splash");

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start font-serif gap-4 select-none">
      <CollabsNavbar />
      <h1 className="text-4xl font-black text-center">'Twas The Night Before</h1>
      <Carousel imageName="twas" numOfSlides={4}/>
      <div className="text-lg font-semibold font-sans text-left select-none">
        <h2>Cirque du Soleil</h2>
        <h2>Directed by James Hadley</h2>
        <h2>Artistic director: Jen Donohoo</h2>
        <h3>Acrobatic designer: Edesia Moreno</h3>
      </div>
    </main>
  );
}
