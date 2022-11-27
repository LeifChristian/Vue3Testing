<template>
    <Bar
      :chart-options="options"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
    default: "60vw"
    },
    height: {
      type: Number,
       default: "70vh"
    },
    cssClasses: {
      default: 'nice',
      type: String
    },
    styles: {
      type: Object,
      default: () => {
  
      }
    },
    plugins: {
      type: Object,
      default: () => {}
    },
    // options: {
    //   type: Object,
    //   default: () => {  const title = {
    //       display: true,
    //       text: "Chart.js Doughnut Chart",
    //     }}
    // }
  },

  
  data() {

    const options = {
  scaleShowGridLines: false,
  showScale: false,
  maintainAspectRatio: true,
  plugins: {
    legend: {
     
    },

    title: {
      display: true,
      text: 'sdfg',
    },
  },
};
    return {
      chartData: {
        labels: [ 'JANUARY', 'FEBRUARY', 'MARCH', "JUNE", "NOVEMBER", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ],
        datasets: [ {label:'Your Chart', data: [20, 12, 17,38,45, 15, 85, 11, 32, 71, 93]}
      ],
   
      },

    }
  }
}
</script>

<style lang="scss" scoped>

* {background: black; }

.nice {height: 70vh; width: 60vw; margin-left: auto; margin-right: auto; background: white; border-radius: 2em; padding: 10px}

</style>