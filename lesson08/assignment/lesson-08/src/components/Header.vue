<template>
  <header class="header-wrap container bg-image" style="
    height: 20em;
  ">
    <section class="row justify-content-between">
      <div class="col-4">
        <img class="logo" src="../assets/el_comal_logo.png" alt="company logo" />
      </div>
      <div class="col-4">
        <captioned-content>Sabores Guanacos: Salvadorean Cuisine Guide
        </captioned-content>
      </div>
    </section>
  </header>
</template>

<script>

  import CaptionedContent from './CaptionedContent.vue'

  export default {
    components:{
      CaptionedContent,
    },
    name: 'Header',
  }
</script>

<style scoped>


header {
  background-image: url("../assets/el-salvador-playa-02.jpeg");
  /* background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  background-size: cover;
  box-sizing: border-box;
  flex-direction: row;
  padding-left: 5em;
  padding-top: 5rem;
  padding-bottom: 8rem;
  padding-right: 5rem; */
}
img {
  width: 15em;
}
h2{
  color: #083d5d;
}

</style>
