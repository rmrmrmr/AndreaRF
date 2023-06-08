import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProjectCard({
  imageSource,
  projectName,
  projectDescription,
  projectPage,
  projectLink,
}: {
  imageSource: string;
  projectName: string;
  projectDescription: string;
  projectPage: string;
  projectLink: string;
}) {
  const t = useTranslations("Splash");

  return (
    <section
      className="w-[288px] h-[388px] flex flex-col items-center justify-start relative mt-5 gap-2 border-2 border-[#383427] pb-4 rounded-lg"
      id="twasCard">
      <Image
        src={imageSource}
        alt="Project Image"
        width={300}
        height={300}
        className="rounded-t-md"
      />
      <div className="flex flex-col gap-0 items-start px-4">
        <h2 className="text-2xl font-medium">{projectName}</h2>
        <h3 className="text-xs">{projectDescription}</h3>
        <div className="flex gap-4 items-center text-center text-lg mt-4 w-full justify-center">
          <div className="bg-[#383427] text-[#e6e0d3] text-sm px-2 py-2 rounded-full flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <Link href={projectPage}>{t("seeMoreBttn")}</Link>
          </div>
          <div className="bg-[#383427] text-[#e6e0d3] text-sm px-2 py-2 rounded-full flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>

            <Link href="https://www.cirquedusoleil.com/twas-the-night-before#about-the-show">
              {t("visitProjectBttn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
