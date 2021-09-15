import { Router } from 'express'; 

import handle from './utils/handle-error'; 

const nocache = (req: any, res: any, next: any) => {
  res.setHeader('cache-control', 'no-store');
  return next();
};

const routes = Router();
routes.use(nocache);
// API routes
routes.use('/test', handle((req: any, res: any) => res.status(200).send({ success: true })));

export default routes;
