import { Course, Courses, Disciplines } from "@/components";
import { technical } from "@/layouts/courses";

import Head from "next/head";

export default function Technical() {
  return (
    <>
      <Head>
        <title>Technical - 4mation</title>
      </Head>
      <Disciplines />
      <Courses>
        {technical.map((props, idx) => (
          <Course key={idx} {...props} />
        ))}
      </Courses>
    </>
  );
}
