import { Icon } from "@iconify/react";

interface IMobile {
  handleClose(): void;
}

export function Mobile({ handleClose }: IMobile) {
  return (
    <button
      onClick={handleClose}
      className="w-8 h-8 text-2xl md:hidden"
    >
      <Icon icon="iconoir:menu-scale" />
    </button>
  );
}
