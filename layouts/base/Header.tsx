import { Icon } from "@iconify/react";

export function Header() {
  return (
    <header className="justify-center hidden py-3 md:flex bg-raisin-black text-philippine-silver">
      <div className="container flex justify-between w-full text-sm font-light">
        <address className="flex gap-2 not-italic">
          <p className="space-x-1">
            <span>Call:</span>
            <a
              className="duration-200 hover:text-awesome"
              href="tel:+2348086203699"
            >
              08086203699
            </a>
            ,
            <a
              className="duration-200 hover:text-awesome"
              href="tel:+2348086630375"
            >
              08086630375
            </a>
          </p>
          <p className="space-x-1">
            <span>Mail:</span>
            <a
              className="duration-200 hover:text-awesome"
              href="mailto:info@4mationdrilling.com"
            >
              info@4mationdrilling.com
            </a>
          </p>
        </address>
        <div className="flex items-center gap-4">
          <p>Follow us:</p>
          <ul className="flex gap-3 text-lg">
            <li className="duration-200 cursor-pointer hover:text-white">
              <Icon icon="entypo-social:facebook-with-circle" />
            </li>
            <li className="duration-200 cursor-pointer hover:text-white">
              <Icon icon="entypo-social:twitter-with-circle" />
            </li>
            <li className="duration-200 cursor-pointer hover:text-white">
              <Icon icon="entypo-social:linkedin-with-circle" />
            </li>
            <li className="duration-200 cursor-pointer hover:text-white">
              <Icon icon="entypo-social:instagram-with-circle" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
