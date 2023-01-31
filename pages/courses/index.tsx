import {
  technical,
  projectManagement,
  hse,
  businessManagement,
  softSkills,
} from "@/layouts/courses";
import { useMemo, useState } from "react";
import { Course, Courses, Disciplines } from "@/components";

import Head from "next/head";

export default function AllCourses() {
  const COUNT_PER_CLICK = 6;

  const allCourses = useMemo(() => {
    return technical
      .concat(projectManagement, hse, businessManagement, softSkills)
      .sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  const [visibleCourses, setVisibleCourses] = useState(
    allCourses.slice(0, COUNT_PER_CLICK)
  );

  function handleVisibleCourses() {
    if (visibleCourses.length < allCourses.length) {
      setVisibleCourses(
        allCourses.slice(0, visibleCourses.length + COUNT_PER_CLICK)
      );
    }
  }

  return (
    <>
      <Head>
        <title>Academist Courses - 4mation</title>
      </Head>
      <Disciplines />
      <Courses>
        {visibleCourses.map((props, idx) => (
          <Course key={idx} {...props} />
        ))}
        <button
          className="py-4 mx-auto text-white px-9 bg-midnight-blue col-span-full"
          onClick={handleVisibleCourses}
        >
          Load more
        </button>
      </Courses>
    </>
  );
}
