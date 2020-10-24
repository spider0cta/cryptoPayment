<template>
<div>
  <div class="hero is-info is-fullheight">
    <div class="hero-head container">
      <navbar />
    </div>
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">The Number One eBook Store</h1>
        <h2 class="subtitle is-3">Buy your books online today!</h2>
        <router-link to="/products" class="button is-primary is-large">
          View Products
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  components: { Navbar }
}
</script>
