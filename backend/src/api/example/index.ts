import { Router } from 'express'; 

import { handle } from '../../utils/error-handler'; 
import characters from './characters';

const routes = Router();
routes.get('/', handle(characters.get));
routes.get('/characters', handle(characters.get));
routes.get('/characters/:id', handle(characters.getById));

export default routes;
