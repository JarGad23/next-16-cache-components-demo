import { cacheLife } from "next/cache";

async function getCategories() {
  await new Promise((r) => setTimeout(r, 1000)); // 1s opóźnienia DB
  return ["Faktury", "Klienci", "Raporty", "Ustawienia", "Integracje"];
}

// 👇 To sprawia, że ten komponent staje się CACHE COMPONENT
// Next.js zapamięta wygenerowany HTML tego komponentu.
export async function HeavySidebar() {
  "use cache";
  cacheLife("days"); // Sidebar zmienia się bardzo rzadko

  const categories = await getCategories();
  const generatedAt = new Date().toLocaleTimeString();

  return (
    <aside className="w-64 bg-gray-900 text-white p-6 min-h-full">
      <div className="mb-6 text-xs text-gray-500">
        Wygenerowano: {generatedAt}
      </div>
      <nav className="space-y-2">
        {categories.map((cat) => (
          <div
            key={cat}
            className="p-3 bg-gray-800 rounded hover:bg-gray-700 transition"
          >
            {cat}
          </div>
        ))}
      </nav>
      <div className="mt-10 p-4 border border-blue-500 rounded bg-blue-900/20 text-blue-200 text-sm">
        To jest <strong>Cache Component</strong>. Nawet jeśli odświeżysz stronę,
        ten fragment HTML jest serwowany natychmiast, bez ponownego renderowania
        Reacta.
      </div>
    </aside>
  );
}
