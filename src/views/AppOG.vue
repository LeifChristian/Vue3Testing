<template>
    <div style="margin-top: 10%; " id="app">
      <!-- <p>{{ text[0] }}</p> -->
      <vue-flux :options="options" :images="images" :captions="fluxCaptions" :transitions="transitions">
  
        <!-- ** loading screen **
        <template v-slot:preloader>
          <flux-preloader />
        </template> -->
  
        <!-- ** title ** -->
  
        <template v-slot:caption> 
          <div style="margin-left: auto; z-index: 200000; margin-right: auto; font-size: 2rem; font-style: italic; font-weight: bold">{{title}}</div>
          <flux-caption />
        </template>
  
       <!-- ** left right controls ** -->
        <template v-slot:controls>
          <flux-controls />
        </template>
  
        <!-- ** pagination bubbles ** -->
        <!-- <template v-slot:pagination>
          <flux-pagination />
        </template> -->
  
        <!-- ** index ** -->
        <!-- <template v-slot:index>
          <flux-index />
        </template> -->
      </vue-flux>
      <!-- <p>{{ text[1] }}</p> -->
  
    </div>
  </template>
  
  <script>
  
  let imageArray = [];
  import JSONData from '../assets/images.json';
  import {
    VueFlux,
     FluxCaption,
    FluxControls,
    // FluxIndex,
    // FluxPagination,
    // FluxPreloader,
  } from "vue-flux";
  
  export default {
    name: "AppVue",
    components: {
      VueFlux,
       FluxCaption,
      FluxControls,
      // FluxIndex,
      // FluxPagination,
      // FluxPreloader,
    },
  
    data(props) {
      return {
        title: props.title,
      };
    },
  
    computed: {
      titles() {
        
        let thing = JSONData.titles;
        console.log(typeof(thing), '!!!')
        let newArray = Object.values(JSONData.titles);
        // console.log(newArray, '222222')
        return [newArray[0]]
      },
      text() {
     return  console.log('text')
      },
      options() {
        return {
          autoplay: true,
          autohideTime: 0,
        };
      },
  
      fluxCaptions() {
        let newArray = Object.values(JSONData.titles);
        return [...newArray]},
  
      transitions() {
        const transitionArray = ['fade', 'kenburn','swipe', 'slide','waterfall', 'zip', 'blinds2d','blocks1', 
        'blocks2','concentric', 'warp', 'camera','cube', 'book', 'fall','wave', 'blinds3d','round1', 'round2', 'explode',]
        const randomTransition = transitionArray[Math.floor(Math.random()*(transitionArray.length))];
        return [randomTransition]
      },
  
      images() {
        imageArray = [];
        // return [...Array(7).keys()].map((i) => `https://picsum.photos/800/600?random=${i}`);
        // console.log(typeof(JSONData.ads))
        // let imageArray = [];
        let newArray = Object.values(JSONData);
        newArray[0].forEach((data)=> {
          switch(data.substring(0,2)){
            case '..':
            data = data.replace('.','');
            data = require(`.${data}`)
          imageArray.push(data)
              break;
              case "./":
              data = data.replace('.','');
              data = require(`.${data}`)
          imageArray.push(data)
                break;
                default:
          imageArray.push(data)
                return;
          }
        } );
         console.log(imageArray)
        return [...imageArray];
      },
    }
  }
  
  </script>
  <style scoped>
  
  #app {
    
  }
  
  p {
    text-align: justify;
    line-height: 150%;
  }
  </style>