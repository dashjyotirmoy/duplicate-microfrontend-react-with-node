import ajv from '../../../utils/ajv';

export const definition = {
  type: 'object',
  properties: {
    page: {
      type: 'integer',
      minimum: 1,
      description: 'Identifies the character page',
    },
  },
}

const ajvDefinition = {
  $async: true,
  additionalProperties: false,
  required: ['page'],
  ...definition,
};

export const validate = ajv.compile(ajvDefinition);

export default {
  definition,
  validate,
};
