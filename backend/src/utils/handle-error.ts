import Ajv from 'ajv';
import uuid from 'uuid';
import logger from './logger';

const STD_MSG = 'An unexpected error occurred. Details have been logged under this id';

function getErrorMessage(result: any) {
  const id = uuid.v4();
  const ts = new Date().toJSON();
  const error = (result instanceof Error)
    ? { message: result.message, stack: result.stack, name: result.name}
    : { message: result };
  return { id, ts, error };
}

export function respondWithError(res: any, result: any) {
  if (result instanceof Ajv.ValidationError) {
    const { errors } = result;
    return res.status(400).json({ errors });
  }
  const { id, ts, error } = getErrorMessage(result);
  logger.error({ id, ts, error });
  return res.status(500).send({ error: { id, ts, message: STD_MSG } });
}

export const handleError = (mainFunction: any) => async (req: any, res: any, next: any) => {
  try {
    mainFunction(req, res, next);
  } catch (err) {
    respondWithError(res, err);
  }
};

export default handleError;
