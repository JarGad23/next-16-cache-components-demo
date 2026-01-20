"use server";
import { revalidateTag } from "next/cache";

export async function revalidateCache() {
  revalidateTag("revenue-report", "max");
}
