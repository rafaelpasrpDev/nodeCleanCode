import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter,
  AddAccountRepository,
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository
  constructor(
    encrypter: Encrypter,
    addaccountRepository: AddAccountRepository,
  ) {
    this.encrypter = encrypter
    this.addAccountRepository = addaccountRepository
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPass = await this.encrypter.encrypt(accountData.password)
    // eslint-disable-next-line prettier/prettier
    await this.addAccountRepository.add(Object.assign({}, accountData, {password: hashedPass}))
    return new Promise((resolve) => resolve(null))
  }
}
