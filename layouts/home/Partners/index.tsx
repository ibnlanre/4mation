import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import IADC from "./assets/iadc.png";
import Intertek from "./assets/intertek.png";
import IOSH from "./assets/iosh.png";
import MaxWell from "./assets/maxwell.jpeg";
import PetroKnowledge from "./assets/petroknowledge.png";
import TheWellAcademy from "./assets/the-well-academy.png";

const partners: Array<StaticImageData & { alt: string; link: string }> = [
  {
    ...IADC,
    alt: "IADC",
    link: "https://www.iadc.org/",
  },
  {
    ...Intertek,
    alt: "Intertek",
    link: "https://www.intertek.com/",
  },
  {
    ...IOSH,
    alt: "IOSH",
    link: "https://iosh.com/",
  },
  {
    ...MaxWell,
    alt: "MaxWell",
    link: "https://johnmaxwellteam.com/",
  },
  {
    ...PetroKnowledge,
    alt: "PetroKnowledge",
    link: "https://petroknowledge.com/",
  },
  {
    ...TheWellAcademy,
    alt: "The Well Academy",
    link: "https://www.wellacademy.com/",
  },
];

export function Partners() {
  return (
    <div className="bg-white">
      <section className="container grid gap-6 mx-auto showcase justify-items-center">
        <header className="grid gap-3 justify-items-center">
          <h2 className="heading">Partners</h2>
          <hr className="border-t-4 border-t-midnight-blue w-9" />
        </header>
        <ul className="flex flex-wrap justify-center gap-10">
          {partners.map(({ src, width, height, alt, link }, idx) => (
            <li key={idx} className="flex gap-8 h-14">
              <Link href={link}>
                <Image
                  className="object-contain max-h-full max-w-max"
                  width={width}
                  height={height}
                  src={src}
                  alt={alt}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
