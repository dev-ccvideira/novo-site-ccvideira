import type { Metadata } from "next";
import { TeachingTemplate, teachingPages } from "../_components/TeachingPage";

const page = teachingPages[0];

export const metadata: Metadata = {
  title: page.title,
  description: page.description
};

export default function FundamentalsPage() {
  return <TeachingTemplate title={page.title} audience={page.audience} description={page.description} />;
}
