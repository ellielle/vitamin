<script setup lang="ts">
  import { toggleDark, isDark } from "@/composables";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="toggleDark()">
          <IconCarbonSun v-if="isDark" class="animate-spin"/>
          <IconCarbonMoon v-else class="animate-bounce"/>
        </button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
  @import "@/assets/base.css";

  .dark button {
    color: white;
  }

  .dark button:hover {
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }

  .poke-sprite {
    display: flex;
    place-items: flex-end;
  }

  button {
    align-self: end;
    color: black;
    background: none;
    border: none;
  }

  #app {
    place-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
  }

  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  a {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }

  @media (hover: hover) {
    a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
    display: flex;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a, nav button {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    body {
      display: flex;
      place-items: center;
    }

    #app {
      display: grid;
      grid-template-rows: 1fr 1fr;
      padding: 0 2rem;
    }

    header {
      display: flex;
      place-items: center;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>
