<template>
  <div class="navbar">
    <router-link to="/"><h2 class="navbar-title">Pillow</h2></router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar {
  color: purple;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  a {
    text-decoration: none;
    color: purple;
    &:hover {
      color: rgb(180, 54, 180);
    }
  }
  &-title {
    margin: 0;
    font-weight: bolder;
  }
}
</style>
