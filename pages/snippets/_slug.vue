<template>
  <div>
    <SnippetView :snippet="snippet" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const snippet = await $content('snippets', params.slug).fetch()
    return { snippet }
  },
}
</script>
