const Router = require('koa-router')
const products = require('../api/products/routes')
const orders = require('../api/orders/routes')
const blockchain  =require('../api/blockchain/routes')

const routes = {
  '/products': products,
  '/orders': orders,
  '/blockchain':blockchain
}

const router = Router()

module.exports = Object.keys(routes).reduce((router, key) => {
  const route = routes[key]
  const r = route.routes(Router())
  router.use(key, r.routes())
  return router
}, router)

module.exports = router
