<template>
  <div class="about">
    <Header />
    <Nav />
    <Info />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Info from "@/components/Info.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "About",
  components: {
    Header,
    Nav,
    Info,
    Footer,
  },
};
</script>
