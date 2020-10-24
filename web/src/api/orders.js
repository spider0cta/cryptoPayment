import axios from "axios";
import { create } from "../../../api/src/api/orders/controller";

export default {
  async create(product) {
    const data = {
      productId: product._id,
      price: product.price
    };
    return axios.post("/api/orders", data).then((r) => r.data);
  },
};
