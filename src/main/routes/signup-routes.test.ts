import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helper/mongo-helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    accountCollection.deleteMany({})
  })

  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Rafael Paulo',
        email: 'rafaelpsrp@hotmail.com',
        password: 'Raf@2704',
        passwordConfirmation: 'Raf@2704',
      })
      .expect(200)
  })
})
