<template>
  <span ref="tooltip"></span>
</template>

<script setup>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { defineProps, onMounted, onUnmounted, onUpdated, ref, inject } from 'vue';
import { tooltipOptionsInject } from "./index"

const props = defineProps({
  text: {type: String, required: true},
  options: {type: Object}
})

const tooltip = ref(null)

let tippyInstance = null

function initTippy() {
  if(tippyInstance) {
    tippyInstance.destroy()
  }
  tippyInstance = tippy(tooltip.value.parentNode, {
    ...inject(tooltipOptionsInject),
    content: props.text,
    ...props.options,
  })
}

onMounted(initTippy)
onUpdated(initTippy)
onUnmounted(() => { tippyInstance.destroy()})

</script>
<style scoped>
span {
  margin: 0;
  padding: 0;
}

</style>