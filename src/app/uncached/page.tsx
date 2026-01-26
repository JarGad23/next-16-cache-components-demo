import { ExternalAPIBad } from "@/components/external-api-bad";
import { RevenueBad } from "@/components/revenue-bad";

const UncachedPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <RevenueBad />
      <ExternalAPIBad />
    </div>
  );
};

export default UncachedPage;
