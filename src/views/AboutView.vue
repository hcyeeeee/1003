<template>
  <div id="app">
    <COntentBanner />
    <AdditionBox />
    <ContentProfile />
    <ContentPm />
    <Footer />
    <Share />
  </div>
</template>



<script>
import COntentBanner from '@/components/Content_banner.vue'
import AdditionBox from '@/components/Addition_box.vue'
import ContentProfile from '@/components/Content_profile.vue'
import ContentPm from '@/components/Content_pm.vue'
import Footer from '@/components/Footer.vue'
import Share from '../components/share.vue'

export default {
  name: 'App',
  components: {
    COntentBanner,
    AdditionBox,
    ContentProfile,
    ContentPm,
    Footer,
    Share,
  },
}
</script>

<style >
.tab-content {
  /* overflow: scroll; */
  max-width: 2000px !important;


}

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


@media screen and (max-width: 500px) {
  .tab-content {
    overflow: scroll;

  }

  .section-box {
    max-height: 550px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}




.tabs {
  max-width: 1300px;
  margin: auto;
}


.section-box {
  max-height: 800px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>