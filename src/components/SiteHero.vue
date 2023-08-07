<template>
  <section
    class="relative background-image flex justify-center items-center"
    id="promocion"
  >
    <div class="relative z-10 p-8 text-black bg-hero max-w-sm rounded-lg">
      <h2 class="text-xl text-center font-bold mb-10">
        {{ heroTitle }}
      </h2>
      <div class="mb-6" v-html="heroDescription"></div>
      <div class="flex justify-center">
        <a
          href="#pizzas"
          @click="scrollToSection('#pizzas')"
          class="bg-orangeCTA pt-2 pb-2 pr-4 pl-4 rounded-2xl flex items-center text-white font-playfair-500 text-xl"
        >
          <span class="mr-2">Nuestras pizzas</span>
          <RightArrowSVG class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import RightArrowSVG from '@/components/RightArrowSVG.vue'
import { scrollWithOffset } from '@/components/scrollUtils.js'
export default {
  data() {
    return {
      heroTitle: '',
      heroDescription: '',
      headerOffset: 160,
    }
  },
  components: {
    RightArrowSVG,
  },
  methods: {
    scrollToSection(sectionId) {
      scrollWithOffset(sectionId, this.headerOffset)
    },
  },
  mounted() {
    axios
      .get('https://martha.codes/pizzeria/wp-json/wp/v2/pages/103')
      .then((response) => {
        // console.log(response.data)
        this.heroTitle = response.data.acf.titulo_seccion_promocion
        this.heroDescription = response.data.acf.descripcion
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>

<style scoped>
.background-image {
  background-image: url('~@/assets/hero.webp');
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 60vh;
}

.bg-hero {
  background-color: rgba(252, 154, 7, 0.67);
}
</style>
