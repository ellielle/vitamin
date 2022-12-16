<script setup lang="ts">
  defineProps<{
    msg: string;
  }>();
</script>

<template>
  <div class="greetings">
    <h1 class="text-10 font-500 mb-3">{{ msg }}</h1>
    <h2 class="text-5 font-300">
      <span>You’ve successfully created a project with </span>
      <a target="_blank" href="https://vitejs.dev/" >Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h2>
  </div>
</template>