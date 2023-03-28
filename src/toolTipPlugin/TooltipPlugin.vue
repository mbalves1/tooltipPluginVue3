<template>
  {{ text }}  
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>