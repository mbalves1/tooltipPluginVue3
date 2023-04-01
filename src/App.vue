<template>
  <h3>
    Custom Vue js 3 plugin  
  </h3>
  <input type="text" v-model="tooltiptext"> <br />
  <span>Hover Over me
    <TooltipPlugin
      :text="tooltiptext"
      :options="{placement: 'left'}"
    />
  </span>
  <br />
  <span>And me
    <TooltipPlugin
      :text="tooltiptext"
    />
  </span>
</template>

<script setup>
import { ref } from "vue"

const tooltiptext = ref("Hello World")


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
</style>
