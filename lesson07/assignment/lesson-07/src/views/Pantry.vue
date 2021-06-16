<template>
  <div class="pantry">
    <Header />
    <Nav />
    <items />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Items from "@/components/Items.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Pantry",
  components: {
    Header,
    Nav,
    Items,
    Footer,
  },
};
</script>
