import { AccountModel } from '../controller/signup/signup-protocols'
import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols/http'

export const BadRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
})

export const Ok = (account: AccountModel): HttpResponse => ({
  statusCode: 200,
  body: account,
})
