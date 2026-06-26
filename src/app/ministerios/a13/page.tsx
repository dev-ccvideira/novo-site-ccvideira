import type { Metadata } from "next";
import { MinistryHero } from "../_components/MinistryLandingPage";

export const metadata: Metadata = {
  title: "A13",
  description: "Página institucional do ministério A13 da CCVideira."
};

export default function A13Page() {
  return (
    <>
      <MinistryHero name="A13" contentClassName="min-h-[360px] py-12 sm:min-h-[440px] sm:py-16" />

      <section className="h-[calc(100svh-96px)] min-h-[560px] overflow-hidden bg-black">
        <video
          src="/videos/a13.mp4"
          className="h-full w-full object-cover"
          autoPlay
          controls
          playsInline
          preload="metadata"
        />
      </section>
    </>
  );
}
