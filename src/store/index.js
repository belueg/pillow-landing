import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pillows: [
      {
        tag: 'most popular',
        title: 'Original Pillow',
        description:
          "A down-alternative pillow, that's supportive with a touch of fluff.",
        image:
          'https://caspercontent.imgix.net/1S6PgKNPETkWRMV3RcChLa/2bcb536575ee623753ecc07f4c0ca6d1/casper-pillow-material-inset.jpg?auto=compress,format&q=65&w=600',
        price: '$59'
      },
      {
        tag: 'most supportive',
        title: 'Foam Pillow',
        description:
          'Three layers of supportive foam contour to the shape of your neck for proper alignment.',
        image:
          'https://caspercontent.imgix.net/1nf6SPBLeD0YK4lstn1DHQ/a7969aee87fed1b20bf0a4ff0402d47e/foam-pillow-material-inset.jpg?auto=compress,format&q=65&w=600',
        price: '$80'
      },
      {
        tag: 'Premium',
        title: 'Down Pillow',
        description: 'An airy, all-natural down fill for plushy comfort.',
        image:
          'https://caspercontent.imgix.net/6h2ErsVJ3mYePm1wk8eBwN/aeec0370badde8af72898f985e59dc89/down-pillow-material-inset.jpg?auto=compress,format&q=65&w=600',
        price: '$113'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
