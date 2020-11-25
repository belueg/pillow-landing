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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  &-title {
    margin-top: 50px;
  }
  &-product-container {
    height: auto;
    width: 100%;
    padding: 20px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
