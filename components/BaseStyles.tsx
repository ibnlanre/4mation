import { Poppins } from "@next/font/google";

const poppins = Poppins({
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins-font",
  subsets: ["latin"],
});

export function BaseStyles() {
  return (
    <style jsx global>
      {`
        :root {
          --poppins-font: ${poppins.style.fontFamily};
          font-family: var(--poppins-font);
          color: #252525;
        }
      `}
    </style>
  );
}
