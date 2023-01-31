import { type Course } from "@/course";

import Scheduling from "./assets/scheduling.jpg";
import Rail from "./assets/rail.jpg";
import Crystal from "./assets/crystal.jpg";
import Welder from "./assets/welder.jpg";

export const projectManagement: Array<Course> = [
  {
    title: "Risk management for oil and gas projects",
    type: "Project Management",
    link: "/courses/project-management/risk-management-for-oil-and-gas-projects",
    image: Welder,
    alt: "Max Larochelle - unsplash",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "Due to the increased pressure to deliver projects on time, within budget and with the agreed components, the need to identify, manage and control the project-based risks becomes central to success. Project Managers need to use tried and accepted techniques for managing identified risks and have access to practical strategies for dealing with issues as they emerge.",
          "This course combines instructor led sessions and experiential case studies to enable participants leverage on industry knowledge and experience for efficient knowledge transfer.",
        ],
      },
      {
        heading: "Target Audience",
        list: [
          "Project Management Team members",
          "Operations Managers",
          "Project Managers",
          "Oil and Gas Enterprise Architects",
          "Asset Managers",
          "Maintenance Managers",
          "Maintenance & Reliability Engineers",
          "Technical managers & supervisors",
          "Board level executives and non-executives",
          "Consultants in Project, Asset, Maintenance and Risk Management",
        ],
      },
      {
        heading: "Certificate",
        content: [
          <>
            <a
              href="https://aztechtraining.com/"
              target="_blank"
              className="font-medium text-[crimson]"
            >
              AZTech
            </a>{" "}
            Certificate of Completion for delegates who attend and complete the
            training course
          </>,
          <>
            The applicable{" "}
            <em className="italic">
              PMI Professional Development Units / Contact Hours
            </em>{" "}
            will be reflected in the Certificate of Completion
          </>,
        ],
      },
      {
        heading: "Duration",
        content: ["1 Day"],
      },
      {
        heading: "Course content",
        list: [
          "Introduction to organizational Risk",
          "The Risk Management Process Wheel & Identifying risk",
          "Risk Analysis",
          "Risk Responses & Managing Risks",
          "Reporting Risk Management Outcome",
        ],
      },
    ],
  },
  {
    title: "Expert: Project management in oil and gas operations",
    type: "Project Management",
    link: "/courses/project-management/project-management-in-oil-and-gas-operations",
    image: Crystal,
    alt: "wingsofcompassion - pixabay",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "The main objective of this advance course is to understand how to integrate project management into managing oil and gas operations.",
          "This course applies project management concepts to the daily running operations of oil and gas companies involved in numerous mini projects albeit in a non-projectized environment.",
          "This course is designed for an array of stakeholders in oil and gas operations who are involved in project management.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "Project Administrators (Project Managers, Rig Managers, Management Accountants)",
          "Operation Engineers",
          "Project Sponsor",
          "Performance Managers",
        ],
      },
      {
        heading: "Certificate",
        content: [
          "4mation Drilling Certificate of participation will be issued to successful participants upon completion of the course",
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
            subtitle: "Project Contract Management",
            list: [
              "Authoring Contract Terms",
              "Maintaining Contracts and Terms Library",
            ],
          },
          {
            subtitle: "Defining and Managing Financial Projects",
            list: [
              "Project Definition & Project Plan Task",
              "Project Budgets and Forecasts",
            ],
          },
          {
            subtitle: "Project Costing",
            list: [
              "Capturing Project Costs",
              "Project Cost Transaction and Processing",
              "Project Overhead Cost Management",
              "Project Cost Adjustment & Project Rate Scheduling",
              "Project Cost Allocation",
              "Capital Asset Cost Management",
            ],
          },
          {
            subtitle: "Project Execution Management",
            list: [
              "Manage Project Requirement",
              "Project Plan Tasks and Schedule",
              "Project Staffing Plan and Resources",
              "Project Deliverables",
              "Execute Project Task and Deliverables",
              "Track Project Progress",
              "Project Performance & Project Issue Management",
              "Resource Utilization",
            ],
          },
          {
            subtitle: "Project Performance Reporting",
          },
          {
            subtitle: "Project Revenue and Billing",
            list: [
              "Project Contract Billing & Project Contract Revenue",
              "Project Rate Schedules",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Intermediate: Scheduling for oil and gas projects",
    type: "Project Management",
    link: "/courses/project-management/scheduling-for-oil-and-gas-projects",
    image: Scheduling,
    alt: "ha11ok - pixabay",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "The main objective of this short course is to understand scheduling for Oil and gas Projects with a focus on how to use Microsoft project to schedule project tasks in the Oil and gas industry context.",
          "This course is designed to help Project Managers, schedulers and project sponsors understand project management techniques for managing Oil and Gas projects using Microsoft Project.",
          "Course delivery combines instructor led and practical sessions.",
        ],
      },
      {
        heading: "Target Audience",
        list: [
          "Project Managers",
          "Schedulers and Project Sponsors",
          "Project/Operations Engineers",
          "other project team members",
        ],
      },
      {
        heading: "Certificate",
        content: [
          "4mation Drilling Certificate of participation will be issued to successful participants upon completion of the course.",
        ],
      },
      {
        heading: "Duration",
        content: ["3 Days"],
      },
      {
        heading: "Course content",
        list: [
          "Setup a MS Project Environment",
          "Create a project schedule and manage different type of tasks on MS project",
          "Allocate project resources and work with the resource sheet",
          "Create project reports",
          "Understand the CPM (Critical Path Method)",
          "Gantt chart and network diagrams",
          "Relationship between scheduling and costing",
          "Relationship between risks, Issues management and scheduling using MS Project",
        ],
      },
    ],
  },
  {
    title: "Beginner: Certified Associate in Project Management",
    type: "Project Management",
    link: "/courses/project-management/certified-associate-in-project-management",
    image: Rail,
    alt: "Licht-aus - pixabay",
    curriculum: [
      {
        heading: "About this course",
        content: [
          "The objective of this course is to introduce participants to the concept of project  Management, Certified Associate in Project Management helps demonstrate the understanding of the fundamental knowledge, terminology and processes of effective project management.",
          "At the end of this course, participants will be able to understand the basic principles of project management, how to organize projects, manage resources and manage stakeholders in various types of organizations.",
          "This course is instructor led and includes workshop sessions and an exit test.",
        ],
      },
      {
        heading: "Target Audience",
        content: [
          "Project Managers",
          "Schedulers and Project Sponsors",
          "Operations Engineers",
          "Other project team members",
        ],
      },
      {
        heading: "Certificate",
        content: [
          "4mation Drilling Certificate of participation will be issued to successful participants upon completion of the course.",
        ],
      },
      {
        heading: "Duration",
        content: ["3 Days"],
      },
      {
        heading: "Course content",
        list: [
          "Introduction to Project Management",
          "Project Environment",
          "Role of the Project Manager",
          "Project Integration Management",
          "Project Scope Management",
          "Project Schedule Management",
          "Project Cost Management",
          "Project Quality Management",
          "Project Resource Management",
          "Project Communication Management",
          "Project Risk Management",
          "Project Procurement Management",
          "Project Stakeholder Management",
        ],
      },
    ],
  },
];
