exports.onBlockUpdate = async function (ctx) {
  ctx.status = 200;
};

exports.onWalletUpdate = async function (ctx) {
  ctx.status = 200;
};

exports.routes = function (router) {
  router.post("/block", this.onBlockUpdate);
  router.post("/wallet", this.onWalletUpdate);
  return routes;
};
