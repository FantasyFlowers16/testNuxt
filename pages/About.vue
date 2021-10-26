<template>
  <div>
    <NuxtLink to="/">
      <button>На главную</button>
    </NuxtLink>
    <About />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }

  // computed: {
  //   ...mapGetters({
  //     catalog: 'getCatalog'
  //   })
  // }
  // async fetch () {
  //   this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
  // }
}
</script>
