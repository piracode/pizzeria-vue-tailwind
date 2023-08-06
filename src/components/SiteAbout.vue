<template>
  <section class="bg-aboutBg text-white" id="quienes-somos">
    <h2 class="text-center p-12">Quienes Somos</h2>
    <article class="">
      <PizzaSVG class="mx-auto" />
      <h3 class="font-lato-900 text-base py-6 text-center">
        {{ passionTitle }}
      </h3>
      <p class="pb-12 px-6">{{ passionDescription }}</p>
    </article>
    <article class="">
      <QualityBadgeSVG class="mx-auto" />
      <h3 class="font-lato-900 text-base py-6 text-center">
        {{ qualityTitle }}
      </h3>
      <p class="pb-12 px-6">{{ qualityDescription }}</p>
    </article>
    <article class="">
      <HeartSVG class="mx-auto" />
      <h3 class="font-lato-900 text-base py-6 text-center">
        {{ thankYouTitle }}
      </h3>
      <p class="pb-12 px-6">{{ thankYouDescription }}</p>
    </article>
  </section>
  <section class="bg-aboutBg pb-8">
    <img
      class="max-w-md mx-auto w-full px-6 pb-6"
      src="@/assets/pizzeria_1.webp"
      alt="Annie Y Manuel, dueños de la pizzeria l'Arena"
    />
    <img
      class="max-w-md mx-auto w-full px-6 pb-6"
      src="@/assets/pizzeria_2.webp"
      alt="Annie Y Manuel y Martha, dueños de la pizzeria l'Arena"
    />
    <img
      class="max-w-md mx-auto w-full px-6 pb-6"
      src="@/assets/pizzeria_3.webp"
      alt="Fachada de la pizzeria l'Arena"
    />
  </section>
</template>

<script>
import axios from 'axios'
import QualityBadgeSVG from '@/components/QualityBadgeSVG.vue'
import PizzaSVG from '@/components/PizzaSVG.vue'
import HeartSVG from '@/components/HeartSVG.vue'
export default {
  data() {
    return {
      passionTitle: '',
      passionDescription: '',
      qualityTitle: '',
      qualityDescription: '',
      thankYouTitle: '',
      thankYouDescription: '',
    }
  },
  components: {
    HeartSVG,
    QualityBadgeSVG,
    PizzaSVG,
  },
  mounted() {
    axios
      .get('https://martha.codes/pizzeria/wp-json/wp/v2/pages/101')
      .then((response) => {
        // console.log(response.data)
        this.passionTitle = response.data.acf.titulo_1
        this.passionDescription = response.data.acf.descripcion_1
        this.qualityTitle = response.data.acf.titulo_2
        this.qualityDescription = response.data.acf.descripcion_2
        this.thankYouTitle = response.data.acf.titulo_3
        this.thankYouDescription = response.data.acf.descripcion_3
        // console.log(this.thankYouDescription)
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>

<style scoped></style>
