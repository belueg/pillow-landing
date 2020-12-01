<template>
  <div class="product">
    <div class="product-description">
      <span class="product-description-tag">{{ tag }}</span>
      <h4 class="product-description-title">{{ title }}</h4>
      <p class="product-description-text">{{ shortDescription }}</p>
    </div>
    <img class="product-img" :src="img" alt="pillow image" />
    <div class="product-price">
      <p class="product-price-title">
        From
        <strong>{{ price }}</strong>
      </p>
      <router-link :to="{ path: '/details/' + id }">
        <button class="product-price-button">Shop</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['tag', 'title', 'shortDescription', 'price', 'img', 'id']
}
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  background: white;
  z-index: 5;
  box-shadow: 0px 3px 7px -1px #9e8b97;
  border-radius: 5px;
  padding: 10px 0;
  width: 350px;
  margin-bottom: 20px;
  margin-right: 60px;
  height: 480px;
  &-description {
    text-align: center;
    font-size: 16px;
    &-title {
      color: purple;
    }
    &-tag {
      height: 50px;
      background-color: #ffe3ff;
      padding: 2px 8px;
      border-radius: 10px;
    }
  }
  &-img {
    width: 100%;
  }
  &-price {
    position: absolute;
    bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &-button {
      padding: 0 20px;
      height: 30px;
      background-color: #6d5990;
      border: none;
      border-radius: 5px;
      color: white;
      &:focus {
        outline: none;
      }
    }
    &-title {
      margin: 0;
    }
  }
}

@media screen and (max-width: 750px) {
  .product {
    margin-right: 0;
  }
}
</style>
