// app/actions/external-api.ts
"use server";

import { cacheLife } from "next/cache";
import { connection } from "next/server";

// WERSJA KOSZTOWNA
// Każde wywołanie to realny request HTTP do zewnętrznego serwera
export async function getExchangeRatesRealtime() {
  await connection();

  console.log("API CALL: Płacimy za ten request...");
  // fetch('https://api.expensive.com/rates')...
  return { rate: 4.25, timestamp: Date.now() };
}

// WERSJA OSZCZĘDNA
export async function getExchangeRatesCached() {
  "use cache";
  cacheLife("minutes"); // Odświeżaj max raz na minutę

  console.log("API CALL: Tylko raz na minutę!");
  return { rate: 4.25, timestamp: Date.now() };
}
