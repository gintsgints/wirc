<template>
  <div class="flex flex-col bg-white p-2">
    <div class="flex flex-none justify-between items-center pb-8 mb-4">
      <h1 class="font-semibold pl-2 text-2xl">WIrc</h1>
      <Search v-model="searchTerm" />
    </div>
    <div class="flex-auto overflow-y-auto">
      <a
        v-for="(space, index) in spaces"
        :key="space.id"
        class="block border-b"
        @click="setActive(space)"
      >
        <div
          v-if="searchTerm === '' || space.subject.indexOf(searchTerm) > 0"
          :class="
            activeSpace && space.id === activeSpace.id
              ? 'bg-blue-200 border-blue-500'
              : 'border-transparent hover:bg-gray-100'
          "
          class="border-l-2 p-3 space-y-4"
        >
          <div class="flex flex-row items-center">
            <UserIcon :user="space.creator" class="w-5 h-5 mr-2" />
            <strong class="flex-grow">
              <UserFullName :user="space.creator" />
            </strong>
            <div class="text-sm text-gray-600">{{ moment(new Date()).to(space.created.toDate()) }}</div>
          </div>
          <div class="flex flex-row items-center">
            <svg
              class="flex-none w-3 h-3 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div class="flex-grow truncate text-xs">
              {{
                space.messages && space.messages.length > 0
                  ? space.messages[0].message
                  : space.subject
              }}
            </div>
          </div>
        </div>
      </a>
      <button @click="createSpace()" class="w-full text-2xl bg-gray-100">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { ref } from '@vue/reactivity'
import { loadSpaces, spaces, activeSpace, setActive, createSpace } from '~/logic/space'
import { onMounted } from '@vue/runtime-core'

const searchTerm = ref('')

onMounted(() => {
  loadSpaces()
})

</script>
