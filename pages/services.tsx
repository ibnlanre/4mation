import {
  HumanCapitalDevelopment,
  Logistics,
  ProjectManagement,
  RenewableEnergy,
  TurnkeyDrillingService,
} from "@/layouts/services";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

import Head from "next/head";
import Link from "next/link";

const services = [
  {
    tab: "project-management",
    title: "Project Management",
    component: ProjectManagement,
  },
  {
    tab: "human-capital-development",
    title: "Human Capital Development",
    component: HumanCapitalDevelopment,
  },
  {
    tab: "turnkey-drilling-service",
    title: "Turnkey Drilling Service",
    component: TurnkeyDrillingService,
  },
  {
    tab: "renewable-energy",
    title: "Renewable Energy",
    component: RenewableEnergy,
  },
  {
    tab: "logistics",
    title: "Logistics",
    component: Logistics,
  },
];

export default function Services() {
  const { query } = useRouter();
  const route = query as Record<string, any>;
  const path = Object.keys(route)?.at(0) ?? "project-management";

  return (
    <div className="container grid items-center gap-14">
      <Head>
        <title>Services - 4mation</title>
      </Head>
      <div className="flex flex-col items-center md:flex-row">
        <ul className="grid self-start w-full mt-16 divide-y-2 md:w-max divide-dashed">
          {services.map((service, idx) => {
            return (
              <Link
                key={idx}
                href={{
                  query: service.tab,
                }}
              >
                <li className="flex items-center gap-2 py-3 text-xl">
                  {service.tab === path && (
                    <Icon icon="material-symbols:arrow-right-alt-rounded" />
                  )}
                  <span>{service.title}</span>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="grid flex-1 gap-8 py-16 md:px-16 md:clump:px-[clamp(10px,4vw,4rem)]">
          {services.map((service, idx) => {
            return service.tab === path && <service.component key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}
