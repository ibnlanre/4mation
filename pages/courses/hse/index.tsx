import { Course, Courses, Disciplines } from "@/components";
import { hse } from "@/layouts/courses";

import Head from "next/head";

export default function HSE() {
  return (
    <>
      <Head>
        <title>Business Management - 4mation</title>
      </Head>
      <Disciplines />
      <Courses>
        {hse.map((props, idx) => (
          <Course key={idx} {...props} />
        ))}
      </Courses>
    </>
  );
}
