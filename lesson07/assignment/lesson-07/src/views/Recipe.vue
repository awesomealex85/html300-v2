<template>
  <div class="recipe">
    <Header />
    <Nav />
    <Recipes />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Recipes from "@/components/Recipes.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Recipe",
  components: {
    Header,
    Nav,
    Recipes,
    Footer,
  },
};
</script>
