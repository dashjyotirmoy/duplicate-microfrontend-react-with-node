import winston from 'winston';
// @ts-ignore
import SplunkEventStream from 'winston-splunk-httplogger';

import { log } from '../config';

const basicConsole = new winston.transports.Console({
  level: log.level,
  format: winston.format.json(),
});

const logger = winston.createLogger({
  exitOnError: false,
});

logger.exceptions.handle(basicConsole);

function addTransports(logr: any) {
  if (log.splunk.token) {
    logr.add(new SplunkEventStream({
      level: log.level,
      format: winston.format.json(),
      splunk: { ...log.splunk },
    }));
  }
  logr.add(basicConsole);
}

addTransports(logger);

logger.on('error', () => {
  logger.clear();
  addTransports(logger);
});

export default logger;
