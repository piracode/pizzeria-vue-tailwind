<template>
  <section class="bg-postresBg text-white pb-8" id="postres">
    <h2 class="text-center py-12">Nuestros postres</h2>
    <div class="lg:grid sm:grid-cols-3">
      <article
        class="p-4 m-4 bg-pizzaCardBg rounded-md drop-shadow-md text-black"
      >
        <h3 class="pb-4 text-center">Crêpes dulces</h3>
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
        <h3 class="pb-4 text-center">Gofres Belgas</h3>
        <ul>
          <li
            v-for="crepe in gofresBelgas"
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
        <h3 class="pb-4 text-center">Volcan de Chocolate</h3>
        <ul>
          <li class="pb-2 text-center">6.00 €</li>
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
      gofresBelgas: [],
    }
  },

  mounted() {
    this.fetchDessertsByCategory(12, 'sweetCrepes')
    this.fetchDessertsByCategory(14, 'gofresBelgas')
  },

  methods: {
    fetchDessertsByCategory(categoryId, arrayName) {
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
