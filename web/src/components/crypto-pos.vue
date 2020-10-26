<template>
  <div>
    <h4>Bay with Bitcoin using the details below</h4>
    <div v-if="order" class="section">
      <div class="tags has-addons">
        <span class="tag is-primary is-large">Address:</span>
        <span class="tag is-info is-large">{{ order.paymentAddress }}</span>
      </div>
      <div class="tags has-addons">
        <span class="tag is-primary is-large">Amount:</span>
        <span class="tag is-info is-large">{{ order.amount }}</span>
      </div>
      <div>
        <qrcode :value="encode" :option="{ size: 300 }" />
      </div>
      <div>
        <span class="title is-5" v-if="state === 'waiting'"
          >Waiting for confirmation</span
        >
        <div class="loader"></div>
      </div>
      <div v-if="state === 'recieved'">
        <span class="title is-5"
          >Payment Recieved, you will get your book once we have 3
          confirmations</span
        >
      </div>
      <div v-if="state === 'error'">
        <span class="title is-5"
          >An error occured , please contact support with your order Id
          {{ order._id }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import Oreders from "@/api/orders";
import bip21 from "bip21"
import socketio from "socket.io-client"
export default {
  data() {
    return {
      order: null,
      socket : null,
      state:''
    };
  },
  props: {
    product: {
      tybe: Object,
      required: true
    },
  },
  watch:{
    order(){
        if(this.order){
            this.connect()
        }

    },
    socket(){
        this.socket.on('update' ,(data) = >{
            this.handleUpdate(data)
        })
    }
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
  },
  methods:{
    connect(){
        const order = this.order._id;
        const query = {order};
        const location =    `${window.location.host}`;
        this.socket = socketio(location,{resource:'/connect', query});
    },
    handleUpdate(data){
        this.state = data.state
    }

  }
};
</script>
