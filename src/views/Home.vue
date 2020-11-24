<template>
  <div class="home">
    <Hero />
    <Brands />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero'
import Brands from '@/components/Brands'
export default {
  name: 'Home',
  components: {
    Hero,
    Brands
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>
