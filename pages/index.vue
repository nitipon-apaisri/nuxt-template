<script setup lang="ts">
const { locale } = useI18n();
const setLocale = (newLocale: string) => {
  locale.value = newLocale;
};
</script>

<template>
  <div class="text-center">
    <p>{{ $t("welcome") }}</p>
  </div>
</template>
