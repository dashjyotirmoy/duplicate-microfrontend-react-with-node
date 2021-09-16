import app from './app';
import { startServer } from './server';
import routes from './routes';

app.use('/api', routes);

startServer(app);
