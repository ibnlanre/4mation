import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICourse {
  type: string;
  title: string;
  link: string;
  image: StaticImageData;
  alt: string;
}

export function Course({ type, title, link, image, alt }: ICourse) {
  return (
    <Link href={link}>
      <article className="grid gap-3 auto-rows-max group">
        <figure className="relative overflow-hidden aspect-video">
          <Image
            className="object-cover max-h-full min-h-full duration-500 group-hover:scale-105"
            src={image.src}
            width={image.width}
            height={image.height}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            alt={alt}
          />
          <p className="absolute right-0 py-2 text-white bottom-8 px-7 bg-midnight-blue group-hover:bg-[crimson]">
            {type}
          </p>
        </figure>
        <h4 className="text-xl font-semibold">{title}</h4>
      </article>
    </Link>
  );
}
