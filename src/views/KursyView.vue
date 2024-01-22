<template>
    <div class="home">
        <h1>This is fetch page</h1>
        <KursyComponent></KursyComponent>
    </div>
</template>
  
<script>
// @ is an alias to /src
import KursyComponent from "../components/KursyComponent.vue";


export default {
    name: 'KursyView',
    components: {
        KursyComponent
    }
}
</script>
  