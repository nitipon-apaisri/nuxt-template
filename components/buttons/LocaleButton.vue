<script setup lang="ts">
const { locale } = useI18n();
const setLocale = (newLocale: string) => {
  locale.value = newLocale;
};

onBeforeMount(() => {
  const localeButton = document.getElementById(locale.value);
  if (localeButton) {
    localeButton.style.color = "white";
  }
});

watch(locale, (newLocale: string) => {
  const localeButton = document.getElementById(newLocale);
  if (localeButton) {
    localeButton.style.color = "white";
  }
  const otherLocaleButton = document.getElementById(
    newLocale === "en" ? "th" : "en"
  );
  if (otherLocaleButton) {
    otherLocaleButton.style.color = "gray";
  }
});
</script>

<template>
  <div>
    <button @click="setLocale('en')" id="en" class="dark:text-gray-400">
      EN
    </button>
    <span class="dark:text-white"> | </span>
    <button @click="setLocale('th')" id="th" class="dark:text-gray-400">
      TH
    </button>
  </div>
</template>

