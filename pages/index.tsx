import {
  BecomeAnExpert,
  ContactUs,
  OilAndGasProfessional,
  OurServices,
  Partners,
  Welcome,
} from "@/layouts/home";
import { Hero } from "@/layouts/home/Hero";
import Head from "next/head";

export default function Page() {
  const description =
    "4mation - Project Management, Oil and Gas Training, Turnkey oil and Gas";
  const title = "4mation Drilling Services Limited";
  
  return (
    <>
      <Head>
        <title>4mation Drilling Services Limited</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/logo.png" />
        <meta property="robots" content="no-index, no-follow" />
        <meta name="revisit-after" content="7 days" />
      </Head>
      <Hero />
      <Welcome />
      <OilAndGasProfessional />
      <OurServices />
      <BecomeAnExpert />
      <Partners />
      <ContactUs />
    </>
  );
}
