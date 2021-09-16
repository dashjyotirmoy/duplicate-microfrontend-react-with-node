import { Router } from 'express'; 

import example from './api/example';
import { noStore } from './utils/cache-control';

const routes = Router();
routes.use(noStore);

// Add API routes here
routes.use('/example', example);


export default routes;
