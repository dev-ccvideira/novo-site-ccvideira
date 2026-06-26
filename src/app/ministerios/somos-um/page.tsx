import type { Metadata } from "next";
import { MinistryLandingPage } from "../_components/MinistryLandingPage";

export const metadata: Metadata = {
  title: "Somos Um",
  description: "Página institucional do ministério Somos Um da CCVideira."
};

export default function SomosUmPage() {
  return <MinistryLandingPage name="Somos Um" />;
}
