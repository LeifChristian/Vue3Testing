<template>
    <div id="gallery">
      {{myObject}}
            <!-- {{Object.values(thing).toString()}}
          {{Object.keys(thing).toString()}} -->
  <div :style="a">style object</div>
      returned variable --> {{no.toString().split('').reverse().join('')}}
      <p id="animatedSquare"><span v-html="rawHtml"></span></p>
      <span v-html="rawHtml2"></span>
      <span v-html="rawHtml3" id="3rd"></span>
    </div>
  </template>
  
  <script setup>
  import myFunction from './thing.js';

  import { ref, onMounted } from 'vue'
          const el = ref()
          const a = ref({"background-color": "", "color": 'lightblue'})
          const thing = {prop: 'fred'}
          let no = false;
          const rawHtml = `<div style="color: white">hello</div>`;
          const  myObject= {id: 'container',class: 'wrapper'}
          const rawHtml2 = `<div style="color: white"><button onclick="{let i = 0; alert('access');}">button</button></div>`
          const rawHtml3 = `<div style="opacity: 0"> </div>`;
        onMounted(() => { myFunction();
            el.value = 'element text' // <div>
            console.log(el.value)
            })
          a.value.color = 'red';
          a.value['background-color'] = 'black';
          
</script>
  
  <style lang="scss" scoped>
  #animatedSquare {
    width: 100px;
    height: 100px;
    border-radius: 1em;
    background: red;
    position: relative;
    opacity: 0.8;
    animation: mymoves 8s infinite;
  }
  
  @keyframes mymoves {
    0% {
      left: 0%;
      opacity: 0.1;
    }
    39% {
      left: 92%;
      opacity: 1;
      background-color: yellow;
    }
    100%{ left: 0%;
        background-color: blue;
        opacity: 0.1;
        
        }
  }
  </style>
  