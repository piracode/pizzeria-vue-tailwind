<template>
  <section class="bg-pizzasBg text-white pb-10 pizza-section" id="pizzas">
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
            class="rounded border border-gray-300 focus:outline-none focus:border-green-500 p-2 hover:bg-orange-200 transition duration-300 ease-in-out cursor-pointer"
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
          v-for="pizza in filteredPizzas"
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
                class="bg-aboutBg text-white rounded p-2 hover:bg-green-900 transition duration-300 ease-in-out cursor-pointer"
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
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      pizzas: [],
      categories: [],
      selectedCategoryId: null,
      selectedCategoryName: '',
      filteredPizzas: [],
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
    // Fetch Pizzas and categories
    axios
      .get(
        'https://martha.codes/pizzeria/wp-json/wp/v2/pizza?categoria-de-pizza=2&per_page=100'
      )
      .then((response) => {
        // console.log(response.data)
        // Extract the unique category IDs from the response
        const categoryIds = [
          //spread ooperator to create a new array + new Set to remove duplicate
          ...new Set(
            //extract all the category id into one single array
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
        // Set all the fetched pizzas to the filteredPizzas array to display them by default
        this.filteredPizzas = this.pizzas
        // Reverse the filteredPizzas array to display them correctly
        this.filteredPizzas.reverse()

        this.selectedCategoryId = 2
      })
      .catch((error) => {
        console.error(error)
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
