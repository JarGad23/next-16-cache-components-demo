import { ExternalApiComparison } from "@/components/external-api-comparison";
import { HeavySidebar } from "@/components/heavy-sidebar";
import { RevalidateButton } from "@/components/revalidate-button";
import { RevenueComparison } from "@/components/revenue-comparison";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Suspense fallback={<div className="w-64 bg-gray-900 animate-pulse" />}>
        <HeavySidebar />
      </Suspense>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
              Next.js 16 Performance Demo
            </h1>
            <p className="text-gray-400 mt-2">
              Porównanie: Realtime Rendering vs. &quot;use cache&quot;
            </p>
          </div>

          <RevalidateButton />
        </header>

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
