<script setup lang="ts">
  import { toggleDark, isDark } from "@/composables";
</script>

<template>
  <img
    alt="Vue logo"
    class="logo"
    src="./assets/logo.svg"
    width="125"
    height="125"
  />

  <div>
    <HelloWorld msg="You did it!" />
    <nav>
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

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (hover: hover) {
    a:hover {
      color: yellow;
    }
  }

  nav {
    width: 100%;
    justify-content: center;
    margin-top: 2rem;
    display: flex;
  }

  nav a.router-link-exact-active {
    color: #42b883;
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
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
