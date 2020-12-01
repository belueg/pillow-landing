<template>
  <div class="formDetails">
    <div class="formDetails-description">
      <h3>
        {{ description.title }}
      </h3>
      <p>{{ description.description }}</p>
    </div>
    <form class="formDetails-form">
      <label for="type">Type</label>
      <select name="type" id="type">
        <option value="single">Single Pack</option>
        <option value="double">Double Pack</option>
      </select>
      <br />
      <label for="size">Size</label>
      <select name="size" id="size">
        <option value="standard">Standard $59</option>
        <option value="king">King $77</option>
      </select>
      <br />
      <label for="quantity">Quantity</label>
      <select name="quantity" id="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <span>Ready to ship, free shipping and returns</span>
      <button>Buy now!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormDetails',
  props: ['description']
}
</script>

<style lang="scss" scoped>
.formDetails {
  background-color: white;
  width: 400px;
  height: 490px;
  box-shadow: 0px 3px 7px -1px #9e8b97;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 40px;
  &-description {
    height: 120px;
    text-align: left;
    h3 {
      color: purple;
      font-size: 25px;
      margin: 0;
    }
  }
  &-form {
    height: 350px;
    text-align: left;
    label,
    select {
      display: block;
    }
    select {
      width: 100%;
      border: none;
      border-bottom: 1px solid black;
      margin: 8px 0px 10px 0px;
      &:focus {
        outline: none;
      }
    }
    span {
      color: rgb(80, 33, 80);
      font-size: 15px;
    }
    button {
      margin: 20px 0px;
      width: 100%;
      height: 40px;
      background-color: #6d5990;
      color: white;
      border: none;
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .formDetails {
    width: 380px;
  }
}

@media screen and (max-width: 400px) {
  .formDetails {
    width: 315px;
  }
}
</style>
