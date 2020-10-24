<template>
  <div>
    <div class="hero is-info">
      <div class="hero-head">
        <div class="container">
          <navbar />
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Checkout</h1>
        </div>
      </div>
    </div>
    <div class="section container" v-if="product">
      <div class="columns">
        <div class="column">
          <figure class="image is-cover">
            <img :src="product.info.imageLinks.thumbnail" />
          </figure>
          <h1 class="title">{{ product.info.title }}</h1>
          <h2 class="subtitle">{{ product.info.authors[0] }}</h2>

          <h2 class="title">${{ product.price.toFixed(2) }}</h2>
        </div>
        <div class="column">
          <div class="tabs is-centered is-medium is-boxed">
            <ul>
              <li :class="{ 'is-active': isCard }">
                <a @click="cardClicked">Pay With Card</a>
              </li>
              <li :class="{ 'is-active': isCrypto }">
                <a @click="cryptoClicked">Pay with crypto</a>
              </li>
            </ul>
          </div>
          <card-form v-if="isCard == 'card'" />
          <crypto-pos v-if="isCrypto" :product="product"/>
        </div>
      </div>
    </div>
    <div class="container is-loading is-big" v-else>
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Products from "@/api/products";
import Product from "@/components/product";
import CardForm from "@/components/card-form";
import CryptoPos from '@/components/crypto-pos'
export default {
  components: { Navbar, Product, CardForm, CryptoPos },
  data() {
    return {
      product: null,
      state: "card",
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    this.product = await Products.getWithId(id);
   
  },
  computed :{
    isCard(){
      return this.state === 'card'
    },
    isCrypto(){
      return this.state === 'crypto'
    }
  }
  methods:{
    cardClicked(){
      this.state = 'card'
    },
    cryptoClicked(){
      this.state = 'crypto'
    }
  }
};
</script>

<style lang="scss">
.container.is-loading {
  margin-top: 300px;
}
.image.is-cover img {
  width: 128px;
  height: 192px;
}
</style>
