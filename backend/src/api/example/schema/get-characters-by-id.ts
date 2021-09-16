import ajv from '../../../utils/ajv';

export const definition = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'Identifies the character',
    },
  },
}

const ajvDefinition = {
  $async: true,
  additionalProperties: false,
  required: ['id'],
  ...definition,
};

export const validate = ajv.compile(ajvDefinition);

export default {
  definition,
  validate,
};
