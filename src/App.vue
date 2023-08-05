<template>
  <div id="site-wrapper">
    <SiteNavigation />
    <SiteHero />
    <SiteAbout />
    <SitePizzasSection />
    <siteCrepesSection />
  </div>
</template>

<script setup>
import SiteNavigation from './components/SiteNavigation.vue'
import SiteHero from './components/SiteHero.vue'
import SiteAbout from './components/SiteAbout.vue'
import SitePizzasSection from './components/SitePizzasSection.vue'
import SiteCrepesSection from './components/SiteCrepesSection.vue'
</script>

<style scoped></style>
