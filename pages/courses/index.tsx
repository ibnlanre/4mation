import { useContext } from "react";

import { Course, Courses, Disciplines } from "@/components";
import { allCourses, Context } from "@/context";
import { COURSE_COUNT_PER_CLICK } from "@/layouts/courses";

import Head from "next/head";

export default function AllCourses() {
  const { visibleCourses, setVisibleCourses } = useContext(Context);

  function handleVisibleCourses() {
    if (visibleCourses.length < allCourses.length) {
      const totalCount = visibleCourses.length + COURSE_COUNT_PER_CLICK;
      const totalVisibleCourses = allCourses.slice(0, totalCount);
      setVisibleCourses(totalVisibleCourses);
    }
  }

  const areAllCoursesVisible = visibleCourses.length === allCourses.length;

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

        {!areAllCoursesVisible && (
          <button
            className="py-4 mx-auto text-white px-9 bg-midnight-blue col-span-full"
            onClick={handleVisibleCourses}
          >
            Load more
          </button>
        )}
      </Courses>
    </>
  );
}
