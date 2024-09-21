import { getList } from "../lib/microcms/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const data = await getList();
  return data
};

export const prerender = true;
