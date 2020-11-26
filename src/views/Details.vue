<template>
  <div class="details">
    <h2>Details page</h2>
    <div class="details-container">
      <div class="details-img-container">
        <img :src="pillowDetails.image" alt="details-img" class="details-img" />
      </div>
      <FormDetails :description="pillowDetails" class="details-component" />
    </div>
  </div>
</template>

<script>
import FormDetails from '@/components/FormDetails'

export default {
  name: 'Details',
  components: {
    FormDetails
  },
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
  text-align: center;
  height: calc(100vh - 80px);
  .details-container {
    margin-top: 60px;
    display: flex;
    justify-content: space-evenly;
    height: 80%;
    .details-img-container {
      width: 40%;
      padding-bottom: 0;
      .details-img {
        margin-right: 40px;
        width: 100%;
        min-width: 615px;
      }

      .details-component {
        width: 30%;
      }
    }
  }
}

@media screen and(max-width: 1280px) {
  .details {
    height: 100%;
    .details-container {
      align-items: center;
      flex-direction: column;
      height: auto;
      .details-img-container {
        width: 80%;
        margin-bottom: 20px;
        .details-img {
          min-width: 100%;
        }
      }
    }
  }
}
</style>
