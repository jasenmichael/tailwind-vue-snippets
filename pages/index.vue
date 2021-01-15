<template>
  <div
    class="mx-auto container p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6"
  >
    <div v-for="(snippet, i) in snippets" :key="i" class="">
      <nuxt-link :to="`/snippets/${snippet.slug}`">
        <SnippetCard :snippet="snippet" />
      </nuxt-link>
      <!-- <pre>{{ snippets }}</pre> -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const snippets = await $content('snippets')
      .only([
        'title',
        'slug',
        'description',
        'tags',
        'categories',
        'author',
        'image',
        'updatedAt',
        'author_img',
      ])
      .fetch()
      .catch((err) => {
        console.error(err)
        error({ statusCode: 404, message: 'WTF! Page not found' })
      })
    return { snippets }
  },
  created() {
    // console.log(this.$route)
  },
}
</script>
