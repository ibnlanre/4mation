import { BorderLine } from "@/components";

import BeAnExpert from "./assets/be-an-expert.jpg";
import Image from "next/image";

export function BecomeAnExpert() {
  return (
    <div className="grid sm:grid-cols-2">
      <section className="showcase bg-[whitesmoke]">
        <h2 className="heading">Become an HSE expert with us.</h2>
        <BorderLine href="/courses/hse">Read More</BorderLine>
      </section>
      <figure className="relative grid aspect-video sm:aspect-auto">
        <Image
          src={BeAnExpert.src}
          placeholder="blur"
          blurDataURL={BeAnExpert.blurDataURL}
          alt="Ej Yao - unsplash"
          className="object-cover"
          fill
        />
      </figure>
    </div>
  );
}
