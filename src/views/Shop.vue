<template>
  <div class="shop">
    <h1 class="shop-title">The pillows of your dreams are here</h1>
    <div class="shop-product-container">
      <div v-for="pillow in pillows" :key="pillow.id">
        <Product
          :tag="pillow.tag"
          :title="pillow.title"
          :shortDescription="pillow.description"
          :price="pillow.price"
          :img="pillow.image"
          :id="pillow.id"
        ></Product>
      </div>
    </div>
    <div class="shop-oval"></div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
  name: 'Shop',
  components: {
    Product
  },
  computed: {
    pillows() {
      return this.$store.state.pillows
    }
  }
}
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 55px);
  overflow: hidden;
  position: relative;
  &-title {
    margin-top: 50px;
  }
  &-product-container {
    z-index: 2;
    height: auto;
    width: 100%;
    padding: 20px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .shop-oval {
    width: 100%;
    height: 60%;
    background: #e2d6f7;
    border-radius: 50% 50% 0% 0%;
    position: absolute;
    bottom: -50px;
    z-index: -1;
  }
}
@media screen and (max-width: 1270px) {
  .shop {
    height: auto;
  }
}

@media screen and(max-width: 1135px) {
  .shop {
    &-oval {
      display: none;
    }
  }
}
</style>
