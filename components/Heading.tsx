import { motion } from "framer-motion";
import { createElement, HTMLAttributes } from "react";

import clsx from "clsx";

interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  order?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export function Heading({
  children,
  order = "h2",
  className,
  ...props
}: IHeading) {
  return (
    <header className={clsx("grid gap-4", className)}>
      {createElement(order, { ...props, className: "heading" }, children)}
      <motion.hr
        initial={{
          width: "0",
        }}
        animate={{
          width: "36px",
          transition: {
            type: "tween",
            ease: "anticipate",
          },
        }}
        className="border-t-4 border-t-midnight-blue w-9"
      />
    </header>
  );
}
