const controller = require('./controller')

exports.get = async function(ctx) {
  ctx.body = await controller.getProducts()
}

exports.getWithId = async function(ctx) {
  const id = ctx.params.id
  ctx.body = await controller.getProduct(id)
}

exports.routes = function(router) {
  router.get('/', this.get)
  router.get('/:id', this.getWithId)
  return router
}
