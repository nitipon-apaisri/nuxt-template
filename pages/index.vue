<script setup lang="ts">
const colorMode = useColorMode();
const route = useRoute();
const changeColor = () =>
  (colorMode.preference = colorMode.value === "light" ? "dark" : "light");
</script>

<template>
  <div>
    <div>
      <button
        aria-label="Color Mode"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent bg-teal-800 dark:bg-white mt-4 lg:mt-0"
        @click="changeColor"
      >
        <ColorScheme placeholder="...">
          <Icon
            v-if="colorMode.value === 'dark'"
            name="heroicons-outline:moon"
            class="text-xl text-black"
          />
          <Icon v-else name="heroicons-outline:sun" class="text-xl" />
        </ColorScheme>
      </button>
    </div>
    <!-- <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a> -->
  </div>
</template>
