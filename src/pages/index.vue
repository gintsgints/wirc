<template>
  <div class="flex flex-row h-screen bg-gray-200">
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
    <div class="flex flex-auto bg-white rounded-tl-xl shadow-xl">
      <div class="flex flex-none flex-col w-1/5 p-2">
        <div class="flex flex-none justify-between items-center pb-8 mb-4">
          <h1 class="font-semibold pl-2 text-2xl">Chat</h1>
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
        <div class="flex-auto overflow-y-auto">
          <a v-for="n in 100" v-bind:key="n" class="block border-b">
            <div class="border-l-2 border-blue-500 p-2">
              <div class="flex flex-row items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
                <strong class="flex-grow">Nicola Tesla</strong>
                <span>b</span>
              </div>
              <div class="flex flex-row items-center">
                <svg
                  class="w-3 h-3 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
                <div class="flex-grow">
                  some message content sdfgf assdfga sdfas ddfas fggaseefawefe
                  awwerrf awe fzerf asdfa dsfasdf asdf asdfa sdfasdf a
                </div>
              </div>
            </div>
          </a>
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
