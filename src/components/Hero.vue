<template>
  <div class="hero">
    <div class="hero-title">
      <h1 class="title">Pillow</h1>
    </div>
    <div class="hero-main">
      <h2 class="hero-main-subtitle">America's #1 Rated Pillows Brand</h2>
      <RouterLink to="/shop">
        <button class="hero-main-button">
          Shop Now
        </button>
      </RouterLink>
    </div>

    <div class="hero-descriptions">
      <div class="hero-descriptions-box">
        <i class="far fa-heart"></i>
        <p>First description</p>
      </div>
      <div class="hero-descriptions-box">
        <i class="fas fa-bed"></i>
        <p>Second description</p>
      </div>
      <div class="hero-descriptions-box">
        <i class="fas fa-shipping-fast"></i>
        <p>Thrid text</p>
      </div>
      <div class="hero-descriptions-box">
        <i class="far fa-money-bill-alt"></i>
        <p>The last one</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped lang="scss">
.hero {
  color: #472484;
  position: relative;
  height: 80%;
  background: url('../assets/bed.jpg');
  background-position: center bottom;
  background-repeat: no-repeat;

  &-title {
    height: 20%;
    .title {
      margin: 0;
      text-align: center;
      padding-top: 50px;
      font-size: 50px;
    }
  }
  &-main {
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-subtitle {
      background-color: #ffffff5b;
      width: fit-content;
      padding: 10px;
      font-size: 30px;
    }

    &-button {
      padding: 10px;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      background-color: #6d5990;
      color: white;
      &:focus {
        outline: none;
      }
    }
  }

  &-descriptions {
    height: 20%;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: #a27be580;
    color: white;

    &-box {
      text-align: center;

      i {
        font-size: 35px;
      }
    }
  }
}
</style>
