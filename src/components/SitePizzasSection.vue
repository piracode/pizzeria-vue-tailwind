<template>
  <section
    class="bg-pizzasBg text-white pb-10 pizza-section"
    id="pizzas"
    data-aos="fade-up"
  >
    <h2 class="text-center p-12">Nuestras Pizzas</h2>
    <div class="text-black">
      <!-- Dropdown to select category -->
      <div class="mb-6 sm:flex sm:gap-6 justify-center">
        <label
          for="categorySelect"
          class="flex justify-center items-center text-white pb-2"
          >Filtrar pizzas por categoría:
        </label>
        <div class="flex justify-center items-center">
          <select
            v-model="selectedCategoryId"
            @change="filterPizzasByCategory"
            class="rounded border border-gray-300 p-2 hover:bg-orange-200 transition duration-300 ease-in-out cursor-pointer"
            tabindex="0"
          >
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ categoryNameMap[category.id] || 'Unknown Category' }}
            </option>
          </select>
        </div>
      </div>

      <!-- Pizza Card -->
      <div class="lg:grid lg:grid-cols-2 xxl:xxl:max-w-7xl mx-auto">
        <article
          v-for="pizza in displayedPizzas"
          :key="pizza.name"
          class="p-4 m-4 bg-pizzaCardBg rounded-md drop-shadow-md"
        >
          <!-- Select prices dropdown menu -->
          <div class="pb-4 sm:flex sm:gap-6 justify-center sm:pb-8">
            <label
              for="pizzaOption"
              class="flex justify-center items-center pb-2"
              >Seleccionar precios:
            </label>
            <div class="flex justify-center items-center pb-2">
              <select
                v-model="pizza.selectedOption"
                class="bg-pizzasBg text-white rounded p-2 hover:bg-aboutBg transition duration-300 ease-in-out cursor-pointer"
              >
                <option value="eatIn">Comedor</option>
                <option value="toGo">Para llevar</option>
              </select>
            </div>
          </div>

          <!-- Pizza display with name and ingredients -->
          <div class="sm:grid sm:grid-cols-3">
            <div>
              <h3 class="pb-2 xs:text-center xs:pb-6 sm:text-2xl">
                {{ pizza.name }}
              </h3>
              <div class="test">
                <div
                  v-html="pizza.ingredients"
                  class="pizza-ingredients pb-4"
                  id="pizza-ingredients"
                ></div>
              </div>
            </div>

            <!-- Grande Eat-in Prices -->
            <div
              v-if="pizza.selectedOption === 'eatIn'"
              class="py-2 font-bold text-lg xs:text-center"
            >
              Grande <span class="sm:block sm:text-xs">(33cm)</span>
              {{ pizza.priceEatInGrande }}
            </div>

            <!-- Individual Eat-in Prices -->
            <div
              v-if="pizza.selectedOption === 'eatIn'"
              class="py-2 font-bold text-lg xs:text-center"
            >
              Individual <span class="sm:block sm:text-xs">(26cm)</span>
              {{ pizza.priceEatInIndividual }}
            </div>

            <!-- Grande Takeout Prices -->
            <div
              v-if="pizza.selectedOption === 'toGo'"
              class="py-2 font-bold text-lg xs:text-center"
            >
              Grande <span class="sm:block sm:text-xs">(33cm)</span
              >{{ pizza.priceToGoGrande }}
            </div>

            <!-- Individual TakeOut Prices -->
            <div
              v-if="pizza.selectedOption === 'toGo'"
              class="py-2 font-bold text-lg xs:text-center"
            >
              Individual <span class="sm:block sm:text-xs">(26cm)</span>
              {{ pizza.priceToGoIndividual }}
            </div>
          </div>
          <div v-html="pizza.extraInformation" class="pt-4"></div>
        </article>
      </div>
      <!-- Button to trigger pagination -->
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="scrollDistance"
      >
        <button
          v-if="!loading && !allPizzasDisplayed"
          @click="loadMore"
          class="bg-orange-500 text-white rounded-lg px-4 py-2 mx-auto block"
        >
          Cargar más pizzas
        </button>
        <div v-else class="text-center text-white">
          <p
            v-text="
              allPizzasDisplayed
                ? '¡Todas las pizzas ya están mostradas!'
                : 'Cargando...'
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  data() {
    return {
      pizzas: [],
      categories: [],
      selectedCategoryId: null,
      selectedCategoryName: '',
      filteredPizzas: [],
      displayedPizzas: [],
      visiblePizzaCount: 6, // Set the number of visible pizzas
      loading: false,
      allPizzasDisplayed: false,
    }
  },
  methods: {
    filterPizzasByCategory() {
      if (!this.selectedCategoryId) {
        // If no category is selected, display all pizzas
        this.filteredPizzas = this.pizzas
        this.selectedCategoryName = '' // Clear the selected category name
      } else {
        // Filter pizzas based on the selected category
        this.filteredPizzas = this.pizzas.filter((pizza) => {
          return pizza.categoriaDePizza.includes(
            Number(this.selectedCategoryId)
          )
        })
        // Find the selected category name from the categoryNameMap
        this.selectedCategoryName =
          this.categoryNameMap[this.selectedCategoryId] || ''
      }
    },
    loadMore() {
      // Load more pizzas
      if (this.visiblePizzaCount < this.pizzas.length) {
        this.visiblePizzaCount += 6 // Load 6 more pizzas at a time
        this.updateDisplayedPizzas()
      } else {
        // All pizzas have been loaded
        this.allPizzasDisplayed = true
      }
    },
    updateDisplayedPizzas() {
      this.displayedPizzas = this.pizzas.slice(0, this.visiblePizzaCount)
    },
  },

  components: {},
  computed: {
    categoryNameMap() {
      return {
        4: 'Carne',
        5: 'Marisco',
        8: 'Personalizadas',
        6: 'Quesos',
        3: 'Simple',
        16: 'Sin Gluten',
        2: 'Todas',
        7: 'Vegetal',
      }
    },
  },

  mounted() {
    // Initialize AOS
    AOS.init()

    // Fetch Pizzas and categories
    axios
      .get(
        'https://martha.codes/pizzeria/wp-json/wp/v2/pizza?categoria-de-pizza=2&per_page=100'
      )
      .then((response) => {
        // Extract the unique category IDs from the response
        const categoryIds = [
          ...new Set(
            response.data.flatMap((pizza) => pizza['categoria-de-pizza'])
          ),
        ]

        // Map the category IDs to category objects with their names
        this.categories = categoryIds.map((id) => ({
          id,
          name: `Category ${id}`,
        }))

        // Iterate through the pizzas and push details into the pizzas array
        response.data.forEach((pizza) => {
          const {
            nombre_de_la_pizza: name,
            ingredientes_de_la_pizza: ingredients,
            extra_informacion: extraInformation,
            precios_grande_comedor: priceEatInGrande,
            precios_individual_comedor: priceEatInIndividual,
            precios_grande_para_llevar: priceToGoGrande,
            precios_individual_para_llevar: priceToGoIndividual,
          } = pizza.acf

          const categoriaDePizza = pizza['categoria-de-pizza']

          // Push pizza details into the pizzas array
          this.pizzas.push({
            name,
            ingredients,
            extraInformation,
            priceEatInGrande,
            priceEatInIndividual,
            priceToGoGrande,
            priceToGoIndividual,
            selectedOption: 'eatIn', // Set initial selected option
            selectedCategoryId: 2, // Initialize with the ID of the "Todas" category
            categoriaDePizza,
          })
        })

        // Determine the initial number of pizzas to display (5 or 6)
        this.visiblePizzaCount = Math.min(this.pizzas.length, 6)
        this.updateDisplayedPizzas()

        // Set all the fetched pizzas to the filteredPizzas array to display them by default
        this.filteredPizzas = this.pizzas

        this.selectedCategoryId = 2
      })
      .catch((error) => {
        console.error(error)
      })
  },

  updated() {
    // to ensure AOS is initialized after DOM changes
    this.$nextTick(function () {
      AOS.refresh()
    })
  },
}
</script>

<style scoped>
::v-deep .pizza-ingredients ul {
  list-style-type: disc;
  margin-left: 2.25rem;
}

::v-deep .star {
  color: red;
  font-weight: bold;
}
</style>
