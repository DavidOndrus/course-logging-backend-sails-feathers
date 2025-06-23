import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  logsCreateValidator,
  logsQueryValidator,
  logsResolver,
  logsExternalResolver,
  logsDataResolver,
  logsQueryResolver
} from './logs.schema.js'
import { LogsService, getOptions } from './logs.class.js'

export const logsPath = 'logs'
export const logsMethods = ['find', 'create']

export * from './logs.class.js'
export * from './logs.schema.js'

export const logs = app => {
  app.use(logsPath, new LogsService(getOptions(app)), {
    methods: logsMethods,
    events: []
  })

  app.service(logsPath).hooks({
    around: {
      all: [authenticate('jwt'), schemaHooks.resolveExternal(logsExternalResolver), schemaHooks.resolveResult(logsResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(logsQueryValidator), schemaHooks.resolveQuery(logsQueryResolver)],
      find: [],
      create: [schemaHooks.validateData(logsCreateValidator), schemaHooks.resolveData(logsDataResolver)],
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
