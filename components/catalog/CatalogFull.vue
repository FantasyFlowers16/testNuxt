<template>
  <div>
    <div v-if="!load" class="post">
      <div v-for="post in mountains.data" :key="post.id" class="post__item">
        <div class="post__img-container">
          <img class="post__img" :src="post.image" alt="img">
        </div>
        <div class="post__title">{{post.continent}}</div>
        <div class="post__text">{{post.description}}</div>
      </div>
    </div>
    <div v-else class="loader">
      <div class="loader__inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mountains: [],
      someOtherData: 0,
      titlePage: 'Catalog Mountains',
      load: false
    }
  },
  head () {
    return {
      title: this.titlePage,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description mountains',
          name: 'description mountains',
          content: 'My custom description mountains'
        }
      ]
    }
  },
  async fetch () {
    this.load = true
    this.mountains = await this.$axios
      .get('https://api.nuxtjs.dev/posts')
      // .then(response => (console.log(response)))
      // .cath(error => (console.log(error)));
    this.load = false
  }

  // methods: {
  //   ...mapActions({
  //     updateCatalog: 'updateCatalog'
  //   })
  // }

  // async fetch () {
  //   this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
  // }
}
</script>
<style lang="sass">
.post
  display: flex
  flex-wrap: wrap
  &__img-container
    max-height: 400px
    overflow: hidden
  &__item
    width: 33%
  &__title
    margin: 20px 0
    font-weight: bold
    font-size: 20px
  &__text
    margin: 30px 0
.loader
  position: fixed
  width: 100%
  height: 100vh
  top: 0
  left: 0
  background: white
  display: flex
  align-items: center
  justify-content: center
  &__inner
    border: 16px solid lightGray
    border-top: 16px solid #3498db
    border-radius: 50%
    width: 120px
    height: 120px
    animation: spin 2s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

</style>
