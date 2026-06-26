import type { Metadata } from "next";
import { ConnectTemplate, connectPages } from "../_components/ConnectPage";

const page = connectPages[2];

export const metadata: Metadata = {
  title: page.title,
  description: page.description
};

export default function PodcastPage() {
  return <ConnectTemplate title={page.title} description={page.description} sections={page.sections} />;
}
