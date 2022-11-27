<template>
    <div>
      <div
        v-if="thing"
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 50vw;
          margin-top: 14vh;
         height: 50vh
        "
        class=" rounded-full "
      >
      <!-- <h2 style="color: white; z-index: 1000000000;" v-for="data in adData.ads">
        {{data.toString()}}
    </h2> -->

        <img
          style="margin-left: auto; margin-right: auto;"
          class="rounded-lg"
          src="../assets/pic1.png"
          alt=""
        >
      </div>
  
      <div
        v-else
        style="
        align-items: center;  
        justify-content: center;
        margin: auto;
        <!-- margin-top: 30vh; -->
     
<!--        
          margin-left: 54%;
          width: 50%;
          margin-top: 30vh; -->
        "
        class=""
      > <br>
        <img style=" margin-left: auto; margin-right: auto; height: 50vh; width: 50vw;" class="rounded-lg" :src="adData.ads[1]" alt="">
      </div>
    </div>
  </template>

  <script setup>
  import {ref, watch} from 'vue';
  import adData from '../assets/stuff.json'

  const props = defineProps({
    start: Boolean
  })

  watch(() => props.start, (first, second) => {
      console.log(
        "Watch props.start function called with args:",
        first,
        second
      );

      second ? thing.value = false : thing.value = true;

    });

  console.log('Adset Modal');
  const thing = ref(props.start);
  console.log(thing.value)

  // thing ? setInterval(()=>{thing.value=!thing.value}, 2000) : ''

  </script>

  <style scoped>
  * {
    margin-top: -100px
  }
  </style>