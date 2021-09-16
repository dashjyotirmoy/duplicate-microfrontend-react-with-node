import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';
import gracefulShutdown from 'http-graceful-shutdown';

import config from './config';
import logger from './utils/logger';

interface GetHttpServerResponse {
  server: http.Server|https.Server;
  isHttps: boolean;
}

function getServer(app: any): GetHttpServerResponse {
  let isHttps = false;
  let createServer = http.createServer;
  let options = {};
  
  const { tls, keepAliveTimeout } = config.server;
  if (tls.dirname) {
    try {
      options = {
        key: fs.readFileSync(path.join(tls.dirname, tls.key)),
        cert: fs.readFileSync(path.join(tls.dirname, tls.cert)),
      };
      createServer = https.createServer;
      isHttps = true;
    } catch (err) {
      logger.error(`Cannot use https, using http instead: ${err}`);
    }
  }

  const server = createServer(options, app);
  server.keepAliveTimeout = keepAliveTimeout;

  return { server, isHttps };
}

export function startServer(app: any): http.Server|https.Server {
  const { port } = config.server;

  const { server, isHttps } =  getServer(app);

  server.listen(port, () => {
    logger.info(`Using http${isHttps ? 's' : ''} on port ${port}`);
  });

  gracefulShutdown(server, {
    onShutdown: async (signal: any) => {
      logger.info(`Server shutting down on signal ${signal}`);
    },
    finally: () => {
      logger.info('Server shutdown complete');
    },
  });

  return server;
}

export default {
  startServer,
};
