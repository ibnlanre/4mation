import { Icon } from "@iconify/react";

import disciplines from "../disciplines.json";
import Link from "next/link";

export function Footer() {
  return (
    <div className="py-12 text-white bg-raisin-black">
      <footer className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-10 justify-items-start container">
        <address className="grid flex-1 gap-4 not-italic">
          <p>
            Block B2, Plot 129 - 132, Trans-Amadi Port Harcourt, Rivers State,
            Nigeria.
          </p>
          <a href="tel:+2348086203699">+234 808 620 3699</a>
        </address>
        <section>
          <h4 className="mb-2 text-xl font-semibold">Support</h4>
          <ul className="grid gap-2">
            <Link className="hover:text-[crimson]" href="/services">
              <li>Services</li>
            </Link>
            <li>Events</li>
            <Link className="hover:text-[crimson]" href="/contact-us">
              <li>Contact</li>
            </Link>
          </ul>
        </section>
        <section>
          <h4 className="mb-2 text-xl font-semibold">Course Disciplines</h4>
          <ul className="grid gap-2">
            {disciplines.map(({ title, link }, idx) => (
              <Link key={idx} className="hover:text-[crimson]" href={link}>
                <li>{title}</li>
              </Link>
            ))}
          </ul>
        </section>
        <section>
          <h4 className="mb-2 text-xl font-semibold">Follow us</h4>
          <ul className="flex justify-between">
            <li className="">
              <Icon icon="entypo-social:facebook-with-circle" />
            </li>
            <li className="">
              <Icon icon="entypo-social:twitter-with-circle" />
            </li>
            <li className="">
              <Icon icon="entypo-social:linkedin-with-circle" />
            </li>
            <li className="">
              <Icon icon="entypo-social:instagram-with-circle" />
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
