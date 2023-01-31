import Image from "next/image";
import Link from "next/link";
import fourMation from "../assets/4mation-logo.png";

export function Logo() {
  return (
    <figure
      className="h-full"
      style={{
        aspectRatio: (fourMation.width / fourMation.height).toPrecision(2),
      }}
    >
      <Link href="/">
        <Image
          src={fourMation.src}
          className="object-contain"
          blurDataURL={fourMation.blurDataURL}
          height={fourMation.height}
          width={fourMation.width}
          placeholder="blur"
          alt="4mation logo"
        />
      </Link>
    </figure>
  );
}
