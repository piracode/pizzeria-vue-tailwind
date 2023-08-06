<template>
  <section class="bg-locationBg">
    <h2 class="text-center py-12">Ubicación</h2>
    <p class="text-2xl font-bold text-center font-playfair pb-12 text-aboutBg">
      Pizzería l'Arena
    </p>
    <!-- Phone Icon SVG -->
    <div class="flex items-center justify-center">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"
        />
      </svg>
    </div>
    <div class="text-center pb-6">
      <a href="tel:+34964313991">964 31 39 91</a>
    </div>
    <!-- Location Icon SVG -->
    <div class="flex items-center justify-center">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 12c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z"
        />
      </svg>
    </div>
    <address class="text-center pb-4">
      Avenida del Faro 42, <span class="block">Oropesa del Mar</span>
    </address>
    <!-- Email Icon SVG -->
    <div class="flex items-center justify-center">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
      >
        <path
          d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
        />
      </svg>
    </div>
    <div class="text-center pb-10">
      <a href="mailto:annieymanuel@pizzerialarena.es"
        >annieymanuel@pizzerialarena.es</a
      >
    </div>

    <div v-html="mapIframe" class="p-4"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mapIframe:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d763.1235565039603!2d0.1411763349804166!3d40.08669257288649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a3d171828fa2bda!2sPizzeria+L\'Arena!5e0!3m2!1ses!2sar!4v1522416723208" width="1920" height="200" frameborder="0" zoom="16" style="border:0; max-width: 100% !important;" allowfullscreen=""></iframe>',
    }
  },
  components: {},
}
</script>

<style scoped>
.icon path {
  fill: #e64a19;
}
</style>
