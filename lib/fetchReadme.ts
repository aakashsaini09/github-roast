// lib/fetchReadme.ts
import fetchReadmePkg from "@varandas/fetch-readme";

type FetchReadmeFn = (repo: string, options?: any) => Promise<string>;

export const fetchReadme: FetchReadmeFn = (fetchReadmePkg as any).fetchReadme;
