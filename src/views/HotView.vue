

<template>
  <div>

    <COntentBanner />
    <Issue />

    <Share />
    <Footer />


  </div>
</template>

<script>

import COntentBanner from '@/components/Content_banner.vue'
import Issue from '@/components/Hot_isssue.vue'

import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'


export default {
  name: 'App',
  components: {
    COntentBanner,
    Issue,
    Footer,
    Share,

  },
}
</script>
