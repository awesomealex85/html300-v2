<template>
  <section class="picture">
    <article class="col-lg-3 col-md-4 col-sm-12 preview row">
      <!-- <img :src="picture.url" :alt="picture.alt" class="img-fluid" v-on:click="hello"> -->
      <img :src="picture.url" :alt="picture.alt" class="img-fluid"
      v-bind:class="{borderToggle}" v-on:click="borderToggle = !borderToggle">
      <h2>{{ picture.title }}</h2>
    </article>

  </section>
</template>

<script>
  import toggleMixin from "./toggleMixin";

  export default {
    name: 'my-picture',
    props: ['picture'],
    methods: {
      hello() {
        alert("hello function called")
      }
    },
    data () {
      return {
        borderToggle: true,
      }
    },
    computed: {
      mixins: [toggleMixin]
    }
  }


</script>

<style lang="scss">
  .borderToggle {
    padding: 0.5rem;
    background-color: #fff;
    border: 10px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
  }
</style>
