import { Course, Courses, Disciplines } from "@/components";
import { businessManagement } from "@/layouts/courses";

import Head from "next/head";

export default function BusinessManagement() {
  return (
    <>
      <Head>
        <title>Business Management - 4mation</title>
      </Head>
      <Disciplines />
      <Courses>
        {businessManagement.map((props, idx) => (
          <Course key={idx} {...props} />
        ))}
      </Courses>
    </>
  );
}
