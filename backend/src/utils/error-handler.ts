import Ajv from 'ajv';
import uuid from 'uuid';

import logger from './logger';

const STD_MSG = 'An unexpected error occurred. Details have been logged under this id';

function getErrorMessage(err: any) {
  const id = uuid.v4();
  const ts = new Date().toJSON();
  const error = (err instanceof Error)
    ? { message: err.message, stack: err.stack, name: err.name}
    : { message: err };
  return { id, ts, error };
}

export function respondWithError(res: any, err: any) {
  if (err instanceof Ajv.ValidationError) {
    const { errors } = err;
    return res.status(400).json({ errors });
  }
  const { id, ts, error } = getErrorMessage(err);
  logger.error({ id, ts, error });
  return res.status(500).send({ error: { id, ts, message: STD_MSG } });
}

export const handle = (mainFunction: any) => async (req: any, res: any, next: any) =>
  mainFunction(req, res, next).catch((err: any) => respondWithError(res, err));

export default {
  handle,
};
