<template>
    <div>
<button style="background-color: dodgerblue; padding: 10px; border-radius: 1rem; font-size: larger; font-weight: bold;" @click="run">{{title}}</button>
    </div>
</template>

<script setup>

import {defineEmits} from 'vue';

const props = defineProps({
    title: String
})

const emit = defineEmits(['close'])

const run = () => { 

    switch(props.title) {

        case "jam":
            console.log('marmalade')

            break;
        case "marmalade":
            console.log('jam')
            break;

            default: 
            return;

    }
    console.log('lets go')
    emit('close')

}

</script>

<style lang="scss" scoped>

</style>