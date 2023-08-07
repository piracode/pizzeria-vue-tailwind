<template>
  <section class="bg-crepesBg text-white pb-8" id="crepes">
    <h2 class="text-center py-12">Nuestras crêpes</h2>
    <div class="lg:grid sm:grid-cols-3">
      <article
        class="p-4 m-4 bg-pizzaCardBg rounded-md drop-shadow-md text-black"
      >
        <h3 class="text-center">Crêpes Saladas</h3>
        <p class="pb-4 text-center">(de harina blanca)</p>
        <ul>
          <li
            v-for="crepe in savoryCrepes"
            :key="crepe.id"
            class="pb-2 custom-grid"
          >
            <div class="crepe-ingredients">{{ crepe.ingredients }}</div>
            <div class="crepe-price">{{ crepe.price }}</div>
          </li>
        </ul>
      </article>

      <article
        class="p-4 m-4 bg-pizzaCardBg rounded-md drop-shadow-md text-black"
      >
        <h3 class="text-center">Crêpes dulces</h3>
        <p class="pb-4 text-center">(de harina blanca)</p>
        <ul>
          <li
            v-for="crepe in sweetCrepes"
            :key="crepe.id"
            class="pb-2 custom-grid"
          >
            <div class="crepe-ingredients">{{ crepe.ingredients }}</div>
            <div class="crepe-price">{{ crepe.price }}</div>
          </li>
        </ul>
      </article>

      <article
        class="p-4 m-4 bg-pizzaCardBg rounded-md drop-shadow-md text-black"
      >
        <h3 class="pb-4 text-center">Gluten-Free Crepes</h3>
        <ul>
          <li class="pb-2">
            A eligir entre las crêpes dulces o saladas (pueden contener trazas
            de gluten) <span class="block text-center pt-4">6.00 €</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      sweetCrepes: [],
      savoryCrepes: [],
    }
  },

  mounted() {
    this.fetchCrepesByCategory(12, 'sweetCrepes')
    this.fetchCrepesByCategory(11, 'savoryCrepes')
  },

  methods: {
    fetchCrepesByCategory(categoryId, arrayName) {
      axios
        .get(
          `https://martha.codes/pizzeria/wp-json/wp/v2/crepe?categoria-de-crepe=${categoryId}`
        )
        .then((response) => {
          this[arrayName] = response.data.map((crepe) => ({
            ingredients: crepe.acf.ingredientes_crepe,
            price: crepe.acf.precios_crepe,
          }))
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  gap: 0.2rem;
}
</style>
