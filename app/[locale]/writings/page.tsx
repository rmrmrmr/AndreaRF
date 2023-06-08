import { useTranslations } from "next-intl";
import Navbar from "../(components)/CollabsNavbar";

export default function Writings() {
  const t = useTranslations("Splash");

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start font-serif">
      <Navbar />
      <h1>Writings site under construction 👷🏻‍♀️🏗️</h1>
    </main>
  );
}
