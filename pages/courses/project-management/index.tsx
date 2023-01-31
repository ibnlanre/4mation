import { Course, Courses, Disciplines } from "@/components";
import { projectManagement } from "@/layouts/courses";

import Head from "next/head";

export default function ProjectManagement() {
  return (
    <>
      <Head>
        <title>Project Management - 4mation</title>
      </Head>
      <Disciplines />
      <Courses>
        {projectManagement.map((props, idx) => (
          <Course key={idx} {...props} />
        ))}
      </Courses>
    </>
  );
}
