<template>
  <section class="bg-postresBg text-white pb-8">
    <h2 class="text-center py-12">Nuestros postres</h2>

    <article
      class="p-4 m-4 bg-pizzaCardBg rounded-md drop-shadow-md text-black"
    >
      <h3 class="pb-4">Sweet Crepes</h3>
      <ul>
        <li v-for="crepe in sweetCrepes" :key="crepe.id" class="pb-2">
          {{ crepe.ingredients }} - {{ crepe.price }}
        </li>
      </ul>
    </article>

    <article
      class="p-4 m-4 bg-pizzaCardBg rounded-md drop-shadow-md text-black"
    >
      <h3 class="pb-4">Gofres Belgas</h3>
      <ul>
        <li v-for="crepe in gofresBelgas" :key="crepe.id" class="pb-2">
          {{ crepe.ingredients }} - {{ crepe.price }}
        </li>
      </ul>
    </article>

    <article
      class="p-4 m-4 bg-pizzaCardBg rounded-md drop-shadow-md text-black"
    >
      <h3 class="pb-4">Volcan de Chocolate</h3>
      <ul>
        <li class="pb-2">6.00 €</li>
      </ul>
    </article>
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

<style scoped></style>
