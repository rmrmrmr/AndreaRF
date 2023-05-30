// import Image from 'next/image'
import Navbar from "./(components)/Navbar";
import Splash from "./(components)/Splash";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start font-serif">
      <Navbar />
      <Splash />
    </main>
  )
}
