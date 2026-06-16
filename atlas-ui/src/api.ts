// Base URL of the local JetMix REST API, read from the Vite env (.env).
// Equivalent to the Blazor client's JetMixApiOptions.BaseUrl.
const API_BASE = import.meta.env.VITE_API_BASE_URL

/** Build a full API URL, e.g. apiUrl('/api/recipes'). */
export function apiUrl(path: string): string {
  return `${API_BASE}${path}`
}

/** Thin fetch wrapper that prefixes the API base. */
export function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  return fetch(apiUrl(path), init)
}
