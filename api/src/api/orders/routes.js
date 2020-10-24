const controller = require("./controller");
exports.createOrder = async function (ctx) {
  ctx.body = await controller.create(ctx.body)
};
exports.routes = function (router) {
  router.post("/", this.createOrder);
  return router;
};
