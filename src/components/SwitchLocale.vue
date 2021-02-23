<template>
  <div class="SwitchLocale">
    <ul>
      <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
        {{ locale }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SwitchLocale',
  data() {
    return {
      locales: process.env.VUE_APP_I18N_LOCALES_LIST.split(',')
    }
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.SwitchLocale {
}
</style>
