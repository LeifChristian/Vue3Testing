<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Modal :title="things" :show="isShowing"></Modal>
    <Button @close="closey"  :title="things"></Button>
    <AdsetVue :start="isShowing"></AdsetVue> <div :style="[isShowing ?{ display: 'none'} : {marginBottom: '43px'}]"> </div>
    <Modality @open="open" @closed="closed"></Modality>
    <!-- <ModalDialogVue :show="show"/> -->
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Modal from './Modal.vue';
import Modality from "../components/Modality.vue"
import Button from '../components/Button.vue'
import AdsetVue from '@/components/Adset.vue';
import {ref, toRefs } from 'vue';
const things = ref('');
const isShowing = ref(false)
const { show } = toRefs(props)
const props = defineProps({
  show: Boolean,
})

isShowing.value ? things.value = 'marmalade' : things.value = "jam";
const closey = () => {
// things = 'breezus'; console.log("things", things)
isShowing.value=!isShowing.value;
things.value = (!isShowing.value ? 'jam': 'marmalade')
console.log(isShowing.value)
}

const open = () => {console.log('modal opened')}

const closed = () => {console.log('modal closed'); isShowing.value = !isShowing.value;
}

// export default {
//   props: {title: "okok" },
//   setup(props) {

//     console.log('hehee', props)},

//   name: 'HomeView',
//   components: {
//     HelloWorld,
//     Modal
//   }
// }
</script>
