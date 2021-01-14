<template>
  <div class="mx-24">
    <!-- <pre>{{ snippet }}</pre> -->
    <p>
      Author: {{ snippet.author }}
      <span v-for="(source, i) in snippet.author_urls" :key="i">
        <a :href="source.url" target="_blank">
          {{ source.name }}
        </a>
      </span>
    </p>
    <h3 class="text-3xl text-gray-900">{{ snippet.title }}</h3>
    <p class="">{{ snippet.description }}</p>
    <p>Tags: {{ snippet.tags }}</p>
    <p>Categories: {{ snippet.categories }}</p>
    <div class="border-2 border-gray-300 shadow-sm">
      <component :is="snippet.slug" />
      <div class="h-60">
        <nuxt-content class="yoyo" :document="snippet" />
      </div>
    </div>
    <!-- <pre>{{ snippet }}</pre> -->
  </div>
</template>

<script>
import LoadSnippets from '~/components/LoadSnippets.js'
import Prism from '~/plugins/prism'

export default {
  components: LoadSnippets,
  props: {
    snippet: {
      type: Object,
      default() {
        return null
      },
    },
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style>
.nuxt-content pre {
  max-height: 25em !important;
}
.nuxt-content-highlight {
  @apply static;
}
.nuxt-content-highlight .filename {
  @apply absolute text-gray-400 font-mono z-10 ml-4 my-1 text-sm;
}

.nuxt-content .toolbar-item span {
  visibility: hidden;
  position: relative;
}
.nuxt-content .toolbar-item span::after {
  visibility: visible;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0.5rem;
  color: #bbb;
  font-size: 0.8em;
  padding: 0 0.5em;
  background: #f5f2f0;
  background: rgba(224, 224, 224, 0.2);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.8em;
  content: 'VUE';
}
</style>
