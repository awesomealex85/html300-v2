<template>
  <div class="nav-wrap">
    <nav class="navbar nav footer nav-justified">
      <router-link class="nav-item nav-link" to="/">Home</router-link>
      <!-- <a class="nav-item nav-link" href="index.html">Home</a> -->
      <router-link class="nav-item nav-link" to="/recipe">Recipes</router-link>
      <!-- <a class="nav-item nav-link" href="recipes.html">Recipes</a> -->
      <router-link class="nav-item nav-link" to="/about">About</router-link>
      <!-- <a class="nav-item nav-link" href="about.html">About</a> -->
      <router-link class="nav-item nav-link" to="/pantry">Pantry</router-link>
      <!-- <a class="nav-item nav-link" href="pantry.html">Pantry</a> -->
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
  }
</script>

<style scoped>
/* nav{
  background: #083d5d;
} */

</style>
