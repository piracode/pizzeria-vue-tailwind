<template>
  <div id="site-wrapper">
    <SiteNavigation />
    <SiteHero :fixedHeaderHeight="fixedHeaderHeight" />
    <SiteAbout />
    <SitePizzasSection />
    <SiteCrepesSection />
    <SitePostresSection />
    <SiteLocationSection />
    <SiteFooter :fixedHeaderHeight="fixedHeaderHeight" />
  </div>
</template>

<script>
import SiteNavigation from './components/SiteNavigation.vue'
import SiteHero from './components/SiteHero.vue'
import SiteAbout from './components/SiteAbout.vue'
import SitePizzasSection from './components/SitePizzasSection.vue'
import SiteCrepesSection from './components/SiteCrepesSection.vue'
import SitePostresSection from './components/SitePostresSection.vue'
import SiteLocationSection from './components/SiteLocationSection.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  data() {
    return {
      fixedHeaderHeight: 160,
    }
  },
  components: {
    SiteNavigation,
    SiteHero,
    SiteAbout,
    SitePizzasSection,
    SiteCrepesSection,
    SitePostresSection,
    SiteLocationSection,
    SiteFooter,
  },
}
</script>

<style scoped></style>
