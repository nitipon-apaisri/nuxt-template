module.exports = {
    theme: {
        extend: {
            lineHeight: {
                none: "0",
            },
            colors: {
                dim: "#171717",
            },
        },
    },
    content: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
};
