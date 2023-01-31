import { type Course } from "@/course";

import RoadGravelGritBallastMeta from "./assets/road-gravel-grit-ballast-meta.jpg";
import IndustrialEngine from "./assets/industrial-engine.jpg";
import Milling from "./assets/milling.jpg";
import Drill from "./assets/drill.jpg";
import DrillingPractice from "./assets/drilling-practice.jpg";
import MiningOilAndGas from "./assets/mining-oil-and-gas.jpg";
import DrillingMachine from "./assets/drilling-machine.jpg";
import WeldingOperation from "./assets/welding-operation.jpg";
import NaturalGasRig from "./assets/natural-gas-rig.jpg";
import DrillingRig from "./assets/drilling-rig.jpg";
import GlobalWarming from "./assets/global-warming.jpg";

export const technical: Array<Course> = [
  {
    title: "MODU Stability & Ballast Control",
    type: "Technical",
    link: "/courses/technical/modu-stability-ballast-control",
    image: RoadGravelGritBallastMeta,
    alt: "pixabay-18781",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "This Stability & Ballast Control for Mobile Offshore Drilling Units (MODU) is a customized stability course specifically developed for the oil and gas industry's jack-ups, semi-submersibles and floating drilling platforms.",
          "The course is also a pre-requisite for obtaining an endorsement as Offshore Installation Manager, Barge supervisor or Ballast Control Operator",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "This course is designed for personnel working on Mobile Offshore Drilling Units (MODUs) who require marine stability training.",
          "This includes the following roles:",
          [
            "OIM",
            "Barge supervisor",
            "Ballast Control Operator",
            "Bargemaster",
          ],
        ],
      },
      {
        heading: "Certificate",
        content: [
          <>
            This course will be offered in partnership with{" "}
            <a
              href="https://www.intertek.com/"
              className="font-medium text-[crimson]"
              target="_blank"
            >
              Intertek
            </a>
            ; a certificate of completion from Intertek will be issued
          </>,
        ],
      },
      {
        heading: "Duration",
        content: ["5 Days"],
      },
      {
        heading: "Course content",
        content: [
          "Some of the course content include:",
          [
            "Introduction and overview of semi-submersible MODU",
            "Initial Stability Theory",
            "Moments & Centers of Gravity",
            "Draft, List & Trim Calculations",
            "Free Surface Effect",
            "Effect of weight, ballast & free surface on stability and ballast control operations",
            "Hydrostatic Tables, Tank Tables, Piping Systems and Load Form Calculations",
            "Mooring and Towing",
            "Storm Survival Preparations",
            "Damage Stability & Damage Control",
          ],
        ],
      },
    ],
  },
  {
    title:
      "Oil & Gas engineering maintenance: Electrical and Mechanical (Oil & Gas 2)",
    type: "Technical",
    link: "/courses/technical/electrical-and-mechanical",
    image: IndustrialEngine,
    alt: "mika-baumeister-unsplash",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "The Oil & Gas maintenance course has two streams, Electrical and Maintenance. Both streams have three levels: Foundation, Level 1 and Level 2. The first two levels or a similar qualification being a prerequisite for Level 2.",
          "The course covers both Foundation and Level 1. Both courses are about preparing participants for maintenance work in the Oil and Gas Industry as junior electricians and motormen (junior mechanics)",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "Persons who have an interest in specializing in the following roles on drilling rigs:",
          ["Motormen/Mechanics", "Electricians"],
        ],
      },
      {
        heading: "Certificate",
        content: [
          "Successful completion leads to the award of an OPITO qualification represented by a certificate from 4mation Drilling Services.",
        ],
      },
      {
        heading: "Duration",
        content: ["3 Months"],
      },
      {
        heading: "Course content",
        content: [
          "For Foundation, level 1 and level 2, the following will be addressed at the respective levels:",
          {
            subtitle: "Electrical Rotating Equipment and Tools",
            list: [
              "Generators and voltage",
              "Regulation (HV & LV)",
              "Single phase and 3 phase AC Motors and serviceable components",
              "DC motors",
            ],
          },
          {
            subtitle: "Electrical Distribution Systems",
            list: [
              "Single and 3 phase electrical distribution systems",
              "Cells & batteries and uninterruptable power supply systems",
              "Heating ventilation and air conditioning equipment",
            ],
          },
          {
            subtitle: "Electrical hand tools",
            list: [
              "Protection devices of electrical equipment in hazardous areas",
              "Circuit protection devices",
              "Power protection relays",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "IADC Gateway: Drilling industry green hand",
    type: "Technical",
    link: "/courses/technical/drilling-industry-green-hand",
    image: MiningOilAndGas,
    alt: "rob-ellis-istockphoto",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "An entire generation of experienced and specialized workers is retiring, taking with them their expertise. The drilling industry faces a unique challenge today when it comes to recruiting the right people for the right roles. This course is about training potential candidates for employment in entry-level rig positions on Oil and Gas drilling rigs.",
          "This course is designed to produce rig-ready persons, thereby reducing the risk that newly employed personnel may bring to rig operations. This is likely to reduce the risk profile of organization who engage these personnel.",
          "The course combines both classroom and practical sessions.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "Persons who are interested in securing jobs in entry-level rig roles.",
        ],
      },
      {
        heading: "Certificate",
        content: [
          <>
            A certificate of completion will be issued by{" "}
            <a
              href="https://www.iadc.org/"
              className="font-medium text-[crimson]"
              target="_blank"
            >
              IADC
            </a>
            .
          </>,
        ],
      },
      {
        heading: "Duration",
        content: ["3 Months (13 Weeks)"],
      },
      {
        heading: "Course content",
        list: [
          "IADC RigPass",
          "Awareness-level well control",
          "Introduction to the industry",
          "Behavioral training (human factors)",
          "Rig life",
          "Technical math",
          "Rigging basics",
          "Electrical and fluid safety",
          "Industrial practices",
          "On-the-job training (rig based)",
        ],
      },
    ],
  },
  {
    title: "Drilling & Completions for non-drilling",
    type: "Technical",
    link: "/courses/technical/drilling-completions-for-non-drilling",
    image: DrillingMachine,
    alt: "sidney-pearce-unsplash",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "This is a foundation level course designed to introduce the subject of drilling and completion operations to non-drilling professionals who are new to the industry or who need to understand what the drilling industry operations are all about.",
          "It introduces the basic concepts and flow of drilling and completions in a simple to understand manner so that participants can understand in generic terms. It also explains common terms in the industry, various types of rigs, factors to consider during well planning and includes a rig visit for participants.",
          "No prior knowledge is required for this course; hence it is open to participants with varying degrees of knowledge and experience in the industry.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "Typical roles include personnel in the following functions:",
          [
            "Finance",
            "Logistics",
            "Human Resources",
            "Back end staff",
            "Support personnel who work for drilling contractors",
            "Any other person who wishes to understand the basics of drilling to function better in their work.",
          ],
        ],
      },
      {
        heading: "Certificate",
        content: [
          "4mation Drilling Certificate of participation will be issued to successful participants upon completion of this course.",
        ],
      },
      {
        heading: "Duration",
        content: ["4 Days"],
      },
      {
        heading: "Course content",
        content: [
          "History of Oil and Gas in Nigeria",
          "Oil and gas value chain",
          "The Nigerian Oil and Gas Industry",
          "Overview of drilling and completions",
          "Basic types of rigs",
          "Rig equipment (Power, Well control, hoisting, circulatory, rotary)",
          "Basic Drill string",
          "Basic Casing",
          "Basic Cementing",
          "Completion types",
          "Production operations",
          "Crude oil sales & trading",
          "IWCF Level 1 certification",
        ],
      },
    ],
  },
  {
    title: "EX01-EX04 Gas & Vapors",
    type: "Technical",
    link: "/courses/technical/ex01-ex04-gas-vapors",
    image: GlobalWarming,
    alt: "chris-leboutillier-pixabay",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "This course is designed for those involved in the selection, installation and inspection of equipment intended for use in hazardous locations. Based on ATEX and IEC standards, this course includes a combination of hands on training and expert evaluation.",
          "Students are required to complete electrical installation exercises involving wiring, glanding and inspection skills, however, personnel without these skills may also benefit from this course.",
          "Overall, CompEx Ex 01-Ex04 consists of approximately 50% classroom-based theoretical and hands-on training and 50% hands-on assessment and written evaluation.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "Anyone who conducts electrical projects in hazardous areas such as Offshore rig and platform electricians.",
          "Typical roles for this course include:",
          [
            "Electricians",
            "Chief electricians",
            "QA/QC personnel",
            "Maintenance personnel involved in designing",
            "Maintenance personnel working with the industry regulating body",
          ],
        ],
      },
      {
        heading: "Certificate",
        content: [
          <>
            CompEx Ex 01 - 04 Core competence certificate of hazardous locations
            will be issued on completion.This course is in partnership with{" "}
            <a
              href="https://www.intertek.com/"
              className="font-medium text-[crimson]"
              target="_blank"
            >
              Intertek
            </a>
          </>,
        ],
      },
      {
        heading: "Duration",
        content: ["5 Days"],
      },
      {
        heading: "Course content",
        list: [
          "General principles: flammable limits UEL/LEL, flashpoint, ignition temperature, relative density, area classification to BS EN60079",
          "10-1, gas grouping, temperature classification & ingress protection.",
          "Standards, Certification and marking, EU Directives ATEX 95 & ATEX 137, Equipment Categories and EPL's.",
          "Flameproof EEx 'd' protection.",
          "Increased safety EEx 'e' protection.",
          "Type EEx 'n', 'nR', 'nA', 'nC' & 'nL' protection.",
          "Pressurisation EEx 'px', 'py' & 'pz' protection.",
          "Intrinsic safety EEx 'ia', 'ib' & 'ic' protection.",
          "Other methods of protection, EEx 'o', EEx 'q',EEx 'ma', 'mb' & 'mc'",
          "Combined (hybrid) methods of protection.",
          "Selection & installation of equipment to BS EN60079-14 including wiring systems: cables, cable glands and cable gland accessories.",
          "Inspection of equipment to BS EN 60079-17 and induction to competence validation testing.",
          "Permit to work system and safe isolation.",
        ],
      },
    ],
  },
  {
    title: "Managing Wellsite Operations",
    type: "Technical",
    link: "/courses/technical/managing-wellsite-operations",
    image: WeldingOperation,
    alt: "christopher-burns-unsplash",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "This course is carried out in partnership with PetroSkills. It is an interactive course that teaches participants to successfully manage wellsite operational plans, resource time management and control measures.",
          "Soft skills requirements for wellsite supervisors which include active listening and conducting crucial conversations is exercised during the course.",
          "Documented case histories of complex well operations and techniques to manage associated human factors.",
          "Participants will learn to build effective teams by assuming roles in class exercises of the company representative, rig contractor and supplier personnel. Critical issues are identified to improve safety and reduce downtime.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "This course is appropriate for the following roles:",
          [
            "Drilling and completion well supervisors",
            "Wellsite engineers and superintendents",
            "Operations engineers",
            "Senior drilling contractors",
            "Well site service personnel.",
          ],
        ],
      },
      {
        heading: "Certificate",
        content: [
          "A PetroSkills Certificate will be issued upon successful completion of the course.",
        ],
      },
      {
        heading: "Duration",
        content: ["5 Days"],
      },
      {
        heading: "Course content",
        list: [
          "Rig team priorities and success measures",
          "Focusing on wellsite challenges, distractions and sensitivities",
          "Managing reports and documentation",
          "Rig meetings and drills",
          "Well monitoring, limits, alarms and suspension of operations",
          "Reducing NPTs, technical limits, DWOP/CWOP techniques",
          "Managing complex situations associated with tripping, displacements and testing",
        ],
      },
    ],
  },
  {
    title: "Rig Inspection and Safe Environment",
    type: "Technical",
    link: "/courses/technical/rig-inspections-and-safe-environment",
    image: NaturalGasRig,
    alt: "anita-starzycka-pixabay",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "On completion of this course delegates will be able to:",
          [
            "Conduct a visual rig inspection using a defined format and assess the condition of the major equipment on a drilling rig.",
            "Identify major items that may impact safety and operational capability of drilling rigs",
            "Know about standards used in the drilling industry and their application to rig equipment",
            "Identify common deficiencies found on well control equipment.",
          ],
          "Our trainers work with updated curriculum aimed at improving candidate's knowledge of drilling, workover and well control equipment.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "Rig Inspection and Safe Environment (RISE) is designed to improve the knowledge of:",
          [
            "Drillers",
            "Drilling supervisors",
            "Drilling engineers",
            "Drilling managers",
            "Rig managers",
            "Rig HSE & training coordinators (RSTC)",
            "Maintenance supervisors",
            "Toolpushers",
            "Rig mechanics",
            "Rig electricians",
            "Personnel involved in the process of contracting",
          ],
        ],
      },
      {
        heading: "Certificate",
        content: [
          <>
            An{" "}
            <a
              href="https://www.iadc.org/"
              className="font-medium text-[crimson]"
              target="_blank"
            >
              IADC
            </a>{" "}
            Rig Inspection and Safe Environment(RISE) certificate will be issued
            at the end of the course, in Partnership with The Well Academy -
            Modu Resources
          </>,
        ],
      },
      {
        heading: "Duration",
        content: ["5 Days"],
      },
      {
        heading: "Course content",
        content: [
          {
            subtitle:
              "Introduction to Rig Inspection and Equipment Measurements",
            list: ["understand rig equipment and understand safety principles"],
          },
          {
            subtitle: "Overview of Drilling Operations Safety Case Studies",
            list: [
              "Understand operational rig systems",
              "Equipment: foreseeing and lowering risk",
              "Impacts and risks of critical equipment.",
            ],
          },
          {
            subtitle:
              "Advanced Inspection Techniques on critical and Safety Operational Equipment",
            list: [
              "Impact of inspections on uptime",
              "Inspection Reports and General Reporting Tips",
              "Effect of Maintenance on Operations",
              "Rules and Regulations",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Stuck Pipe Prevention & Solutions",
    type: "Technical",
    link: "/courses/technical/stuck-pipe-prevention-solutions",
    image: DrillingRig,
    alt: "anita-starzycka-pixabay",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "The purpose of this course is to provide well engineers, drilling supervisors and drill crew personnel with the knowledge and understanding of the causes of stuck pipe and the means to reduce or eliminate stuck pipe as a significant cause of lost time incidents and related costs.",
          "Stuck pipe is the primary cause of non-productive time and should be considered as an inevitable drilling hazard. This short course develops an understanding of how stuck pipe prevention can be managed through the well design and construction process.",
          "The last day of the course concentrates on solutions (fishing techniques and equipment), pre-planning and the economics of fishing operations.",
          "This course is delivered by Aberdeen Drilling School trainers in partnership with the ADS, UK.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "The course is suited for the following drilling roles:",
          [
            "Floormen/Mud men/Mud System Operators/ Derrickmen",
            "Assistant drillers",
            "Drillers",
            "Toolpushers",
            "OIMs",
            "Drilling Supervisors",
            "Well Engineers",
            "Rig Engineers/Rig Managers",
            "Well planning team",
          ],
        ],
      },
      {
        heading: "Certificate",
        content: [
          <>
            An{" "}
            <a
              href="https://www.intertek.com/"
              className="font-medium text-[crimson]"
              target="_blank"
            >
              Intertek
            </a>{" "}
            certificate will be issued upon successful completion of the course
            which is valid for 2 years.
          </>,
        ],
      },
      {
        heading: "Duration",
        content: ["3 Days"],
      },
      {
        heading: "Course content",
        list: [
          "Stuck pipe history and statistics",
          "Fundamentals of geology and wellbore",
          "Stability fundamentals: Overburden effects, vertical and horizontal stress, well path effects, rock stress vs rock strength",
          "Stuck pipe team",
          "Stuck pipe mechanisms and causes",
          "Differential sticking, wellbore geometry and hole pack off",
          "Causes of differential sticking",
          "Hole pack off: Causes, warnings, prevention",
          "Hole cleaning, high angle hole cleaning",
          "Drilling & Tripping practices",
          "Freeing techniques",
          "Stuck pipe mechanism worksheet",
        ],
      },
    ],
  },
  {
    title: "Drilling Practices",
    type: "Technical",
    link: "/courses/technical/drilling-practices",
    image: DrillingPractice,
    alt: "simone-impei unsplash",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "The drilling practices course is designed for personnel including field engineers and well engineers who are involved in the planning and execution of well programs. It covers major aspects of drilling technology emphasizing the practical application of theoretical principles.",
          "Drilling personnel must have a working knowledge of all the required disciplines in order to effectively drill a well whether simple or complex.",
          "This course builds a firm foundation in the principles and practices of drilling and well planning, drilling fluid, drill string design, hydraulic optimization and drilling hole problems.",
          "Participants will learn the components of drilling string and how to use each in optimum ways, evaluate Weight on Bit, drill collar sizing and apply practical solutions for analyzing drill string design performance for various kinds of holes.",
        ],
      },
      {
        heading: "Target Audience",
        list: [
          "Drilling supervisors",
          "Drilling engineers",
          "Toolpushers",
          "Rig managers",
          "Rig Engineers",
          "Technical support personnel",
        ],
      },
      {
        heading: "Certificate",
        content: [
          "A PetroSkills Certificate will be issued upon successful completion of the course",
        ],
      },
      {
        heading: "Duration",
        content: ["5 Days"],
      },
      {
        heading: "Course content",
        list: [
          "AFE preparation",
          "HSE at the rig site",
          "Cost control, evaluating alternative drilling methods and maximizing penetration rate",
          "Hole cleaning, sloughing shale, lost circulation, stuck pipe and fishing operations",
          "Drilling Fluids",
          "Lifting capacity of drilling fluids, pressure losses in the circulating system and ECD",
          "Maximizing hydraulics in the planning phase and at the rig",
          "Bit selection and application",
          "Casing and drill string design, selection of casing seats, BOP equipment",
          "Cement, cement additives and displacement mechanics",
          "Deviation control, directional drilling and horizontal drilling",
          "Pressure control, routine and special problems",
          "Project post analysis - After Action Reviews",
        ],
      },
    ],
  },
  {
    title: "Basic Drilling Technology",
    type: "Technical",
    link: "/courses/technical/basic-drilling-technology",
    image: Milling,
    alt: "milling chuck",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "This course is designed to cover various aspects of crude oil exploration and production while focusing on drilling. The course will cover history of oil production, prospecting and mining licenses, exploration process, drilling processes & technology, rig types, completion, testing and well intervention methods.",
          "This course includes a combination of lectures and workshop sessions designed to maximize knowledge transfer to the target audience.",
          "The basics of drilling processes including drilling phases, casing, cementing, drilling fluids, well heads, well control and industry requirements will be discussed.",
          "It also covers an overview of the latest drilling technologies in the industry with case studies focused on the unique environments of the course participants.",
        ],
      },
      {
        heading: "Target Audience",
        list: [
          "Drilling Engineers",
          "Petroleum Engineers",
          "Completion and Reservoir Engineers",
          "Geologists",
          "Entry-level drilling engineers",
          "Rig Engineers",
          "Drilling Supervisors",
          "Non-technical personnel with a least 1-year industry experience.",
        ],
      },
      {
        heading: "Certificate",
        content: [
          "A certificate will be issued by 4mation Drilling Services upon successfully completion of the test at the end of the course.",
        ],
      },
      {
        heading: "Duration",
        content: ["3 Days"],
      },
      {
        heading: "Course content",
        list: [
          "The overall drilling process and equipment",
          "The language of drillers - common terminology",
          "Understanding drilling abbreviations and acronyms",
          "Rig types and equipment",
          "Drill bits",
          "MWD/LWD",
          "Drilling fluids and its properties",
          "Well Control",
          "Drill string and design",
          "Solids control",
          "Casing",
          "Cementing",
          "Rig Safety",
          "Directional drilling",
          "Common hole problems",
          "Drilling life cycle",
        ],
      },
    ],
  },
  {
    title: "High Pressure, High Temperature Drilling Operations",
    type: "Technical",
    link: "/courses/technical/hpht-drilling-operations",
    image: Drill,
    alt: "cnc drilling machine",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "This course provides a comprehensive understanding of the well design and operational requirements for HPHT wells. It develops the principles of HPHT well engineering from rig selection through well control and HPHT considerations for casing design, drilling fluids and cement formulations.",
        ],
      },
      {
        heading: "Target Audience",
        list: [
          "Drilling rig senior personnel",
          "Well planners",
          "Drilling contractors",
          "Those in non-technical roles but with a requirement to understand the challenges of an HPHT environment.",
        ],
      },
      {
        heading: "Certificate",
        content: [
          "A certificate will be issued by 4mation Drilling Services upon successfully completion of the test at the end of the course.",
        ],
      },
      {
        heading: "Duration",
        content: ["2 Days"],
      },
      {
        heading: "Course content",
        list: [
          "Well Overview - Geology & Drilling",
          "Tripping core barrels in HPHT wells",
        ],
      },
    ],
  },
];
