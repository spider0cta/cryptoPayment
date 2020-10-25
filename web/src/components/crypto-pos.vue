<template>
  <div>
    <h4>Bay with Bitcoin using the details below</h4>
    <div v-if="order" class="section">
        <div class="tags has-addons">
            <span class="tag is-primary is-large">Address:</span>
            <span class="tag is-info is-large">{{order.paymentAddress}}</span>
        </div>
        <div class="tags has-addons">
            <span class="tag is-primary is-large">Amount:</span>
            <span class="tag is-info is-large">{{order.amount}}</span>
        </div>
        <qrcode :value="encode" :option="{size:300}"/>
    </div>
  </div>
</template>
<script>
import Oreders from "@/api/orders";
import bip21 from "bip21"
export default {
  data() {
    return {
      order: null
    };
  },
  props: {
    product: {
      tybe: Object,
      required: true
    },
  },
  async created() {
    this.order = await Orders.create(this.product);
  },
  computed : {
    encode() {
        return bip21.encode(this.order.paymentAddress , {
            amount : this.order.amount,
            label : `BookStore Bitbooks ${this.order._id}`
        })
    }
  }
};
</script>
