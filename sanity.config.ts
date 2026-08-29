/**
 * This config powers the editor UI at /studio on your own site.
 * Learn more: https://www.sanity.io/docs/configuration
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "patentio-blog",
  title: "Patentio Blog",

  projectId,
  dataset,

  schema,

  plugins: [
    structureTool(),
    // Vision lets you run GROQ queries inside the Studio — handy for debugging,
    // safe to remove later if you never use it.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
