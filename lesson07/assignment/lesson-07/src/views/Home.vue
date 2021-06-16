<template>
  <div class="home">
    <Header />
    <Nav />
    <Welcome />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Welcome from "@/components/Welcome.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Home",
  components: {
    Header,
    Nav,
    Welcome,
    Footer,
  },
};
</script>
