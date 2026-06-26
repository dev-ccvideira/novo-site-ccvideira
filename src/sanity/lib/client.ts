import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./env";

export const sanityEnabled = Boolean(projectId && projectId !== "placeholder");

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn,
  perspective: "published"
});

export const writeClient = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN
});

export async function sanityFetch<T>(query: string, params = {}, fallback: T): Promise<T> {
  if (!sanityEnabled) return fallback;

  try {
    const data = await client.fetch<T>(query, params, { next: { revalidate: 60 } });
    return data || fallback;
  } catch {
    return fallback;
  }
}
