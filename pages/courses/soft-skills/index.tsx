import { Course, Courses, Disciplines } from "@/components";
import { softSkills } from "@/layouts/courses";

import Head from "next/head";

export default function SoftSkills() {
  return (
    <>
      <Head>
        <title>Soft Skills - 4mation</title>
      </Head>
      <Disciplines />
      <Courses>
        {softSkills.map((props, idx) => (
          <Course key={idx} {...props} />
        ))}
      </Courses>
    </>
  );
}
