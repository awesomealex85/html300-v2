<template>
  <main class="main container grid-recipes">
    <h1>Pantry</h1>
    <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-50" src="../assets/products_seccion.jpeg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-25" src="../assets/front_es.7.full.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-25" src="../assets/Maseca_masa.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

  </main>
</template>

<script>
  export default {
    name: 'Pantry',
  }
</script>

<style scoped>
/* nav{
  background: #083d5d;
} */

</style>
