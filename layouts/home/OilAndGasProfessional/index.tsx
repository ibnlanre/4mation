import { BorderLine } from "@/components";

import ConstructionMachines from "./assets/construction-machines.jpg";
import Image from "next/image";

export function OilAndGasProfessional() {
  return (
    <div className="grid sm:grid-cols-2">
      <figure className="relative grid aspect-video sm:aspect-auto">
        <Image
          src={ConstructionMachines.src}
          blurDataURL={ConstructionMachines.blurDataURL}
          placeholder="blur"
          className="object-cover"
          alt="Ant Rozetsky - unsplash"
          fill
        />
      </figure>
      <section className="showcase bg-[whitesmoke]">
        <h2 className="heading">Want to be a professional in oil & gas?</h2>
        <BorderLine href="/courses">Read More</BorderLine>
      </section>
    </div>
  );
}
