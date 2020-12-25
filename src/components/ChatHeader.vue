<template>
  <div
    class="flex-none h-16 flex flex-row border-b justify-between items-center p-5"
  >
    <div class="flex flex-col w-1/2 space-y-1">
      <strong
        >{{ spaces.data[activeSpace].creator.firstName }}
        {{ spaces.data[activeSpace].creator.lastName }}</strong
      >
      <input
        type="text"
        v-model="spaces.data[activeSpace].subject"
        name="subject"
        placeholder="Type a subject here"
        class="text-sm outline-none border-b border-dashed border-gray-300 border-opacity-0 focus:border-opacity-100 hover:border-opacity-60 text-black placeholder-gray-600"
      />
    </div>
    <div class="flex flex-row items-center">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { spaces, activeSpace } from '/~/logics'
</script>
