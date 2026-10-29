import { permanentRedirect } from "next/navigation";

export default function QuantPage() {
  permanentRedirect("/about#quantitative-finance");
}
