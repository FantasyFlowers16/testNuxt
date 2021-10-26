<template>
  <div>
About Component
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
    this.mountains = await this.$axios.get('https://api.nuxtjs.dev/posts')
    this.load = false
  },
  fetchOnServer: false

  // async fetch () {
  //   this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
  // }
}
</script>
<style lang="sass">

</style>
