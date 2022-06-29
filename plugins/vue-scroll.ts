import VueScrollTo from 'vue-scrollto';

export default defineNuxtPlugin(async (nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollTo);
})