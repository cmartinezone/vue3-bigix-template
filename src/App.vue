<template>
  <img alt="Vue logo" src="./assets/logo.png" />
    <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Using VueJs for Bigfix web reports and dashboards</p>
    <button @click="increment">Count: {{ count }}</button>
    <button @click="nowRelevance">Now Relevance</button>
    <p>{{ relevance }}</p>
    <div id="#chart-01">
      <p>Chart demo</p>
      <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
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

    const msg = "Hello Vue!";

    const options = {}
    const  series = [44, 55, 41, 17, 15]

    return {
      count,
      relevance,
      msg,
      increment,
      nowRelevance,
      options,
      series
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

.vue-apexcharts {
 margin: auto;
  width: 50%;

  padding: 10px;
}
</style>
