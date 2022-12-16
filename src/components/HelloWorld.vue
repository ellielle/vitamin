<script setup lang="ts">
  defineProps<{
    msg: string;
  }>();
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <h2>
      <span class="">You’ve successfully created a project with </span>
      <a target="_blank" href="https://vitejs.dev/" >Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h2>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h2 {
    font-size: 1.2rem;
  }

  .greetings {
    text-align: center;
  }
</style>
