<template>
  <header class="bg-blackCustom" data-aos="fade-up">
    <!-- <div class="fixed-header" ref="fixedHeader"></div> -->
    <div :style="{ height: placeholderHeight + 'px' }"></div>
    <div class="fixed top-0 z-50 fixed-header" ref="fixedHeader">
      <div class="flex justify-center items-center py-4">
        <span>
          <PhoneSVGIcon />
        </span>
        <a
          href="tel:964313991"
          class="text-redCustom font-bold ml-2 hover:text-red-500"
        >
          964 31 39 91
        </a>
      </div>
      <nav
        class="flex justify-between p-4 border-t-2 border-b-2 mr-6 ml-6 border-lightGrey relative"
      >
        <div class="logo">
          <!-- Logo Image -->
          <a href="#">
            <img
              src="@/assets/pizzeria-logo.png"
              alt="Logo"
              class="w-40 cursor-pointer"
            />
          </a>
        </div>
        <div class="menu-icon cursor-pointer" @click="toggleMenu">
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
            <li class="pt-8">
              <a
                href="#promocion"
                ref="promocion"
                @click="closeMenuAndScroll('#promocion')"
                class="hover:bg-green-950 transition duration-300 ease-in-out py-2 px-4 rounded"
                >Promoción</a
              >
            </li>
            <li>
              <a
                href="#quienes-somos"
                @click="closeMenuAndScroll('#quienes-somos')"
                class="hover:bg-green-950 transition duration-300 ease-in-out py-2 px-4 rounded"
                >Quienes Somos</a
              >
            </li>
            <li>
              <a
                href="#pizzas"
                @click="closeMenuAndScroll('#pizzas')"
                class="hover:bg-green-950 transition duration-300 ease-in-out py-2 px-4 rounded"
                >Pizzas</a
              >
            </li>
            <li>
              <a
                href="#crepes"
                @click="closeMenuAndScroll('#crepes')"
                class="hover:bg-green-950 transition duration-300 ease-in-out py-2 px-4 rounded"
                >Crêpes</a
              >
            </li>
            <li>
              <a
                href="#postres"
                @click="closeMenuAndScroll('#postres')"
                class="hover:bg-green-950 transition duration-300 ease-in-out py-2 px-4 rounded"
                >Postres</a
              >
            </li>
            <li>
              <a
                href="#ubicacion"
                @click="closeMenuAndScroll('#ubicacion')"
                class="hover:bg-green-950 transition duration-300 ease-in-out py-2 px-4 rounded"
                >Ubicación</a
              >
            </li>
            <li
              class="bg-orangeCTA hover:bg-orange-600 pt-2 pb-2 pr-4 pl-4 rounded-2xl mt-8 mb-12 font-playfair-500 text-xl"
            >
              <a
                href="#pizzas"
                @click="closeMenuAndScroll('#pizzas')"
                class="flex items-center"
              >
                <span class="mr-2">Nuestras pizzas</span>
                <RightArrowSVG class="w-4 h-4" />
              </a>
            </li>
          </ul>
        </transition-group>
      </nav>
    </div>
    <SiteHeader />
  </header>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import PhoneSVGIcon from '@/components/PhoneSVGIcon.vue'
import RightArrowSVG from '@/components/RightArrowSVG.vue'
import { closeMenuAndScroll } from '@/components/scrollUtils.js'

export default {
  data() {
    return {
      menuOpen: false,
      placeholderHeight: 0,
      headerOffset: 160,
    }
  },
  mounted() {
    this.placeholderHeight = this.$refs.fixedHeader.offsetHeight
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenuAndScroll(sectionId) {
      this.menuOpen = false
      const fixedHeaderHeight = this.$refs.fixedHeader.offsetHeight
      closeMenuAndScroll(sectionId, fixedHeaderHeight)
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

.slide-leave-active {
  transition: transform 0.7s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 160px;
  /* z-index: 100; */
  background-color: #1c1a1a;
}
</style>
