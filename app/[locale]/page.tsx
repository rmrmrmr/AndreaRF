// import Image from 'next/image'
import Navbar from "./(components)/Navbar";
import Splash from "./(components)/Splash";
import AboutMe from "./(components)/About";
import Contact from "./(components)/Contact";
import Portfolio from "./(components)/Portfolio";


export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start font-serif">
      <Navbar />
      <Splash />
      <AboutMe />
      <Portfolio />
      <Contact />
    </main>
  )
}
