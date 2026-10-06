import type { TeamMember } from "@/components/team/TeamMemberCard";
import { memberLinkedins } from "@/lib/memberLinkedins";

const roster = (name: string, role: string, image?: string): TeamMember => ({
  name,
  role,
  image,
  linkedin: memberLinkedins[name],
});

export const boardDivisions = [
  {
    id: "executive-board",
    label: "Executive Board",
    members: [
      roster("Shaurya Prakaash", "Founder & Chief Executive Officer", "/images/board/shaurya.JPG"),
      roster("Anthony Cardoza", "Executive Vice President / Co-Founder"),
      roster("Maya Nayberg", "Chief Operating Officer / Founding Team", "/images/board/maya.JPG"),
      roster("Aarzu Singh", "Chief Financial Officer"),
    ],
  },
  {
    id: "departments",
    label: "Departments",
    members: [
      roster("Noor Dhillon", "VP of Quant", "/images/board/noor.JPEG"),
      roster("Anirudh Iyengar", "Director of Quant", "/images/board/anirudh.jpg"),
      roster("Sattvik Kurani", "VP of Asset Management"),
      roster("Alibek Tolegen", "VP of Asset Management"),
    ],
  },
  {
    id: "operations",
    label: "Operations",
    members: [
      roster("Matthieu Fuller", "VP of Technology"),
      roster("Shiyo Ohashi", "VP of Marketing", "/images/board/shiyo.JPG"),
      roster("Prisca Lee", "VP of Activities & Events", "/images/board/prisca.JPG"),
      roster("Jacqueline Dao", "VP of External Relations", "/images/board/jackie.JPG"),
      roster("Daniel Solichin", "VP of FP&A"),
    ],
  },
];

export const memberDivisions = [
  {
    id: "asset-management",
    label: "Asset Management",
    members: [
      roster("Allison Xu", "Equity Analyst"),
      roster("Alper Kaan Oguzhan", "Equity Analyst"),
      roster("Clarisa Mutia", "Equity Analyst"),
      roster("Clevon Ho", "Equity Analyst"),
      roster("Elias Wilmert", "Equity Analyst"),
      roster("Jacob De Palma", "Equity Analyst"),
      roster("Micah Watson", "Equity Analyst"),
      roster("Ramon De La O", "Equity Analyst"),
      roster("Roma Patel", "Equity Analyst"),
      roster("Ruhan Karthik", "Equity Analyst"),
      roster("Sattvik Kurani", "Equity Analyst"),
      roster("Sean Lee", "Equity Analyst"),
      roster("Sulthan Uways Dinova", "Equity Analyst"),
    ],
  },
  {
    id: "quant",
    label: "Quant",
    members: [
      roster("Anirudh Iyengar", "Director of Quant"),
      roster("Divyansh Kanodia", "Quant Analyst"),
      roster("Gilad Segal", "Quant Analyst"),
      roster("Kevin Lin", "Quant Analyst"),
      roster("Saksham Arora", "Quant Analyst"),
      roster("Sohan Shingade", "Quant Analyst"),
    ],
  },
  {
    id: "fpa",
    label: "Financial Planning & Analysis",
    members: [
      roster("Abhishai Ganta", "FP&A Analyst"),
      roster("Aditya Mandloi", "FP&A Analyst"),
      roster("Daniel Castro", "FP&A Analyst"),
      roster("Kaavya Verma", "FP&A Analyst"),
      roster("Miraj Bhalala", "FP&A Analyst"),
      roster("Myra Chou", "FP&A Analyst"),
      roster("Shea Elmore", "FP&A Analyst"),
      roster("Trey Torres", "FP&A Analyst"),
    ],
  },
];
