<template>
  <section class="bg-aboutBg text-white" id="quienes-somos">
    <h2 class="text-center md:w-full p-12 sm:pb-16">Quienes Somos</h2>
    <div class="lg:flex sm:pb-14">
      <article class="flex-1 xs:mx-auto xs:max-w-screen-xs">
        <PizzaSVG class="mx-auto" />
        <h3 class="font-lato-900 text-base py-6 text-center">
          {{ passionTitle }}
        </h3>
        <p class="pb-12 px-6">{{ passionDescription }}</p>
      </article>
      <article class="flex-1 xs:mx-auto xs:max-w-screen-xs">
        <QualityBadgeSVG class="mx-auto" />
        <h3 class="font-lato-900 text-base py-6 text-center">
          {{ qualityTitle }}
        </h3>
        <p class="pb-12 px-6">{{ qualityDescription }}</p>
      </article>
      <article class="flex-1 xs:mx-auto xs:max-w-screen-xs">
        <HeartSVG class="mx-auto" />
        <h3 class="font-lato-900 text-base py-6 text-center">
          {{ thankYouTitle }}
        </h3>
        <p class="pb-12 px-6">{{ thankYouDescription }}</p>
      </article>
    </div>
  </section>
  <section class="bg-aboutBg pb-8 lg:flex">
    <!--   src="@/assets/pizzeria_1.webp" -->
    <img
      class="max-w-md mx-auto w-full px-6 pb-6 md:w-1/2 lg:w-1/3"
      src="/img/pizzeria_1.webp"
      alt="Annie Y Manuel, dueños de la pizzeria l'Arena"
    />
    <img
      class="max-w-md mx-auto w-full px-6 pb-6 md:w-1/2 lg:w-1/3"
      src="/img/pizzeria_2.webp"
      alt="Annie Y Manuel y Martha, dueños de la pizzeria l'Arena"
    />
    <img
      class="max-w-md mx-auto w-full px-6 pb-6 md:w-1/2 lg:w-1/3"
      src="/img/pizzeria_3.webp"
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
