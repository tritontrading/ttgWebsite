import type { TeamMember } from "@/components/team/TeamMemberCard";
import { memberLinkedins } from "@/lib/memberLinkedins";

/** Alumni roster, sourced from alumni.csv. */
export const alumniMembers: TeamMember[] = [
  { name: "Annie Zhang", role: "FP&A Intern", linkedin: memberLinkedins["Annie Zhang"], photoTba: true },
  { name: "Thienan Bui", role: "FP&A Lead", linkedin: memberLinkedins["Thienan Bui"], photoTba: true },
  { name: "Titus Cheng", role: "Chief Product Officer", linkedin: memberLinkedins["Titus Cheng"], image: "/images/board/titus.JPG" },
  { name: "Michael Valdivia", role: "Internship · San Pasqual Fiduciary Trust", linkedin: memberLinkedins["Michael Valdivia"], image: "/images/board/michael.JPG" },
  { name: "Naliya Montebon", role: "Class of 2026", linkedin: memberLinkedins["Naliya Montebon"], photoTba: true },
  { name: "Hudson Betts", role: "Class of 2026", linkedin: memberLinkedins["Hudson Betts"], photoTba: true },
  { name: "Ryan Hayden", role: "Class of 2026", linkedin: memberLinkedins["Ryan Hayden"], photoTba: true },
  { name: "Srihan Basvapatri", role: "Machine Learning Engineer", linkedin: memberLinkedins["Srihan Basvapatri"], photoTba: true },
  { name: "Gilad Segal", role: "TTG Alum", linkedin: memberLinkedins["Gilad Segal"], photoTba: true },
];
