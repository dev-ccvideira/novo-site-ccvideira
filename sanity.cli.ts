import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5p1vu87n",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
  }
});
