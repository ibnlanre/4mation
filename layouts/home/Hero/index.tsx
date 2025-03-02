import Image from "next/image";
import OilRig from "./assets/oil-rig.jpg";

export function Hero() {
  return (
    <figure className="max-h-[560px] w-full aspect-[7/3] relative min-h-[400px]">
      <Image
        src={OilRig.src}
        blurDataURL={OilRig.blurDataURL}
        className="!fixed top-0 object-cover h-full py-16 -z-10"
        alt="Patrick Hendry - unsplash"
        placeholder="blur"
        fill
      />
    </figure>
  );
}
