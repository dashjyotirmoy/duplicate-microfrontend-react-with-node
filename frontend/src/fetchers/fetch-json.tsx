const jsonHeaders = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};

export class FetchError extends Error {
  status: number;
  constructor(status: number, statusText: string) {
    super(statusText);
    this.status = status;
  }
}

export async function fetchJson<T>(url: RequestInfo, init?: RequestInit|undefined): Promise<T> {
  const jsonInit = { headers: { ...jsonHeaders }, ...init };
  const res = await fetch(url, jsonInit);
  if (res.ok) {
    return res.json();
  }
  throw new FetchError(res.status, res.statusText);
}

export default {
  fetchJson,
};
