<template>
  <div id="app">
    <ContentProcess />
    <ContentTime />
    <ContentProfile />
    <ContentPm />
    <Footer />
    <Share />
  </div>
</template>



<script>
// import ContentProcess from '@/components/Content_process.vue'
// import ContentTime from '@/components/Content_time.vue'
import ContentProfile from '@/components/Content_profile.vue'
import ContentPm from '@/components/Content_pm.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'

export default {
  name: 'App',
  components: {
    // ContentProcess,
    // ContentTime,
    ContentProfile,
    ContentPm,
    Footer,
    Share,
  },
}
</script>

<style >
.tab-content {
  overflow: scroll;
}

.section {
  margin: 6rem auto;
  padding: 0 1rem;
  width: 100%;
}
</style>