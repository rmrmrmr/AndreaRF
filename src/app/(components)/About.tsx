import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="w-full flex flex-col justify-start items-center py-5 px-5 gap-4 max-w-6xl" id="about">
      <h2 className="text-5xl font-bold mb-2">About Me</h2>
      <div className="flex flex-col gap-4 sm:flex-row items-center">
        <Image
          src='/aboutMe.jpg'
          alt=""
          width={683}
          height={734}
          className="rounded-full border-4 p-1 border-black w-[683px] sm:w-[350px] sm:h-[350px] lg:w-[683px]"
        />
        <p className="font-sans text-justify text-sm font-medium">
          Born in Mexico City, I began my journey into contemporary circus
          in 2014 when I discovered the Cyr wheel, a discipline that captivated
          me and inspired me to pursue a professional career in circus arts. In
          2018, I got accepted into the National Circus School in Montréal
          and completed the program in 2021. During my time there, I was a part
          of the film <span className="italic">La Somme de nos Rêves</span>, a production of the <span className="italic">NCS</span> and 
          <span className="italic"> Extérieure Jour.</span> Additionally, I participated in the Montréal
          Complètement Cirque festival show <span className="italic">Candide</span> in 2019. In 2021 I won the
          3rd prize and best direction at the Ibero-American Circus Festival
          (FIRCO) in Madrid, Spain, with my proposal <span className="italic">Identité Brisée.</span> My
          unique and captivating performances have also led me to participate in
          high-profile events, such as the opening ceremony of the <span className="italic">GCC Olympic
          Games</span> in Kuwait with Cirque Éloize and <span className="italic">&apos;Twas the Night Before</span> with
          Cirque du Soleil in 2022. My artistic approach is driven by the
          flaming passion for my craft, with a focus on pleasure, intuition, and
          intention through sensory language, in search of a sensitive, idealistic
          and mystical beauty. I am is inspired by the current reality of the
          female experience, exploring and creating images inspired by the
          archetype of the divine feminine. I incorporate intuitive movement,
          poetry, and visual arts to expand my acrobatic vocabulary and create
          performances that are both beautiful and meaningful. My work is part of
          a journey of self-discovery, recognizing what my body represents and
          gathering the resulting symbols through ritual.
        </p>
      </div>
    </section>
  );
}
