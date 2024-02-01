const modules = [
  "@nuxt/test-utils/module",
  "nuxt-primevue",
  "@nuxtjs/i18n",
  "@nuxt/image",
  "@nuxtjs/google-fonts",
  process.env.NODE_ENV !== "test" && "@pinia/nuxt",
];

export default defineNuxtConfig({
  app: {
    head: { link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }] },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
  },
  css: [
    "primevue/resources/themes/lara-dark-blue/theme.css",
    "bootstrap/dist/css/bootstrap-grid.css",
    "bootstrap/dist/css/bootstrap-utilities.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "./assets/scss/custom.scss",
    "./assets/css/google-fonts.css",
  ],
  devtools: { enabled: true },
  i18n: { vueI18n: "./modules/i18n/i18n.config.ts" },
  image: { domains: ["antoinezanardi.fr", "appspot.com"] },
  modules,
  pinia: { storesDirs: [] },
  primevue: {
    components: {
      prefix: "VuePrime",
      include: [
        "Button",
        "Divider",
        "Menu",
        "ProgressSpinner",
        "Accordion",
        "AccordionTab",
        "Badge",
      ],
    },
    directives: {
      prefix: "p-",
      include: [
        "Tooltip",
        "Ripple",
      ],
    },
    composables: { include: [] },
    options: { ripple: true },
  },
  googleFonts: {
    display: "swap",
    families: { Quicksand: { wght: "300..700" } },
    outputDir: "assets/fonts",
    stylePath: "../css/google-fonts.css",
    fontsDir: "./",
    preload: true,
    text: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ0123456789.,;:!?'\"™",
    overwriting: false,
  },
  runtimeConfig: {
    public: {
      defaultLocale: "en",
      werewolvesAssistantApi: { baseUrl: "" },
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});