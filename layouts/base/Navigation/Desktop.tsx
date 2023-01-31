import { Icon } from "@iconify/react";

interface IDesktop {
  handleOpen(): void;
}

export function Desktop({ handleOpen }: IDesktop) {
  return (
    <button onClick={handleOpen} className="w-8 h-8 text-2xl md:hidden">
      <Icon hFlip vFlip icon="iconoir:menu-scale" />
    </button>
  );
}
