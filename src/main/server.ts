import env from './config/env'
import { MongoHelper } from '../infra/db/mongodb/helper/mongo-helper'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(5051, () =>
      console.log(`HTTP request listening port ${env.port}`),
    )
  })
  .catch(console.error)
