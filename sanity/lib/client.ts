import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // `useCdn: false` guarantees you get the freshest data on every request —
  // important right after publishing a new post from the /studio editor.
  useCdn: false,
});
