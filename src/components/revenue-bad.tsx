import { getRevenueSlow } from "@/actions/database";
import { Suspense } from "react";
import { RevenueSkeleton } from "./revenue-skeleton";

async function SlowData() {
  const data = await getRevenueSlow();

  return (
    <div className="space-y-2 animate-in fade-in duration-500">
      <div className="text-4xl font-mono font-bold text-gray-100">
        {data.amount.toLocaleString("pl-PL")} PLN
      </div>
      <div className="flex flex-col gap-1 text-xs text-gray-500 font-mono border-t border-red-900/30 pt-2 mt-2">
        <div className="flex justify-between">
          <span>Źródło:</span>
          <span className="text-red-400 font-bold">{data.source}</span>
        </div>
        <div className="flex justify-between">
          <span>Wygenerowano:</span>
          <span>{data.generatedAt}</span>
        </div>
      </div>
    </div>
  );
}

export const RevenueBad = () => {
  return (
    <div className="p-6 border border-red-800/50 bg-red-900/10 rounded-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] px-2 py-1 uppercase font-bold tracking-wider">
        Realtime DB
      </div>
      <h3 className="text-xl font-bold text-red-400 mb-2">Bez Cache</h3>
      <p className="text-sm text-gray-400 mb-6 min-h-10">
        Symulacja ciężkiego zapytania SQL. Każde odświeżenie blokuje
        renderowanie tej części.
      </p>

      <Suspense
        fallback={
          <RevenueSkeleton color="red" label="Mielenie danych (2s)..." />
        }
      >
        <SlowData />
      </Suspense>
    </div>
  );
};
