import { useTranslations } from "next-intl";
import Navbar from "../(components)/LeafNavbar";
import ProjectCard from "./(components)/ProjectCard";

export default function Collabs() {
  const t = useTranslations('Splash');

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start font-serif">
      <Navbar/>
      <ProjectCard />
    </main>
  )
}
