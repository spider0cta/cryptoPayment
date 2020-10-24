<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
    <h4 class="title is-4">BitBooks</h4>
    </router-link>
  </div>
  <div class="navbar-end">
    <router-link class="navbar-item" to="/products">
    <span>Products</span>
    </router-link>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
