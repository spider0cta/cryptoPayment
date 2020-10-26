const config = require("../../configuration");
const RPC = require("./rpc");
const port = config.get("COIN_RPC_PORT");
const user = config.get("COIN_RPC_USER");
const pass = config.get("COIN_RPC_PASS");
const url = config.get("COIN_RPC_URL");

class CoinService {
  constructor() {
    this.client = new RPC({ url, port, user, pass });
  }

  async getBalance() {
    return this.clien.request("getbalance").then((r) => r.result);
  }

  async watchAddress({ order, address }) {
    return this.clien
      .request("importaddress", [address, order, false])
      .then((r) => r.result);
  }

  async getTransaction(txid){
      return this.client
        .request("gettransaction", [txid, true])
        .then((r) => r.result);
  }
}

module.exports = new CoinService();
