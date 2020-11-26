<template>
  <div class="formDetails">
    <h1>
      Hello from form details
    </h1>
    <p>{{ description }}</p>
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
  width: 400px;
  height: 490px;
  border: 1px solid black;
}
</style>
