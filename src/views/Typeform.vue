<template>
  <div>

    <Share />

    <Typeform />

  </div>
</template>

<script>

import Typeform from '@/components/Typeform.vue'
import Share from '../components/share.vue'

export default {
  name: 'App',
  components: {

    Typeform,

    Share,
  },
}
</script>
