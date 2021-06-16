<template>
  <header class="header-wrap container bg-image" style="
    height: 20em;
  ">
    <section class="row justify-content-between">
      <div class="col-4">
        <img class="logo" src="../assets/el_comal_logo.png" alt="company logo" />
      </div>
      <div class="col-4">
        <h2 class="title">Sabores Guanacos: Salvadorean Cuisine Guide</h2>
      </div>
    </section>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style scoped>

/* header {
  background-image: url("../assets/el-salvador-playa-02.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  background-size: cover;
  box-sizing: border-box;
  flex-direction: row;
  padding-left: 5em;
  padding-top: 5rem;
  padding-bottom: 8rem;
  padding-right: 5rem;
}*/
img {
  width: 15em;
}
h2{
  color: #083d5d;
}

</style>
