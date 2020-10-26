const controller = require("./controller");

exports.onBlockUpdate = async function (ctx) {
  ctx.status = 200;
};

exports.onWalletUpdate = async function (ctx) {
  const txid = ctx.request.body.txid;
  controller.onTransaction(txid);
  ctx.status = 200;
};

exports.routes = function (router) {
  router.post("/blocknotify", this.onBlockUpdate);
  router.post("/walletnotify", this.onWalletUpdate);
  return routes;
};
