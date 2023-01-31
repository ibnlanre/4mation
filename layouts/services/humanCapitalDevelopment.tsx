import { Heading } from "@/components";
import Link from "next/link";

export function HumanCapitalDevelopment() {
  return (
    <>
      <Heading>Human Capital Development</Heading>
      <p>
        4mation Drilling Services delivers a suite of expert-led courses through
        methods that include in-class projects and field OJTs. Our training
        courses are designed to develop skills to accelerates your team's core
        competencies.
      </p>
      <p>
        This business service line supports companies in the oil and gas
        industry in the fields of Engineering, Maintenance and HSE. We can match
        highly skilled professionals with companies operating at highest
        standards.
      </p>
      <p>
        From our{" "}
        <Link href="/courses" className="text-[crimson]">
          training database
        </Link>{" "}
        we and our network in the oil and gas industry, we can help companies
        find and retain talents. In addition, we can provide all aspects of
        personnel management if outsourced to us.
      </p>
      <p>
        We also carry out Rig Crew Management by providing adequate and
        comfortable transportation and lodging services to rig personnel. Rig
        personnel are provided comfortable and safe lodging before departing for
        the helipad or before departing home on time off. 4mation Drilling
        Services ensures adequate security is provided for the rig crews while
        on transit to or from the helipad or at the lodging.
      </p>

      <p>Click on the button to view all our training</p>
      <Link href="/courses">
        <button className="px-4 py-3 text-white bg-midnight-blue justify-self-start">
          View our Training
        </button>
      </Link>
    </>
  );
}
