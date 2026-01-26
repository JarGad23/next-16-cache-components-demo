import { ExternalAPIGood } from "@/components/external-api-good";
import { RevenueGood } from "@/components/revenue-good";

const CachedPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <RevenueGood />
      <ExternalAPIGood />
    </div>
  );
};

export default CachedPage;
