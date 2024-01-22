<template>
  <div class="about">
    <h1>This is an about page</h1>
    <PorównywarkaComponent></PorównywarkaComponent>
  </div>
</template>
<script>
import PorównywarkaComponent from "../components/PorównywarkaComponent.vue";


export default {
  name: 'PorównywarkaView',
  components: {
    PorównywarkaComponent
  }
}
</script>