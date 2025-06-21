import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

export const logsSchema = {
  $id: 'Logs',
  type: 'object',
  additionalProperties: false,
  required: ['text', 'level', 'time', 'type'],
  properties: {
    _id: ObjectIdSchema(),
    text: { type: 'string' },
    level: {
      type: 'number',
      minimum: 0,
      maximum: 7,
    },
    time: { type: 'string' },
    type: { enum: ['system', 'user'] },
  }
}
export const logsResolver = resolve({})

export const logsExternalResolver = resolve({})

export const logsCreateValidator = getValidator(logsSchema, dataValidator)
export const logsDataResolver = resolve({})

export const logsQuerySchema = {
  $id: 'LogsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(logsSchema.properties)
  }
}
export const logsQueryValidator = getValidator(logsQuerySchema, queryValidator)
export const logsQueryResolver = resolve({})
