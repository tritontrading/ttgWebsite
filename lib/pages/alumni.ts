import type { TeamMember } from "@/components/team/TeamMemberCard";
import { memberLinkedins } from "@/lib/memberLinkedins";

/** Alumni roster, sourced from alumni.csv. */
export const alumniMembers: TeamMember[] = [
  { name: "Michael Valdivia", role: "Internship · San Pasqual Fiduciary Trust", linkedin: memberLinkedins["Michael Valdivia"], photoTba: true },
  { name: "Naliya Montebon", role: "Class of 2026", linkedin: memberLinkedins["Naliya Montebon"], photoTba: true },
  { name: "Hudson Betts", role: "Class of 2026", linkedin: memberLinkedins["Hudson Betts"], photoTba: true },
  { name: "Ryan Hayden", role: "Class of 2026", linkedin: memberLinkedins["Ryan Hayden"], photoTba: true },
  { name: "Shaurya Prakaash", role: "Class of 2026", linkedin: memberLinkedins["Shaurya Prakaash"], photoTba: true },
  { name: "Srihan Basvapatri", role: "Machine Learning Engineer", linkedin: memberLinkedins["Srihan Basvapatri"], photoTba: true },
  { name: "Gilad Segal", role: "TTG Alum", linkedin: memberLinkedins["Gilad Segal"], photoTba: true },
];
