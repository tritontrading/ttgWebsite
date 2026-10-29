import { permanentRedirect } from "next/navigation";

export default function AssetManagementPage() {
  permanentRedirect("/about#asset-management");
}
