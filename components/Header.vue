<script setup lang="ts">
const colorMode = useColorMode();
const route = useRoute();
const changeColor = () =>
  (colorMode.preference = colorMode.value === "light" ? "dark" : "light");
</script>

<template>
  <header>
    <div>
      <div className="logo"></div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
    <div class="justify-self-end">
      <button
        aria-label="Color Mode"
        class="inline-block text-sm px-2 py-2 leading-none rounded-full text-white border-white hover:border-transparent bg-black dark:bg-white"
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
  </header>
</template>