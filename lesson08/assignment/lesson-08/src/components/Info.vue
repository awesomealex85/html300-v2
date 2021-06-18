<template>
  <main class="main container grid-recipes">
    <div class="accordion" role="tablist">
      <b-card no-body class="card" v-for="card in cards" v-bind:key="card.caption">
        <b-card-header  class="card-header" role="tab">
          <h2 class="mb-0">
          <b-button block v-b-toggle="card.id" variant="info">{{card.title}}</b-button>
          </h2>
        </b-card-header>
        <b-collapse :id="card.id" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ card.caption }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </main>
</template>
<script>
  export default {
    name: 'Info',
    data() {
      return {
        cards: [
          { id: 'accordion-1', title: 'Cuisine', caption: 'El Salvadorean Cusine is heavily influenced from Aztec and Mayan hertiage as well as spanish and other european cuisines.'},
          { id: 'accordion-2',title: 'Staples', caption: 'The national dish of El Salvador is the Pupusas made with corn meal is a thick tortilla stuff with fillings such as pork beans and cheese, these tasty treats can be found in food carts at every corner around towns.'},
          { id: 'accordion-3',title: 'Drinks', caption: 'El Salvador is located in a tropical climate and lot of tropical fruits grow there such as papaya, and tamaraind which you will often find as juices and many restaurants.'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
