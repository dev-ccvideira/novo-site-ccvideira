"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../sanity.config";

let consoleFilterInstalled = false;

function installSanityConsoleFilter() {
  if (consoleFilterInstalled || typeof window === "undefined") return;

  const originalError = console.error;

  console.error = (...args: Parameters<typeof console.error>) => {
    const message = args.map((arg) => String(arg)).join(" ");

    if (
      message.includes("React does not recognize") &&
      message.includes("disableTransition") &&
      message.includes("DOM element")
    ) {
      return;
    }

    originalError(...args);
  };

  consoleFilterInstalled = true;
}

export function AdminStudio() {
  installSanityConsoleFilter();

  return <NextStudio config={config} />;
}
