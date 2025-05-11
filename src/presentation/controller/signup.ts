import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { BadRequest, Ok } from '../helpers/http-helper'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredField = ['name', 'email', 'password']
    for (const field of requiredField) {
      if (!httpRequest.body[field]) {
        return BadRequest(new MissingParamError(field))
      }
    }
    return Ok()
  }
}
