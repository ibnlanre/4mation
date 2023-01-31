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
  return (
    <>
      <Head>
        <title>4mation Drilling Services Limited</title>
        <meta
          name="description"
          content="4mation - Project Management, Oil and Gas Training,  Turnkey oil and gas"
        />
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
