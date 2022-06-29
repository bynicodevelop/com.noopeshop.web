import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content'
    ],

    publicRuntimeConfig: {
        SITE_NAME: process.env.SITE_NAME,
        SITE_URL: process.env.SITE_URL,
        PRIVACY_EMAIL: process.env.PRIVACY_EMAIL,
        GOOGLE_PLAY_URL: process.env.GOOGLE_PLAY_URL,
        PIXEL_ID: process.env.PIXEL_ID,
    },

    serverRuntimeConfig: {
        SPARKPOST_API_KEY: process.env.SPARKPOST_API_KEY,
    }
})
