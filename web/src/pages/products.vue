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
        <h1 class="title">Products</h1>
      </div>
    </div>
  </div>
  <div class="section container" v-if="products">
    <div class="columns is-multiline">
      <div class="column is-one-third"
           v-for="(product, index) in products" :key="index">
           <product :product="product" />
      </div>
    </div>
  </div>
  <div class="container is-loading is-big" v-else>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/navbar'
import Products from '@/api/products'
import Product from '@/components/product'

export default {
  components: { Navbar, Product },
  data() {
    return {
      products: null
    }
  },
  async mounted() {
    this.products = await Products.get()
    console.log(this.products)
  }
}
</script>

<style lang="scss">
.container.is-loading {
  margin-top: 300px;
}
</style>
