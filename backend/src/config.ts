export const port = +(process.env.MFE_EXAMPLE_BACKEND_PORT || '3001');

export const log = {
  level: (process.env.MFE_EXAMPLE_BACKEND_LOG_LEVEL || 'info') as string,
  splunk: {
    token: process.env.MFE_EXAMPLE_BACKEND_SPLUNK_TOKEN as string,
    url: process.env.MFE_EXAMPLE_BACKEND_SPLUNK_URL as string,
    source: process.env.MFE_EXAMPLE_BACKEND_SPLUNK_SOURCE as string,
    sourcetype: process.env.MFE_EXAMPLE_BACKEND_SPLUNK_SOURCETYPE as string,
    index: process.env.MFE_EXAMPLE_BACKEND_SPLUNK_INDEX as string,
  },
};

export const tls = {
  dirname: process.env.MFE_EXAMPLE_BACKEND_TLS_DIRNAME as string,
  key: process.env.MFE_EXAMPLE_BACKEND_TLS_KEY as string,
  cert: process.env.MFE_EXAMPLE_BACKEND_TLS_CERT as string,
};

export const proxyUrl = process.env.MFE_EXAMPLE_BACKEND_PROXY_URL as string;

export default {
  port,
  log,
  tls,
  proxyUrl,
};
