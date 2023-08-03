<template>
  <header class="bg-blackCustom">
    <div class="flex justify-center items-center py-4">
      <span>
        <PhoneSVGIcon />
      </span>
      <a href="tel:964313991" class="text-redCustom font-bold ml-2">
        964 31 39 91
      </a>
    </div>
    <nav
      class="flex justify-between p-4 border-t-2 border-b-2 mr-6 ml-6 border-lightGrey relative"
    >
      <div class="logo">
        <!-- Logo Image -->
        <img src="@/assets/pizzeria-logo.png" alt="Logo" class="w-40" />
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <!-- Hamburger Menu SVG Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <!-- Cross icon path (only shown when menuOpen is true) -->
          <path
            v-if="menuOpen"
            d="M6 6l18 18M6 24L24 6"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <!-- Hamburger icon path (shown when menuOpen is false) -->
          <path
            v-else
            d="M4 7h22a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 8h22a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 8h22a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            fill="white"
          />
        </svg>
      </div>
      <transition-group name="slide">
        <ul
          v-if="menuOpen"
          key="menu"
          class="links absolute top-20 left-1/2 transform -translate-x-1/2 bg-blackCustom w-screen flex flex-col items-center text-white font-bold gap-4 z-50"
        >
          <!-- Navigation Links -->
          <li class="pt-8"><a href="#">Promoción</a></li>
          <li><a href="#">Quienes Somos</a></li>
          <li><a href="#">Pizzas</a></li>
          <li><a href="#">Crêpes</a></li>
          <li><a href="#">Postres</a></li>
          <li><a href="#">Ubicación</a></li>
          <li
            class="bg-orangeCTA pt-2 pb-2 pr-4 pl-4 rounded-2xl mt-8 mb-12 font-playfair-500 text-xl"
          >
            <a href="#" class="flex items-center">
              <span class="mr-2">Nuestras pizzas</span>
              <RightArrowSVG class="w-4 h-4" />
            </a>
          </li>
        </ul>
      </transition-group>
    </nav>
    <SiteHeader />
  </header>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import PhoneSVGIcon from '@/components/PhoneSVGIcon.vue'
import RightArrowSVG from '@/components/RightArrowSVG.vue'

export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
  components: {
    PhoneSVGIcon,
    SiteHeader,
    RightArrowSVG,
  },
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
