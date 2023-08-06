<template>
  <section class="bg-blackCustom text-center text-white py-10">
    <!-- <div class="flex justify-between pb-10"> -->
    <div class="">
      <!-- <nav class="footer-nav pl-4"> -->
      <nav class="pb-8">
        <h3 class="pb-4">Explorar</h3>
        <ul>
          <!-- Navigation Links -->
          <li><a href="#">Pizzas</a></li>
          <li><a href="#">Crêpes</a></li>
          <li><a href="#">Postres</a></li>
          <li><a href="#">Promoción</a></li>
        </ul>
      </nav>
      <article class="horarios pb-8">
        <h3 class="">Horario</h3>
        <p class="pb-4">(de Junio a Septiembre)</p>
        <div>
          <div>
            <time datetime="00:00" class="block pb-2">Lunes (cerrado)</time>
          </div>
          <div>
            <time class="block">Martes a Domingo</time>
            <time datetime="18:00-22:30" class="block">18:00 - 22:30</time>
          </div>
        </div>
      </article>
    </div>
    <article>
      <h3 class="pb-4">Contacto</h3>

      <!-- Phone Icon SVG -->
      <div class="flex items-center justify-center pb-2">
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"
          />
        </svg>
      </div>
      <div class="pb-4">
        <a href="tel:+34964313991">964 31 39 91</a>
      </div>
      <!-- Email Icon SVG -->
      <div class="flex items-center justify-center pb-2">
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24z"
          viewBox="0 0 24 24"
        >
          <path
            d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
          />
        </svg>
      </div>
      <div class="pb-20">
        <a href="mailto:annieymanuel@pizzerialarena.es"
          >annieymanuel@pizzerialarena.es</a
        >
      </div>
      <p class="pb-2">&copy; 2023 Pizzeria l'Arena</p>
      <p class="text-xs">
        Sitio desarrollado por
        <a href="https://martha.codes/" class="underline"
          >Martha Villa Martin</a
        >
      </p>
    </article>
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
}
</script>

<style scoped>
.icon path {
  fill: white;
}

/* .footer-nav {
  flex-basis: 30%;
}

.horarios {
  flex-basis: 50%;
} */
</style>
