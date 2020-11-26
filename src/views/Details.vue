<template>
  <div class="details">
    <h2>Details page!</h2>
    {{ pillowDetails }}
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      descriptionID: this.$route.params.id
    }
  },
  computed: {
    pillowDetails() {
      return this.$store.state.pillows.find(
        pillow => pillow.id == this.descriptionID
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.details {
}
</style>
