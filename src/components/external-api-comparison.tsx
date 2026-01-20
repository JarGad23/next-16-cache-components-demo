import {
  getExchangeRatesCached,
  getExchangeRatesRealtime,
} from "@/actions/external-api";
import { Suspense } from "react";

export const ExternalApiComparison = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <div className="bg-green-900/20 border border-green-800/50 p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <h3 className="font-bold text-green-400">
            Next.js &quot;use cache&quot;
          </h3>
          <span className="text-xs bg-green-900 text-green-200 px-2 py-1 rounded">
            CACHED (Free)
          </span>
        </div>
        <Suspense
          fallback={
            <div className="text-sm text-gray-500">Reading memory...</div>
          }
        >
          <ApiResult fetcher={getExchangeRatesCached} />
        </Suspense>
      </div>
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
