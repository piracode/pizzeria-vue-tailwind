<template>
  <section class="text-white mt-6 px-6 pb-12 xs:mx-auto xs:max-w-screen-xs">
    <h1 class="pb-4 font-lato text-xl no-uppercase">
      {{ welcomeMessageTitle }}
    </h1>
    <p>{{ welcomeMessageDescription }}</p>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      welcomeMessageTitle: '', // Initialize an empty string for the welcome message
      welcomeMessageDescription: '', // Initialize an empty string for the welcome message description
    }
  },
  mounted() {
    // Make the GET request using axios
    axios
      .get('https://martha.codes/pizzeria/wp-json/wp/v2/pages/97')
      .then((response) => {
        this.welcomeMessageTitle = response.data.acf.bienvenidos
        this.welcomeMessageDescription = response.data.acf.mensaje_de_bienvenida
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>

<style scoped>
.no-uppercase {
  text-transform: none;
}
</style>
