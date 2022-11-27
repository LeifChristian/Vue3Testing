<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template> -->



<template>
 <div>
<BarChart></BarChart>
</div>
</template>

<script>

import {computed} from 'vue';
 import BarChart from '../components/Chart.vue'
 export default {
  name: 'Charts',
  components: { BarChart }
}

import { Bar } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'Chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


</script>

<style lang="scss" scoped>

</style>