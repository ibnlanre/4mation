import { type Course } from "@/course";

import DroppedObject from "./assets/dropped-object.jpg";
import OperationalCourse from "./assets/operational-course.jpg";
import DrillingExperts from "./assets/drilling-experts.jpg";

export const hse: Array<Course> = [
  {
    title:
      "Institute of Occupational Safety and Health (IOSH) Managing Safely in Oil and Gas Drilling",
    type: "HSE",
    link: "/courses/hse/iosh-managing-safely-in-drilling",
    image: DrillingExperts,
    alt: "HHakim - getty-images",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "The Institute of Occupational Safety and Health (IOSH) is UK's leading membership organization for safety and health professionals and a major provider of health and safety training. The IOSH Managing Safely in Oil and Gas Drilling provide the essential knowledge and understanding of how to manage health & safety responsibilities in Oil and Gas drilling operations.",
          "It addresses the challenges faced by line managers in drilling operations and proffers solutions through the understanding of HSE management principles as they relate to day to day drilling activities. This course is expected to improve the safety awareness culture in any organization through improved leadership involvement in HSE and an understanding that HSE is a line management responsibility.",
          "The administration of this course includes both classroom and practical sessions.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "This IOSH Managing Safely in Drilling course is designed for personnel in a management or supervisory role, in the oil and gas drilling industry.",
          "This include roles like the following:",
          [
            "Offshore Installation Manager (OIM)",
            "Tool pusher",
            "Assistant Driller",
            "Driller",
            "Chief Electrician",
            "Chief Mechanic",
            "Bargemaster",
          ],
        ],
      },
      {
        heading: "Certification",
        content: [
          <>
            An{" "}
            <a
              href="https://iosh.com/"
              className="font-medium text-[crimson]"
              target="_blank"
              >
              IOSH(UK)
            </a>{" "}
            certificate will be issued at the end of the course.
          </>,
        ],
      },
      {
        heading: "Duration",
        content: ["3 Days."],
      },
      {
        heading: "Course content",
        list: [
          "Introducing managing safely in Oil and Gas Drilling operations",
          "HSE responsibilities of the supervisory personnel",
          "Identifying hazards, risk assessment and control",
          "Verification and validation",
          "Investigating accidents and incidents",
          "Protecting our environment",
          "Measuring HSE performance",
          "Management of Change",
          "Human factors",
        ],
      },
    ],
  },
  {
    title: "Operational HSE leadership course",
    type: "HSE",
    link: "/courses/hse/operational-hse-leadership-course",
    image: OperationalCourse,
    alt: "Leo Fosdal - unsplash",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "This course helps to address the reduced participation of women as health and safety professionals. The training involves learning the basics of health, safety and environment, progressing to HSE levels 1, 2 and 3, before proceeding to the NEBOSH IGC examination. It provides ample opportunity for participants to learn on the job, on a rig as a trainee HSE personnel. Participants will also gain experience off the field, supervising HSE in an oil and gas operations Warehouse.",
          "The administration of this courses includes both classroom and practical sessions which includes rig safety trainee internships.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "This course is designed for women looking to venture into the HSE field and have a first-degree qualification as a minimum.",
          "There is no role restriction for this course",
        ],
      },
      {
        heading: "Certification",
        content: [
          "Upon successful completion of the course, a combination of certificates from 4mation Drilling, British International Safety Organization and NEBOSH will be issued.",
        ],
      },
      {
        heading: "Duration",
        content: ["3 Months"],
      },
      {
        heading: "Course content",
        list: [
          "Introduction to Health and Safety in the workplace",
          "Rig Safety",
          "International and Local Health and Safety legislation and policies",
          "Understanding Type of Hazards and control measures",
          "Permit to Work",
          "Lock out Tag Out Work Procedures",
          "Personal Protective Equipment (PPE)",
          "Accident Investigation and Emergency Response",
          "Crisis Management and Security Awareness",
          "Environmental Awareness",
          "Basic First Aid and applications",
          "Fire Safety applications",
          "Management of Health & Safety",
          "Risk Assessment",
        ],
      },
    ],
  },
  {
    title: "Dropped Object Prevention for Field Champions",
    type: "HSE",
    link: "/courses/hse/dropped-object-prevention-for-field-champions",
    image: DroppedObject,
    alt: "Ricardo Gomez Angel - unsplash",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "Objects dropped from height can result in severe personal injuries, equipment damage and tool loss, yet these hazards are often overlooked in planning for workplace safety. This course gives guidelines to aid the implementation of Drops prevention solutions in compliance with the Dropped Object Prevention Scheme and recommended practices. Attendees will develop the necessary skills and knowledge base to be deemed a Dropped Objects focal Person/field champion.",
          "This course will help participants to carry out basic DROPS inspections and assessments for continued improvement in order to fulfill the requirements of a safe DROPS program.",
          "Course delivery combines classroom and practical sessions to ensure maximum participation.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "This course is for DROPS focal persons/field champions who have a responsibility to communicate and facilitate implementation of the Dropped Object Prevention  Scheme.",
          "This includes roles like the following:",
          [
            "OIM",
            "Bargemaster",
            "Derrickman",
            "Rig HSE and Training coordinators (RSTC)",
            "Toolpusher",
          ],
        ],
      },
      {
        heading: "Certification",
        content: [
          "4mation Drilling Certificate of participation will be issued to successful  participants upon completion of this course.",
        ],
      },
      {
        heading: "Duration",
        content: ["1 Day"],
      },
      {
        heading: "Course content",
        content: [
          "Elements of a Dropped Objects Prevention Scheme",
          "Drops Gap analysis",
          "Drops risk management",
        ],
      },
    ],
  },
];
