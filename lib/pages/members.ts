import type { TeamMember } from "@/components/team/TeamMemberCard";
import { memberLinkedins } from "@/lib/memberLinkedins";

const roster = (name: string, role: string): TeamMember => ({
  name,
  role,
  linkedin: memberLinkedins[name],
  photoTba: true,
});

/** Current roster, sourced from “TTG Member Information - TTG Equity Analyst.csv”. */
export const memberDivisions = [
  {
    label: "Quant",
    members: [
      roster("Noor Dhillon", "Chief Quantitative Officer"),
      roster("Anirudh Iyengar", "Director of Quant"),
      roster("Sohan Shingade", "Quant Team Member"),
      roster("Divyansh Kanodia", "Quant Team Member"),
      roster("Matthieu Fuller", "Quant Team Member"),
      roster("Saksham Arora", "Quant Team Member"),
      roster("Kevin Lin", "Quant Team Member"),
    ],
  },
  {
    label: "Wealth Management",
    members: [
      roster("Alibek Tolegen", "Wealth Management Lead"),
      roster("Alper Kaan Oguzhan", "Wealth Management Lead"),
      roster("Micah Watson", "Wealth Management Lead"),
      roster("Sulthan Uways Dinova", "Wealth Management Lead"),
      roster("Aarzu Singh", "Wealth Management Intern"),
      roster("Clevon Ho", "Wealth Management Intern"),
      roster("Roma Patel", "Wealth Management Intern"),
      roster("Ruhan Karthik", "Wealth Management Intern"),
    ],
  },
  {
    label: "FP&A",
    members: [
      roster("Daniel Solichin", "FP&A Lead"),
      roster("Jacqueline Dao", "FP&A Lead"),
      roster("Thienan Bui", "FP&A Lead"),
      roster("Annie Zhang", "FP&A Intern"),
      roster("Elias Willmert", "FP&A Intern"),
      roster("Myra Chou", "FP&A Intern"),
      roster("Trey Torres", "FP&A Intern"),
      roster("Abby Walker", "FP&A Intern"),
      roster("Abhishai Ganta", "FP&A Intern"),
      roster("Aditya Mandloi", "FP&A Intern"),
      roster("Ashwin Kannan", "FP&A Intern"),
      roster("Shea Elmore", "FP&A Intern"),
    ],
  },
  {
    label: "Asset Management",
    members: [
      roster("Allison Xu", "Asset Management Intern"),
      roster("Clarisa Mutia", "Asset Management Intern"),
      roster("Daniel Castro", "Asset Management Intern"),
      roster("Jacob De Palma", "Asset Management Intern"),
      roster("Kaavya Verma", "Asset Management Intern"),
      roster("Miraj Bhalala", "Asset Management Intern"),
      roster("Ramon De La O", "Asset Management Intern"),
      roster("Sattvik Kurani", "Asset Management Intern"),
      roster("Sean Lee", "Asset Management Intern"),
    ],
  },
];
