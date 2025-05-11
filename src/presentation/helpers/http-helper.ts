import { HttpResponse } from '../protocols/http'

export const BadRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
})

export const Ok = (): HttpResponse => ({
  statusCode: 200,
  body: 'successfull',
})
