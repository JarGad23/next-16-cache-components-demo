import { ExternalApiComparison } from "@/components/external-api-comparison";
import { RevenueComparison } from "@/components/revenue-comparison";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col sm:flex-row gap-y-4 gap-x-4">
        <Link
          href="/cached"
          className="flex-1 bg-emerald-500 py-8 px-3 rounded-md text-lg text-center"
        >
          Go to cached page
        </Link>
        <Link
          href="/uncached"
          className="flex-1 bg-rose-500 py-8 px-3 rounded-md text-lg text-center"
        >
          Go to un cached page
        </Link>
      </div>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-yellow-500">📂</span> Baza Danych (Prisma
              Simulation)
            </h2>
            <RevenueComparison />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-green-500">💸</span> Zewnętrzne API (Costs)
            </h2>
            <ExternalApiComparison />
          </section>
        </div>
      </main>
    </div>
  );
}
