import type { TeamMember } from "@/components/team/TeamMemberCard";
import { memberLinkedins } from "@/lib/memberLinkedins";

export const cSuite: TeamMember[] = [
  {
    name: "Maya Nayberg",
    role: "Executive Vice President",
    title: "Chief Operating Officer (COO)",
    joined: "Founder",
    bio: "Supports the President by overseeing Vice Presidents and maintaining organizational structure and operational efficiency.",
    image: "/images/board/maya.JPG",
    linkedin: memberLinkedins["Maya Nayberg"],
  },
  {
    name: "Anthony Volkov",
    role: "Chief Investment Officer",
    title: "Chief Investment Officer (CIO)",
    joined: "Founder",
    bio: "Manages TTG's investment portfolio and leads financial education workshops.",
    image: "/images/board/anthony.JPG",
    linkedin: memberLinkedins["Anthony Volkov"],
  },
  {
    name: "Noor Dhillon",
    role: "Vice President of Quantitative",
    title: "Chief Quantitative Officer (CQO)",
    joined: "Founder",
    bio: "Oversees quantitative strategy development, algorithm performance, and data integrity.",
    image: "/images/board/noor.JPEG",
    linkedin: memberLinkedins["Noor Dhillon"],
  },
  {
    name: "Jacqueline Dao",
    role: "Vice President of External Relations",
    title: "Chief External Relations Officer (CXO)",
    joined: "Fall 2026",
    bio: "Leads recruitment, onboarding, and social programming to strengthen community engagement.",
    image: "/images/board/jackie.JPG",
    linkedin: memberLinkedins["Jacqueline Dao"],
  },
];
