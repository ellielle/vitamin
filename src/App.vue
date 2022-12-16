<script setup lang="ts">
  import { toggleDark, isDark } from "@/composables";
</script>

<template>
  <img
    alt="Vue logo"
    class="block mx-auto"
    src="./assets/logo.svg"
    width="125"
    height="125"
  />

  <div>
    <HelloWorld msg="You did it!" />
    <nav class="justify-center w-auto mt-2rem flex">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <button @click="toggleDark()">
        <IconCarbonSun v-if="isDark" class="animate-spin" />
        <IconCarbonMoon v-else class="animate-bounce" />
      </button>
    </nav>
  </div>

  <RouterView />
</template>

<style>
  @import "./main.css";
  @media (hover: hover) {
    .dark a:hover {
      color: white;
      transition: color 0.5s ease-out;
    }
  }

  .dark nav a.router-link-exact-active {
    color: #42b883;
  }

  nav a, nav button {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid #ffffff;
    border-radius: 0;
  }

  nav a:first-of-type {
    border: 0;
  }
</style>
