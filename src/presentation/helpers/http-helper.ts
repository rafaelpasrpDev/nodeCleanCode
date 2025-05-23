import { ServerError } from '../errors'
import { HttpResponse } from '../protocols/http'

export const BadRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
})

export const Ok = (account: any): HttpResponse => ({
  statusCode: 200,
  body: account,
})
