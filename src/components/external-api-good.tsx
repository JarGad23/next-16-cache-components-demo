import { getExchangeRatesCached } from "@/actions/external-api";
import { Suspense } from "react";

export const ExternalAPIGood = () => {
  return (
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
