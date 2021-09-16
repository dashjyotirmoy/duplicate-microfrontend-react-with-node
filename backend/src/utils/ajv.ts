import Ajv from 'ajv';

const ajv = new Ajv({
  allErrors: true,
  coerceTypes: 'array',
  useDefaults: true,
  removeAdditional: true,
});

export default ajv;
