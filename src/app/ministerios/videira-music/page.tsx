import type { Metadata } from "next";
import { MinistryLandingPage } from "../_components/MinistryLandingPage";

export const metadata: Metadata = {
  title: "Videira Music",
  description: "Página institucional do ministério Videira Music da CCVideira."
};

export default function VideiraMusicPage() {
  return <MinistryLandingPage name="Videira Music" />;
}
