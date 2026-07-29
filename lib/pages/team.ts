import type { TeamMember } from "@/components/team/TeamMemberCard";
import { memberLinkedins } from "@/lib/memberLinkedins";

export const cSuite: TeamMember[] = [
  {
    name: "Maya Nayberg",
    role: "Executive Vice President",
    title: "Chief Operating Officer (COO)",
    bio: "Supports the President by overseeing Vice Presidents and maintaining organizational structure and operational efficiency.",
    image: "/images/board/maya.JPG",
    linkedin: memberLinkedins["Maya Nayberg"],
  },
  {
    name: "Anthony Volkov",
    role: "Chief Investment Officer",
    title: "Chief Investment Officer (CIO)",
    bio: "Manages TTG's investment portfolio and leads financial education workshops.",
    image: "/images/board/anthony.JPG",
    linkedin: memberLinkedins["Anthony Volkov"],
  },
  {
    name: "Noor Dhillon",
    role: "Vice President of Quantitative",
    title: "Chief Quantitative Officer (CQO)",
    bio: "Oversees quantitative strategy development, algorithm performance, and data integrity.",
    image: "/images/board/noor.JPEG",
    linkedin: memberLinkedins["Noor Dhillon"],
  },
  {
    name: "Titus Cheng",
    role: "Vice President of Product",
    title: "Chief Product Officer (CPO)",
    bio: "Directs AI-driven projects and technology initiatives to provide members with hands-on technical experience.",
    image: "/images/board/titus.JPG",
    linkedin: memberLinkedins["Titus Cheng"],
  },
  {
    name: "Jacqueline Dao",
    role: "Vice President of External Relations",
    title: "Chief External Relations Officer (CXO)",
    bio: "Leads recruitment, onboarding, and social programming to strengthen community engagement.",
    image: "/images/board/jackie.JPG",
    linkedin: memberLinkedins["Jacqueline Dao"],
  },
];

export const boardMembers: TeamMember[] = [
  {
    name: "Micah Watson",
    role: "VP of Asset Management",
    bio: "Oversees the day-to-day operations of the Asset Management department, keeping research teams on track and ensuring all coverage work meets TTG's standards.",
    image: "/images/board/micah.JPG",
    linkedin: memberLinkedins["Micah Watson"],
  },
  {
    name: "Prisca Lee",
    role: "VP of Activities & Social Media",
    bio: "Plans and organizes club socials and community events while managing TTG's social media presence and content across all platforms.",
    image: "/images/board/prisca.JPG",
    linkedin: memberLinkedins["Prisca Lee"],
  },
  {
    name: "Shiyo Ohashi",
    role: "Director of Marketing Design",
    bio: "Creates all visual designs for TTG's social media posts, marketing materials, and brand content across every platform.",
    image: "/images/board/shiyo.JPG",
    linkedin: memberLinkedins["Shiyo Ohashi"],
  },
  {
    name: "Anirudh Iyengar",
    role: "Director of Quant",
    bio: "Leads the Quant Division's strategy, research initiatives, and competition efforts while coordinating with executive leadership.",
    image: "/images/board/anirudh.jpg",
    linkedin: memberLinkedins["Anirudh Iyengar"],
  },
];
