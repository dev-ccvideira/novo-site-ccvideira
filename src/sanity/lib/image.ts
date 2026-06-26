import imageUrlBuilder from "@sanity/image-url";
import { client, sanityEnabled } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: unknown) {
  if (!sanityEnabled || !source) return undefined;
  return builder.image(source);
}
