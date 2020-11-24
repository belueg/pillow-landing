<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero'
export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>
