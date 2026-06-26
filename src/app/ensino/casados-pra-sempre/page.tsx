import type { Metadata } from "next";
import { TeachingTemplate, teachingPages } from "../_components/TeachingPage";

const page = teachingPages[2];

export const metadata: Metadata = {
  title: page.title,
  description: page.description
};

export default function MarriedForeverPage() {
  return <TeachingTemplate title={page.title} audience={page.audience} description={page.description} />;
}
