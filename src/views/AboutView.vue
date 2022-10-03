<template>
  <div id="app">

    <ContentProfile />
    <ContentPm />
    <Footer />
    <Share />
  </div>
</template>



<script>

import ContentProfile from '@/components/Content_profile.vue'
import ContentPm from '@/components/Content_pm.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'

export default {
  name: 'App',
  components: {

    ContentProfile,
    ContentPm,
    Footer,
    Share,
  },
}
</script>

<style >
::-webkit-scrollbar {
  width: 0;
  /* Remove scrollbar space */
  background: transparent;
  /* Optional: just make scrollbar invisible */
}

/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}

.tab-content {
  overflow: scroll;
  max-width: 2000px !important;
}

.section {
  margin: 6rem auto;
  padding: 0 1rem;
  width: 100%;
}

.tabs {
  max-width: 1300px;
  margin: auto;
}
</style>