<template>
  <footer class="">
    <div class="flex__footer">
      <img class="logo " src="../assets/el_comal_logo.png" alt="company logo" />
      <p>Your Guide to Salvadorean Cuisine
      </p>
      <div class="nav-wrap">
        <nav class="navbar nav footer nav-justified">
          <ul class="nav__list flex row">
            <li class="nav__item">
              <a href="index.html" class="nav__link">Home</a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">Recipes</a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">About</a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">Pantry</a>
            </li>
          </ul>
        </nav>
      </div>
      <h3>© 2021 Sabores Guanacos, LLC | Seattle, WA
      </h3>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style scoped>
/* footer {
  background: #083d5d;
}
footer img {
    width: 24rem;
}

.nav {
  background: $salvablue;
  display: flex;
  justify-content:space-around;
  width: 100%;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  & ul {
    width: 100%;
    flex-direction: row;
    & li {
      padding: 2em;
    }
  }
  &__list {
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0 auto;
    list-style: none;
    text-align: center;
  }
  &__item {
    display: inline-block;
  }
  &__link {
  color: $white;
  }
} */

</style>
