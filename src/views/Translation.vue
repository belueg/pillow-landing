<template>
  <div class="Translation">
    <SwitchLocale />
    <h1>{{ $t('main.welcome', { company: 'Pillow' }) }}</h1>
    <h3>{{ $tc('main.messages', 2, { count: 3 }) }}</h3>
  </div>
</template>

<script>
import SwitchLocale from '@/components/SwitchLocale'
export default {
  name: 'Translation',
  components: {
    SwitchLocale
  }
}
</script>

<style lang="scss" scoped>
.Translation {
}
</style>
