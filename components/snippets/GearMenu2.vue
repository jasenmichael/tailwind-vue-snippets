<!-- title: Gear Menu 2 -->
<!-- description: blah blah -->
<!-- tags: ['nuxt', 'nuxtjs', 'tailwindcss', 'vue', 'vuejs', 'snippets'] -->
<!-- categories: ['nuxt', 'nuxtjs', 'tailwindcss', 'vue', 'vuejs', 'snippets'] -->
<!-- author: jasenmichael -->
<!-- author_img: /img/jasenmichael_profile.jpg -->
<!-- image: /img/GearMenu.gif -->
<template>
  <div
    class="bg-gray-900 h-80 w-full text-white flex static items-center justify-center overflow-hidden"
  >
    <!-- settings button -->
    <button
      class="z-50 block focus:outline-none outline-none overflow-hidden text-gray-300 transform hover:scale-125 hover:rotate-90 hover:text-gray-100 transition-all ease-in-out duration-1000 rounded-full"
      @click="settingsMenu = !settingsMenu"
    >
      <svg
        class="w-16 hover:animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </button>
    <!-- transparent layer when menu open -->
    <button
      v-show="settingsMenu"
      tabindex="-1"
      class="fixed w-full h-full inset-0 cursor-default z-20 opacity-0"
      @click="settingsMenu = false"
    ></button>
    <!-- settings menu -->
    <div
      v-show="settingsMenu"
      class="ml-64 mt-36 items-center absolute inline-block rounded-md z-50 border-2 py-2 border-gray-500 text-gray-800 shadow-lg bg-gray-200"
    >
      <h3 class="flex justify-center font-bold">Settings</h3>
      <hr class="border-2 rounded-full mx-3 border-gray-400" />
      <ul class="pt-1 font-semibold text-gray-900">
        <!-- settings options -->
        <li
          v-show="!cameraEnabled"
          class="settings-menu-item"
          @click="cameraEnabled = !cameraEnabled"
        >
          Enable Camera
        </li>
        <li
          v-show="cameraEnabled"
          class="settings-menu-item"
          @click="cameraEnabled = !cameraEnabled"
        >
          Disable Camera
        </li>
        <li
          v-show="!recording"
          class="settings-menu-item"
          @click="recording = !recording"
        >
          Record Source
        </li>
        <li
          v-show="recording"
          class="settings-menu-item"
          @click="recording = !recording"
        >
          Stop Recording Source
        </li>
        <li
          v-show="!screenOrWindow"
          class="settings-menu-item"
          @click="screenOrWindow = !screenOrWindow"
        >
          Share Screen or Window
        </li>
        <li
          v-show="screenOrWindow"
          class="settings-menu-item"
          @click="screenOrWindow = !screenOrWindow"
        >
          Stop Sharing Screen or Window
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      settingsMenu: false,
      cameraEnabled: false,
      recording: false,
      screenOrWindow: null,
    }
  },
}
</script>

<style>
.gutter {
  @apply bg-gray-900;

  background-image: none !important;
}
.settings-menu-item {
  @apply cursor-pointer hover:bg-gray-700 hover:text-white mx-1 py-2 px-4;
}
</style>
