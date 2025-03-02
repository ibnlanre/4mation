import { type AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";

import { Footer, Header, Navigation } from "@/layouts/base";
import { allCourses, Context } from "@/context";
import { FavIcon } from "@/components/FavIcon";
import { BaseStyles } from "@/components/BaseStyles";
import { COURSE_COUNT_PER_CLICK } from "@/layouts/courses";

import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [visibleCourses, setVisibleCourses] = useState(() => {
    return allCourses.slice(0, COURSE_COUNT_PER_CLICK);
  });

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.scrollHeight);
    }
  }, [setHeaderHeight]);

  const value = {
    footerHeight,
    setFooterHeight,
    headerHeight,
    setHeaderHeight,
    visibleCourses,
    setVisibleCourses,
  };

  return (
    <Context.Provider value={value}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
        <FavIcon />
      </Head>
      <BaseStyles />
      <div ref={ref} className="sticky top-0 z-50">
        <Header />
        <Navigation />
      </div>
      <Component {...pageProps} />
      <Footer />
    </Context.Provider>
  );
}
