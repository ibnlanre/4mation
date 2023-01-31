import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import disciplines from "../disciplines.json";

import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <menu className="bg-white">
        <header className="container flex items-center justify-between h-16">
          <Logo />
          <Menu />
          {isMenuOpen ? (
            <Mobile handleClose={handleMenu} />
          ) : (
            <Desktop handleOpen={handleMenu} />
          )}
        </header>
      </menu>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.menu
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 100,
              x: "0%",
              transition: {
                ease: "easeInOut",
                type: "tween",
              },
            }}
            exit={{
              opacity: 0,
              x: "100%",
              transition: {
                ease: "easeInOut",
                type: "tween",
              },
            }}
            className="fixed inset-0 z-10 [backdrop-filter:blur(3px)] mt-16"
          >
            <div className="w-full h-full">
              <section className="container grid content-center text-white bg-[crimson] bg-opacity-90 h-1/3">
                <ul className="grid items-center h-full gap-4 text-xl py-9">
                  <li className="hover:opacity-80">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <hr />
                  <li className="hover:opacity-80">
                    <Link href="/services">Services</Link>
                  </li>
                  <hr />
                  <li className="hover:opacity-80">
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </section>

              <section className="container grid content-start bg-white bg-opacity-90 h-2/3">
                <ul className="grid items-center h-full gap-4 text-xl py-9">
                  {disciplines.flatMap(({ title, link }, idx) => [
                    <li key={idx}>
                      <Link className="hover:opacity-60" href={link}>
                        {title}
                      </Link>
                    </li>,
                    disciplines.length !== ++idx ? (
                      <hr className="border-t-black" />
                    ) : (
                      []
                    ),
                  ])}
                </ul>
              </section>
            </div>
          </motion.menu>
        )}
      </AnimatePresence>
    </>
  );
}
