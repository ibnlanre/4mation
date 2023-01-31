import { type AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { Footer, Header, Navigation } from "@/layouts/base";

import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/index.css";

const poppins = Poppins({
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins-font",
  subsets: ["latin"],
});

function BaseStyles() {
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
      </Head>
      <BaseStyles />
      <div className="sticky top-0 z-50">
        <Header />
        <Navigation />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
