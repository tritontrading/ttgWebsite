import { permanentRedirect } from "next/navigation";

export default function AdvisoryPage() {
  permanentRedirect("/about#financial-planning-analysis");
}
