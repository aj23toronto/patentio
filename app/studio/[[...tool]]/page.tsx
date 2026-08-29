"use client";

/**
 * This route is the embedded Sanity Studio — your writing/editing dashboard.
 * Visit yoursite.com/studio, log in with your Sanity account, and you can
 * create and publish blog posts without touching any code.
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
