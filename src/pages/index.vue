<template>
  <div class="flex flex-row h-screen bg-gray-100">
    <div
      class="flex flex-col flex-none justify-between items-center w-16 p-4 bg-gray-200"
    >
      <div class="flex flex-col space-y-2">
        <a href="">
          <div class="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
      </div>
      <div class="flex flex-col space-y-2">
        <a href="">
          <div class="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
      </div>
    </div>
    <div class="w-64 bg-gray-100 p-4 flex flex-col flex-none space-y-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="font-semibold text-2xl">Inbox</h1>
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <div class="bg-red-200 h-64"></div>
      <div class="bg-red-200 h-64"></div>
    </div>
    <div class="flex flex-auto bg-white rounded-tl-xl shadow-xl">
      <div class="flex flex-col w-1/5">
        <div class="flex-none h-24">top</div>
        <div class="flex-auto overflow-y-auto">
          <a v-for="n in 100" v-bind:key="n" class="block h-16 border-b p-4"
            >conversation card<br
          /></a>
        </div>
      </div>
      <div class="w-4/5 bg-green-200">center</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${name.value}`)
}

const { t } = useI18n()
</script>
