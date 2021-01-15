<template>
  <div
    class="flex flex-col max-w-md w-full h-full shadow-md hover:shadow-xl transform transition-all hover:scale-101 border-gray-300 border-2 rounded-sm"
  >
    <!-- <pre>{{ snippet }}</pre> -->
    <!-- image -->
    <div
      class="h-48 lg:h-72 w-full bg-cover rounded-sm text-center overflow-hidden"
      :style="`
          background-image: url('${
            snippet.image || `https://via.placeholder.com/1/000000`
          }');
        `"
      :title="`image of ${snippet.title} snippet`"
    ></div>
    <!-- content wrapper -->
    <div
      class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8 flex flex-col">
        <!-- members only -->
        <div>
          <p class="text-sm text-grey-dark flex items-center">
            <svg
              class="text-grey w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
              />
            </svg>
            Members only
          </p>
        </div>
        <!-- title -->
        <div class="text-black font-bold text-xl mb-2">
          {{ snippet.title }}
        </div>
        <!-- desctiption -->
        <div class="flex-grow">
          <p class="text-grey-darker text-base flex-grow">
            {{ snippet.description }}
          </p>
        </div>
        <!-- tags -->
        <div>
          <p class="mt-auto">Tags: {{ snippet.tags.join(', ') }}</p>
        </div>
        <!-- categories -->
        <div>
          <p>Categories: {{ snippet.categories.join(', ') }}</p>
        </div>
      </div>
      <!-- author -->
      <div class="flex items-center">
        <img
          v-if="snippet.author_img"
          class="w-10 h-10 rounded-full mr-4"
          :src="snippet.author_img"
          :alt="`Avatar of ${snippet.author}`"
        />
        <div class="text-sm">
          <p class="text-black leading-none">by: {{ snippet.author }}</p>
          <p class="text-grey-dark">
            Posted: {{ new Date(snippet.updatedAt).toLocaleDateString() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    snippet: {
      type: Object,
      default() {
        return null
      },
    },
  },
}
</script>
