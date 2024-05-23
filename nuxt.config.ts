// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-icon', 
    '@nuxt/content'
  ],

  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts','js','css','vue','py'] 
    }
  }
})
