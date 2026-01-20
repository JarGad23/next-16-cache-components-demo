"use client";

import { revalidateCache } from "@/actions/revalidate";
import { useTransition } from "react";

export function RevalidateButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => revalidateCache())}
      disabled={isPending}
      className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {isPending ? "Odświeżanie..." : "♻️ Wymuś Revalidację"}
    </button>
  );
}
