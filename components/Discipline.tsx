import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { type Course } from "@/course";

import Image from "next/image";
import Head from "next/head";

interface IDiscipline {
  course: Course;
}

export function Discipline({ course }: IDiscipline) {
  const { back } = useRouter();

  return (
    <>
      <Head>
        <title>{course.title} - 4mation</title>
      </Head>
      <div className="mx-auto clump:px-[clamp(20px,8vw,7rem)] max-w-7xl gap-10 grid pt-6 pb-28">
        <header onClick={back} className="cursor-pointer group">
          <button className="float-left w-0 py-2 overflow-hidden text-xl duration-500 group-hover:w-auto group-hover:pr-4">
            <Icon icon="material-symbols:arrow-back-ios-rounded" />
          </button>
          <h1 className="text-3xl font-medium clump:text-[1.25rem,3vw,1.875rem]">
            {course.title}
          </h1>
        </header>
        <figure className="max-h-[560px] w-full aspect-[7/3] relative">
          <Image
            alt={course.alt}
            width={course.image.width}
            height={course.image.height}
            src={course.image.src}
            blurDataURL={course.image.blurDataURL}
            className="object-cover w-full h-full"
            placeholder="blur"
          />
          <figcaption className="absolute right-0 flex gap-1 py-2 text-white bottom-8 px-7 bg-[crimson] max-w-max">
            Category:
            <span className="font-semibold">{course.type}</span>
          </figcaption>
        </figure>
        <article className="grid gap-6">
          <h4 className="py-3 border-b-2 border-b-[crimson] text-2xl">
            Curriculum
          </h4>
          {course.curriculum.map(({ heading, content, list }, idx) => {
            return (
              <section key={idx} className="grid gap-3">
                <h5 className="text-xl font-semibold">{heading}</h5>
                {content && (
                  <div className="grid gap-1.5">
                    {content.flatMap((item, idx) =>
                      Array.isArray(item) ? (
                        <ul key={idx} className="list-disc list-inside">
                          {item.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      ) : typeof item === "object" && "subtitle" in item ? (
                        <>
                          <p
                            key={`subtitle-${idx}`}
                            className="mt-3 font-medium"
                          >
                            {item.subtitle}
                          </p>
                          {item.list && (
                            <ul
                              key={`list-${idx}`}
                              className="list-disc list-inside"
                            >
                              {item.list.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <p key={idx}>{item}</p>
                      )
                    )}
                  </div>
                )}
                {list && (
                  <ul className="list-disc list-inside">
                    {list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </article>
      </div>
    </>
  );
}
