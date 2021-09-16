// Issues with latest node-fetch, revert to earlier which doesn't support import - hence the require
const nodeFetch = require('node-fetch');
import HttpsProxyAgent from 'https-proxy-agent'; 
import AbortController from 'abort-controller'; 

import config from '../config'; 

const { proxyUrl, timeoutMs } = config.fetch;
const agent = proxyUrl ? HttpsProxyAgent(proxyUrl) : undefined;

function getTimeoutSignal() {
  const controller = new AbortController();
  const timeout = setTimeout(() => { controller.abort() }, timeoutMs);
  return { signal: controller.signal, timeout };
}

export class FetchError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function fetch(url: RequestInfo, init?: RequestInit|undefined): Promise<Response> {
  const { signal, timeout } = getTimeoutSignal();
  const initWithTimeout = { agent, signal, ...init };
  try {
    const res = await nodeFetch(url, initWithTimeout);
    if (res.ok) {
      return res;
    }
    const message = await res.text();
    throw new FetchError(res.status, message);
  } finally {
    clearTimeout(timeout);
  }
}

export function handleFetchError(err: any, res: any) {
  if (err instanceof FetchError) {
    return res.status(err.status).send(err.message);
  }
  throw err;
}

export async function fetchJson(url: RequestInfo, init?: RequestInit|undefined): Promise<any> {
  const res = await fetch(url, init);
  return res.json();
}

export default fetch;
