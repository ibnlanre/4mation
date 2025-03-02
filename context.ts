import { createContext } from "react";

import {
  technical,
  projectManagement,
  hse,
  businessManagement,
  softSkills,
} from "@/layouts/courses";
import { Course } from "./course";

export const Context = createContext({
  footerHeight: 0,
  setFooterHeight: (e: number) => void 0,
  headerHeight: 0,
  setHeaderHeight: (e: number) => void 0,
  visibleCourses: [],
  setVisibleCourses: (e: Course[]) => void 0,
});

export const allCourses = technical
  .concat(projectManagement, hse, businessManagement, softSkills)
  .sort((a, b) => a.title.localeCompare(b.title));
