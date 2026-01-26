import { getExchangeRatesRealtime } from "@/actions/external-api";
import { Suspense } from "react";

export const ExternalAPIBad = () => {
  return (
    <div className="bg-red-900/20 border border-red-800/50 p-6 rounded-lg">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-red-400">Bez Cache (Realtime Fetch)</h3>
        <span className="text-xs bg-red-900 text-red-200 px-2 py-1 rounded">
          API HIT +$$$
        </span>
      </div>
      <Suspense
        fallback={
          <div className="text-sm text-gray-500">Connecting to API...</div>
        }
      >
        <ApiResult fetcher={getExchangeRatesRealtime} />
      </Suspense>
    </div>
  );
};

async function ApiResult({
  fetcher,
}: {
  fetcher: () => Promise<{ rate: number; timestamp: number }>;
}) {
  const data = await fetcher();
  return (
    <div className="font-mono">
      <div className="text-3xl mb-2">{data.rate.toFixed(4)} USD/PLN</div>
      <div className="text-xs text-gray-500">
        Updated: {new Date(data.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
}
