// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/icon", "@nuxtjs/i18n"],
    css: ["@/assets/css/main.css"],
    i18n: {
        vueI18n: "./i18n.config.ts",
    },
});
