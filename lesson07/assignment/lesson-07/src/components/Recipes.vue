<template>
  <main class="main container grid-recipes">
    <section class="row">

      <article class="col-lg-3 col-md-4 col-sm-12 preview row" v-for="image in images" v-bind:key="image.url">
        <img :src="image.url" class="img-fluid img-thumbnail" v-on:click="show = !show">
        <h2 v-if="show">{{ image.caption }}</h2>
      </article>

    </section>

  </main>
</template>

<script>
let image_1 = require('../assets/pupusas_y_curtido.jpeg');
let image_2 = require('../assets/Tamales_de_pollo.jpeg');
let image_3 = require('../assets/pastelito.jpg');
let image_4 = require('../assets/plato_guanaco.jpg')

  export default {
    name: 'Recipes',
    data () {
      return {
        show: false,
        images: [
          { url: image_1, alt: 'plated pupusas with curtido', caption:'Pupusas and Curtido'},
          { url: image_2, alt: 'Chicken Tamales', caption:'Chicken Tamales'},
          { url: image_3, alt: 'fried pork pockets', caption:'Pastelitos de Carne'},
          { url: image_4, alt: 'fried yuca and pork skin', caption:'Yuca Fries and Chicaron'}
        ]
      }
    }
  }
</script>

<style scoped>
/* nav{
  background: #083d5d;
} */

</style>
