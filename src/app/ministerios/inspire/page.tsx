import type { Metadata } from "next";
import { MinistryLandingPage } from "../_components/MinistryLandingPage";

export const metadata: Metadata = {
  title: "Inspire",
  description: "Página institucional do ministério Inspire da CCVideira."
};

export default function InspirePage() {
  return <MinistryLandingPage name="Inspire" />;
}
