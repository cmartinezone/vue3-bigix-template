<template>
  <img alt="Vue logo" src="./assets/logo.png" />
    <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Using VueJs for Bigfix web reports and dashboards</p>
    <button @click="increment">Count: {{ count }}</button>
    <button @click="nowRelevance">Now Relevance</button>
    <p>{{ relevance }}</p>
    <p>Demo chart:</p>
    <div id="chart-01">
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
   setup() {
    const count = ref(0);
    const relevance = ref("");

    const chartOptions = {

      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      yaxis: {
        title: {
          text: "Y-Axis"
        }
      }
    };

    const series = [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ];

    const increment = () => {
      count.value++;
      if (typeof window.EvaluateRelevance !== "undefined") {
      }
    };

    const nowRelevance = () => {
      if (typeof window.EvaluateRelevance !== "undefined") {
        relevance.value = window.EvaluateRelevance("now");
      } else {
        relevance.value = "none";
      }
    };

    return {
      count,
      relevance,
      chartOptions,
      series,
      increment,
      nowRelevance,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#chart-01 {
 margin: auto;
  width: 50%;

  padding: 10px;
}
</style>
