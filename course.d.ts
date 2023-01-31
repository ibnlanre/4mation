import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Course {
  title: string;
  type: string;
  link: string;
  image: StaticImageData;
  alt: string;
  curriculum?: Array<{
    heading: string;
    content?: Array<
      string | ReactNode | { subtitle: string; list?: string[] } | string[]
    >;
    list?: string[];
  }>;
}
