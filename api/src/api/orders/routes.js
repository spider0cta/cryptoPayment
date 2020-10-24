const controller = require("./controller");
exports.createOrder = async function (ctx) {
  ctx.body = await controller.create(ctx.request.body)
};
exports.routes = function (router) {
  router.post("/", this.createOrder);
  return router;
};
