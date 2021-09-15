import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';
import { tls } from './config';
import logger from './utils/logger';

export let isHttps = false;

let options = {};
let createBackendServer = http.createServer;

if (tls.dirname) {
  try {
    options = {
      key: fs.readFileSync(path.join(tls.dirname, tls.key)),
      cert: fs.readFileSync(path.join(tls.dirname, tls.cert)),
    };
    createBackendServer = https.createServer;
    isHttps = true;
  } catch (err) {
    logger.error(`Cannot use https, using http instead: ${err}`);
  }
}

export const createServer = (app: any) => createBackendServer(options, app);

export default {
  createServer,
  isHttps,
};
