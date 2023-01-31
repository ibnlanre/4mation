import Image from "next/image";
import WeldingStandby from "./assets/welding-standby.jpg";

export function Values() {
  return (
    <section className="grid sm:grid-cols-2">
      <div className="showcase text-white bg-[crimson]">
        <article className="grid gap-4">
          <h2 className="heading">Our Vision</h2>
          <p className="text-lg">
            To be the premier solution provider in the energy sector creating
            sustainable value for all stakeholders.
          </p>
        </article>
        <article className="grid gap-4">
          <h2 className="heading">Our Mission</h2>
          <p className="text-lg">
            To research and provide knowledge based quality service to our
            clients exceeding their expectations.
          </p>
        </article>
      </div>
      <figure className="relative grid">
        <Image
          src={WeldingStandby.src}
          blurDataURL={WeldingStandby.blurDataURL}
          className="object-cover"
          placeholder="blur"
          alt="Spencer Davis - unsplash"
          fill
        />
        <span
          className="absolute w-4 h-8 bg-[crimson] inset-y-2/4 hidden sm:block"
          style={{
            clipPath: "polygon(0 0, 0 100%, 100% 50%)",
          }}
        />
      </figure>
    </section>
  );
}
