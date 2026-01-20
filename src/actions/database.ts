"use server";

import { cacheLife, cacheTag } from "next/cache";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type RevenueData = {
  amount: number;
  generatedAt: string;
  source: string;
};

// WERSJA WOLNA (Bez cache)
// Wywoływana przy każdym odświeżeniu. Blokuje serwer na 2 sekundy.
export async function getRevenueSlow(): Promise<RevenueData> {
  console.log("⚠️ DB HIT: Generowanie raportu (SLOW)...");
  await sleep(2000);

  return {
    amount: Math.floor(Math.random() * 100000),
    generatedAt: new Date().toLocaleTimeString(),
    source: "🔴 Baza Danych (Realtime)",
  };
}

// WERSJA SZYBKA (use cache)
// Wykonuje się raz na godzinę. Reszta to odczyt z pamięci.
export async function getRevenueCached(): Promise<RevenueData> {
  "use cache"; // Dyrektywa włączająca cache
  cacheLife("hours"); // Profil: dane żyją godziny
  cacheTag("revenue-report"); // Tag do inwalidacji

  console.log("DB HIT: Generowanie cache (FAST)...");
  await sleep(2000); // To opóźnienie poczuje tylko pierwszy user!

  return {
    amount: Math.floor(Math.random() * 100000),
    generatedAt: new Date().toLocaleTimeString(),
    source: "🟢 Cache Serwera (Memory)",
  };
}
