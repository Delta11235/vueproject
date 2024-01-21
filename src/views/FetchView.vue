<template>
    <div class="home">
        <h1>This is fetch page</h1>
        <FetchData></FetchData>
    </div>
</template>
  
<script>
// @ is an alias to /src
import FetchData from "../components/FetchData.vue";


export default {
    name: 'HomeView',
    components: {
        FetchData
    }
}
</script>
  