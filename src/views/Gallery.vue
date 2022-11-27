<template>
    <div id="gallery">{{myObject}}
        <!-- {{Object.values(thing).toString()}}
        {{Object.keys(thing).toString()}} -->

        <div v-bind="myObject"> v-bind to object --> {{myObject}} </div>
       returned variable -->  {{no.toString().split('').reverse().join('')}}
<p id="boy"><div v-html="rawHtml"></div></p>
<!-- <p>Using text interpolation: {{ rawHtml2 }}</p> -->
<span v-html="rawHtml2" id="rd"></span>

<span v-html="rawHtml3" id="3rd"></span>


    </div>
</template>

<script>
import myFunction from './thing.js'
import { ref, onMounted } from 'vue'
export default {

    setup () {

        const el = ref()

onMounted(() => { myFunction();
  el.value = 'dork' // <div>

    console.log(el.value)
})
        const thing = {prop: 'fred'}
        let no = false;
        const rawHtml = `<div style="color: white">hello</div>`
        const rawHtml2 = `<div style="color: white"><button onclick="{ 
            let i = 0; alert('access'); 
        }">bert</button></div>`
        const rawHtml3 = `<div style="opacity: 0"> </div>`;
        return {thing, no, rawHtml,rawHtml2, rawHtml3, myFunction,
            myObject: {
      id: 'container',
      class: 'wrapper'
    }}
    }
}
</script>

<style lang="scss" scoped>
#boy {
    width: 100px;
    height: 100px;
    border-radius: 1em;
    background: red;
    position: relative;
    opacity: 0.8;
    animation: mymove 4s infinite;
  }
  
  @keyframes mymove {
    from {left: 0px;}
    to {left: 800px;}
  }
  
  @keyframes mynewmove {
    from {top: 0px;}
    to {top: 800px;}}

</style>