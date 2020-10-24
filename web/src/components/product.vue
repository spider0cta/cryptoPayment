<template>
<div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image">
          <img :src="product.info.imageLinks.thumbnail">
        </figure>
      </div>
      <div class="media-content">
        <h1 class="title is-4">{{ product.info.title }}</h1>
        <h2 class="subtitle is-6">{{ product.info.authors[0] }}</h2>
        <h1 class="title is-5">${{ product.price.toFixed(2) }}</h1>
      </div>
    </div>
  </div>
  <footer class="card-footer">
    <router-link :to="orderUrl(product)" class="button is-info card-footer-item">
    Buy Now
    </router-link>
  </footer>
</div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    orderUrl(product) {
      return `/checkout/${product._id}`
    }
  }
}
</script>
