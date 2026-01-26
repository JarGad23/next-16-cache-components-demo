import { getRevenueCached, getRevenueSlow } from "@/actions/database";
import { Suspense } from "react";
import { RevenueSkeleton } from "./revenue-skeleton";

export const RevenueComparison = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <div className="p-6 border border-green-800/50 bg-green-900/10 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] px-2 py-1 uppercase font-bold tracking-wider">
          &quot;use cache&quot;
        </div>
        <h3 className="text-xl font-bold text-green-400 mb-2">Next.js Cache</h3>
        <p className="text-sm text-gray-400 mb-6 min-h-10">
          Dane pobrane raz, serwowane z pamięci. Zero obciążenia bazy przez 1h.
        </p>

        <Suspense
          fallback={
            <RevenueSkeleton color="green" label="Szukanie w cache..." />
          }
        >
          <CachedData />
        </Suspense>
      </div>
    </div>
  );
};

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

async function CachedData() {
  const data = await getRevenueCached();

  return (
    <div className="space-y-2 animate-in fade-in duration-500">
      <div className="text-4xl font-mono font-bold text-gray-100">
        {data.amount.toLocaleString("pl-PL")} PLN
      </div>
      <div className="flex flex-col gap-1 text-xs text-gray-500 font-mono border-t border-green-900/30 pt-2 mt-2">
        <div className="flex justify-between">
          <span>Źródło:</span>
          <span className="text-green-400 font-bold">{data.source}</span>
        </div>
        <div className="flex justify-between">
          <span>Wygenerowano:</span>
          <span>{data.generatedAt}</span>
        </div>
      </div>
    </div>
  );
}
