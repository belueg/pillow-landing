<template>
  <div class="brands">
    <div class="brands-box">
      <i class="fab fa-accusoft brands-box-brand"></i>
      <p class="brands-box-title">First description since 2018</p>
    </div>
    <div class="brands-box">
      <i class="fab fa-acquisitions-incorporated brands-box-brand"></i>
      <p class="brands-box-title">Second description since 2015</p>
    </div>
    <div class="brands-box">
      <i class="fab fa-airbnb brands-box-brand"></i>
      <p class="brands-box-title">Thrid text since 2018</p>
    </div>
    <div class="brands-box">
      <i class="fab fa-angrycreative brands-box-brand"></i>
      <p class="brands-box-title">The last one since 2013</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brands'
}
</script>

<style lang="scss" scoped>
.brands {
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: space-evenly;
  align-items: center;
  &-box {
    text-align: center;
    color: #6d5990;
    font-weight: bolder;
    &-brand {
      font-size: 55px;
      &:hover {
        color: rgb(180, 54, 180);
      }
    }
  }
}
</style>
