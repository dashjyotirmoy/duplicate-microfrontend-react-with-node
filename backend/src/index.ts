import app from './app';
import config from './config';
import { createServer, isHttps } from './server';
import logger from './utils/logger';
import routes from './routes';

app.use('/api', routes);

const server = createServer(app);
server.listen(config.port, () => {
  logger.info(`Using http${isHttps ? 's' : ''} on port ${config.port}`);
});
