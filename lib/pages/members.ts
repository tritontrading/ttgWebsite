import type { TeamMember } from "@/components/team/TeamMemberCard";

function createPlaceholderMembers(
  division: string,
  count: number,
  startIndex: number,
): TeamMember[] {
  return Array.from({ length: count }, (_, index) => ({
    name: `Member ${String(startIndex + index).padStart(2, "0")}`,
    role: `${division} Member`,
    photoTba: true,
  }));
}

/** Placeholder roster — replace with real names as roster is finalized. */
export const memberDivisions = [
  {
    label: "Quant",
    members: createPlaceholderMembers("Quant", 7, 1),
  },
  {
    label: "Asset Management",
    members: createPlaceholderMembers("Asset Management", 7, 8),
  },
  {
    label: "FP&A",
    members: createPlaceholderMembers("FP&A", 6, 15),
  },
] as const;

export const advisors: TeamMember[] = [
  {
    name: "Advisor 01",
    role: "Faculty Advisor",
    photoTba: true,
  },
  {
    name: "Advisor 02",
    role: "Industry Advisor",
    photoTba: true,
  },
  {
    name: "Advisor 03",
    role: "Industry Advisor",
    photoTba: true,
  },
];
