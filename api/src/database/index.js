const mongoose = require('mongoose')
const config = require('../configuration')

mongoose.Promise = global.Promise

const url = config.get('MONGO_URL')
const db = config.get('MONGO_DATABASE_NAME')

module.exports = {
  connect: () => {
    return new Promise((resolve, reject) => {
      mongoose.connect(`${url}/${db}`, {
        promiseLibrary: global.Promise,
        useNewUrlParser: true
      })
      const conn = mongoose.connection
      conn.on('error', reject)
      conn.on('open', resolve)
    })
  },

  close() {
    mongoose.connection.close()
  }
}
