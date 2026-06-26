import type { Metadata } from "next";
import { TeachingTemplate, teachingPages } from "../_components/TeachingPage";

const page = teachingPages[3];

export const metadata: Metadata = {
  title: page.title,
  description: page.description
};

export default function ParentsForLifePage() {
  return <TeachingTemplate title={page.title} audience={page.audience} description={page.description} />;
}
