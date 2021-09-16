
import qs from 'query-string';

import config from '../../config';
import { fetchJson, handleFetchError } from '../../utils/fetch';
import { validate as validateGet } from './schema/get-characters';
import { validate as validateGetById } from './schema/get-characters-by-id';

const { baseUrl } = config.example;

export async function get(req: any, res: any) {
  await validateGet(req.query);
  try {
    const { results } = await fetchJson(`${baseUrl}/character?${qs.stringify(req.query)}`);
    return res.status(200).send({ characters: results });
  } catch (err) {
    return handleFetchError(err, res);
  }
}

export async function getById(req: any, res: any) {
  await validateGetById(req.params);
  try {
    const character = await fetchJson(`${baseUrl}/character/${req.params.id}`);
    return res.status(200).send({ character });
  } catch (err) {
    return handleFetchError(err, res);
  }
}

export default {
  get,
  getById,
};
