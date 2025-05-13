import { Encrypter } from '../../protocols/encrypter'
import { DbAddAccount } from './db-add-account'

describe('DbAddAccount', () => {
  test('Should call Encrypter with correct password', () => {
    class EncrypeterStub implements Encrypter {
      async encrypt(value: string): Promise<string> {
        return new Promise((resolve) => resolve('hashed_password'))
      }
    }
    const encrypterStub = new EncrypeterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password',
    }
    sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
