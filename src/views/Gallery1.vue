<script setup lang="ts">
import AppVue from './AppOG.vue';
import { defineProps } from 'vue';

// const props = defineProps({
//   title: String,
//   greeting: String
// })

</script>
<template>
    <div id="root">
  <AppVue id="thingy1"></AppVue>
  <AppVue id="thingy2"></AppVue>
  <AppVue id="thingy3"></AppVue>
</div>
</template>
<style>

* {
    
}

body {background: black;
}

#thingy1 div {
    max-width: 800px;
    margin: 0 auto;
    border-radius: 1em!important;
    animation: myKeyframes .5s ease-in-out 1s infinite alternate forwards;
}


#thingy2 div {
    max-width: 800px;
    margin: 0 auto;
    border-radius: 1em!important;
}
#thingy3 div {
    max-width: 800px;
    margin: 0 auto;
    border-radius: 1em!important;
}
#root {

opacity: 0.9;
display: flex
}

</style>