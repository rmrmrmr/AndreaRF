import { useTranslations } from "next-intl";
import CollabsNavbar from "../(components)/CollabsNavbar";
import ProjectCard from "../(components)/ProjectCard";

export default function Collabs() {
  const t = useTranslations("Splash");

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start font-serif">
      <CollabsNavbar />
      <div className="flex flex-wrap max-w-6xl gap-x-7 gap-y-1 justify-center">
        <ProjectCard
          imageSource="/twas1.jpg"
          projectName="'Twas the night before"
          projectDescription="Proyecto realizado con el Cirque du Soleil en el invierno 2022-23.
          Podemos agregar un poco mas de texto aqui."
          projectPage="/collabs/twasthenightbefore"
          projectLink="https://www.cirquedusoleil.com/twas-the-night-before#about-the-show"/>
      </div>
    </main>
  );
}
