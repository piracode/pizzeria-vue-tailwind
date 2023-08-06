<template>
  <div id="site-wrapper">
    <SiteNavigation />
    <SiteHero />
    <SiteAbout />
    <SitePizzasSection />
    <SiteCrepesSection />
    <SitePostresSection />
    <SiteLocationSection />
  </div>
</template>

<script setup>
import SiteNavigation from './components/SiteNavigation.vue'
import SiteHero from './components/SiteHero.vue'
import SiteAbout from './components/SiteAbout.vue'
import SitePizzasSection from './components/SitePizzasSection.vue'
import SiteCrepesSection from './components/SiteCrepesSection.vue'
import SitePostresSection from './components/SitePostresSection.vue'

import SiteLocationSection from './components/SiteLocationSection.vue'
</script>

<style scoped></style>
