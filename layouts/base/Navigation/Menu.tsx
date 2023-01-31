import { usePathname } from "next/navigation";

import navigation from "./navigation.json";
import Link from "next/link";
import clsx from "clsx";

export function Menu() {
  const route = usePathname();
  return (
    <ul className="hidden font-medium md:flex gap-7">
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
