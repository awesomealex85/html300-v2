<template>
  <main class="main container grid-recipes">
    <my-picture
    v-for="picture in pictures"
    v-bind:picture="picture"
    v-bind:key="picture.url"
    >
  </my-picture>
  </main>
</template>

<script>
  import Picture from './Picture.vue';

  let image_1 = require('../assets/pupusas_y_curtido.jpeg');
  let image_2 = require('../assets/Tamales_de_pollo.jpeg');
  let image_3 = require('../assets/pastelito.jpg');
  let image_4 = require('../assets/plato_guanaco.jpg')

  export default {
    name: 'Recipes',
    components: {
      'my-picture': Picture
    },
    data () {
      return {
        pictures: [
          { url: image_1, alt: 'plated pupusas with curtido', title:'Pupusas and Curtido'},
          { url: image_2, alt: 'Chicken Tamales', title:'Chicken Tamales'},
          { url: image_3, alt: 'fried pork pockets', title:'Pastelitos de Carne'},
          { url: image_4, alt: 'fried yuca and pork skin', title:'Yuca Fries and Chicaron'}
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
