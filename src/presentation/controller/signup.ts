import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { BadRequest, Ok } from '../helpers/http-helper'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return BadRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return BadRequest(new MissingParamError('email'))
    }
    return Ok()
  }
}
