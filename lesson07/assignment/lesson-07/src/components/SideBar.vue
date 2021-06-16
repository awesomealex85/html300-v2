<template>
  <section class="sidebar grid-item grid-item-4 accordion" id="accordionExample">
    <div class="preview flex">
      <h1>Popular Recipes:</h1>
      <article class="preview">
        <a href="recipes.html" data-toggle="tooltip" data-placement="top" title="click to go to recipe">
          <img src="../assets/pupusas_y_curtido.jpeg" alt="plated pupusas with curtido" class="recipe__img animated bounce">
        </a>
        <h2>Pupusa y curtido</h2>
      </article>

      <article class="preview">
        <a href="recipes.html" data-toggle="tooltip" data-placement="top" title="click to go to recipe">
          <img src="../assets/Tamales_de_pollo.jpeg" alt="plated pupusas with curtido" class="recipe__img animated bounce">
        </a>
        <h2>Tamales de Pollo </h2>
      </article>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SideBar',
  }
</script>

<style scoped>
/* nav{
  background: #083d5d;
} */

</style>
