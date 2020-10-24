const Koa = require('koa')
const app = new Koa()

const bodyparser = require('koa-bodyparser')
const Router = require('koa-router')
const serve = require('koa-static-server')
const mount = require('koa-mount')
const database = require('../database')
const router = require('../routing')
const errorMiddleware = require('../middleware/error')
const productList = require('../../../products.json')
const Product = require('./../api/products/model')

const api = new Koa()
api.use(require('koa-response-time')())
api.use(require('koa-morgan')('combined'))
api.use(bodyparser())
api.use(errorMiddleware)
api.use(async (ctx, next) => { ctx.type = 'json'; await next() })
api.use(router.routes())
app.use(mount('/api', api))
api.proxy = true

app.use(serve({ rootDir: 'src/static' }))

async function setupProducts() {
  await Promise.all(productList.map(async (product) => {
    const p = await Product.findOne({ googleId: product.google_id })
    if (!p) {
      return Product.create({
        googleId: product.google_id, price: product.price
      })
    }
  }))
}

module.exports = {
  start: async () => {
    try {
      await database.connect()
      await setupProducts()
      await app.listen(3000)
      console.log('App running on port 3000')
    } catch (error) {
      console.log(error)
    }
  }
}

