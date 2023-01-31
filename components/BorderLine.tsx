import { LinkProps } from "next/link";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

import Link from "next/link";

const borderLineMotion: Variants = {
  rest: {
    width: "100%",
    background: "currentColor",
    height: "2px",
  },
  hover: {
    clipPath: [
      "inset(0 0 0 0%)",
      "inset(0 0 0 100%",
      "inset(0 100% 0 0)",
      "inset(0 0% 0 0)",
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.4, 0.4, 1],
      ease: "easeInOut",
      type: "tween",
    },
  },
};

interface IBorderLine extends LinkProps {
  children: ReactNode;
}

export function BorderLine({ children, ...props }: IBorderLine) {
  return (
    <motion.div
      className="grid overflow-hidden gap-y-0.5 w-max"
      initial="rest"
      whileHover="hover"
    >
      <Link {...props} className="text-lg">
        {children}
      </Link>
      <motion.span variants={borderLineMotion} />
    </motion.div>
  );
}
