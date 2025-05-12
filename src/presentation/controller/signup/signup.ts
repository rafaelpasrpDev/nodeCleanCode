import {
  HttpResponse,
  HttpRequest,
  EmailValidator,
  Controller,
  AddAccount,
} from './signup-protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { BadRequest, Ok, serverError } from '../../helpers/http-helper'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount

  constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredField = [
        'name',
        'email',
        'password',
        'passwordConfirmation',
      ]
      for (const field of requiredField) {
        if (!httpRequest.body[field]) {
          return BadRequest(new MissingParamError(field))
        }
      }
      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (password !== passwordConfirmation) {
        return BadRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return BadRequest(new InvalidParamError('email'))
      }
      const account = await this.addAccount.add({
        name,
        email,
        password,
      })
      return Ok(account)
    } catch (error) {
      return serverError()
    }
  }
}
