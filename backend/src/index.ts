import app from './app';
import { startServer } from './server';
import routes from './routes';
import catchAll from './utils/catch-all';

app.use('/api', routes);

// Redirect all unmatched requests to the root with a derived fragment identifier
// in case it matches an iframe app entry point defined in the static content.
// If this request was already to the root then we have nothing more to try, so 404.
app.all('*', catchAll);

startServer(app);
