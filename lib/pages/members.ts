import type { TeamMember } from "@/components/team/TeamMemberCard";
import { memberLinkedins } from "@/lib/memberLinkedins";

const roster = (name: string, role: string): TeamMember => ({
  name,
  role,
  linkedin: memberLinkedins[name],
  photoTba: true,
});

export const boardDivisions = [
  {
    id: "c-suite",
    label: "C-Suite",
    members: [
      roster("Shaurya Prakaash", "Chief Executive Officer"),
      roster("Anthony Cardoza", "Executive Vice President / Co-Founder"),
      roster("Maya Nayberg", "Chief Operating Officer"),
      roster("Anthony Volkov", "Chief Investment Officer"),
      roster("Aarzu Singh", "Chief Financial Officer"),
      roster("Noor Dhillon", "Chief Quantitative Officer"),
      roster("Jacqueline Dao", "Chief External Relations Officer"),
      roster("Matthieu Fuller", "Chief Technology Officer"),
    ],
  },
  {
    id: "vps",
    label: "Vice Presidents",
    members: [
      roster("Alibek Tolegen", "VP of Asset Management"),
      roster("Prisca Lee", "VP of Activities"),
      roster("Shiyo Ohashi", "VP of Marketing"),
    ],
  },
  {
    id: "other-board",
    label: "Other Board Members",
    members: [roster("Daniel Solichin", "FP&A Analyst")],
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
