<template>
  <div>

    <Share />
    <Typeform />
    <Footer />
  </div>
</template>

<script>

import Typeform from '@/components/Typeform.vue'
import Share from '../components/share.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'App',
  components: {
    Typeform,
    Footer,
    Share,
  },
  // mounted() {
  //   if (location.href.indexOf('#form') == -1) {
  //     // console.log(1);
  //     location.href = location.href + '#form'
  //     location.reload()
  //   }
  // }
}
</script>

