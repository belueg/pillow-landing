<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
