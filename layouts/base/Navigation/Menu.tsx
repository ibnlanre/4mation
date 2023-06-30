import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import navigation from "./navigation.json";
import Link from "next/link";
import clsx from "clsx";

interface IMenu {
  handleClose: Function;
}

export function Menu({ handleClose }: IMenu) {
  const route = usePathname();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.getComputedStyle(menuRef.current).display === "flex")
        handleClose();
    });
  }, []);

  return (
    <ul ref={menuRef} className="hidden font-medium md:flex gap-7">
      {navigation.map(({ title, path }, idx) => (
        <Link key={idx} href={path}>
          <li
            className={clsx({
              "![background-size:_100%_100%]": route === path,
              "nav-underline": true,
            })}
          >
            {title}
          </li>
        </Link>
      ))}
    </ul>
  );
}
