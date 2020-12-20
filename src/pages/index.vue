<template>
  <div class="flex flex-row h-screen bg-gray-200">
    <div
      class="flex flex-col flex-none justify-between items-center w-16 p-4 bg-gray-200"
    >
      <div class="flex flex-col space-y-5">
        <a class="relative">
          <svg
            class="w-9 h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          <div
            class="absolute top-0 right-0 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center"
          >
            5
          </div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-9 h-9"></div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-9 h-9"></div>
        </a>
      </div>
      <div class="flex flex-col space-y-5">
        <a href="">
          <div class="rounded-full bg-gray-400 w-9 h-9"></div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-9 h-9"></div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-9 h-9"></div>
        </a>
      </div>
    </div>
    <div class="flex flex-auto bg-white rounded-tl-xl shadow-xl">
      <div class="flex flex-none flex-col w-1/5 p-2">
        <div class="flex flex-none justify-between items-center pb-8 mb-4">
          <h1 class="font-semibold pl-2 text-2xl">Chat places</h1>
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
            <div
              :class="
                n === 2
                  ? 'bg-blue-200 border-blue-500'
                  : 'border-transparent hover:bg-gray-100'
              "
              class="border-l-2 p-3 space-y-4"
            >
              <div class="flex flex-row items-center">
                <svg
                  class="w-5 h-5 mr-2"
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
                  ></path>
                </svg>
                <strong class="flex-grow">Nicola Tesla</strong>
                <div class="text-sm text-gray-600">5hr</div>
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
                  ></path>
                </svg>
                <div class="flex-grow truncate text-xs">
                  some message content sdfgf assdfga sdfas ddfas fggaseefawefe
                  awwerrf awe fzerf asdfa dsfasdf asdf asdfa sdfasdf a
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="w-4/5 border-l border-gray-300 flex flex-col">
        <div
          class="flex-none h-16 flex flex-row border-b justify-between items-center p-5"
        >
          <div class="flex flex-col space-y-1">
            <strong>Nikola Tesla</strong>
            <input
              type="text"
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
        <div
          class="flex-auto flex flex-col overflow-auto"
          style="background-image: url(bg.png)"
        >
          <div class="flex-auto overflow-auto h-30 p-5">
            <div
              v-for="n in 30"
              v-bind:key="n"
              :class="n % 2 ? '' : 'flex-row-reverse space-x-reverse'"
              class="flex flex-row space-x-2"
            >
              <svg
                class="w-6 h-6"
                flex-none
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
                ></path>
              </svg>
              <div class="flex flex-col">
                <div class="bg-blue-200 rounded-lg p-3">
                  Some conversation text here
                </div>
                <div class="text-sm text-gray-500">5hr ago</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center flex-none h-40 p-5 space-x-5">
            <textarea
              class="outline-none h-full flex-auto border border-blue-600 border-opacity-0 hover:border-opacity-80 rounded p-4 shadow-lg"
            ></textarea>
            <a class="block flex-none w-10">
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
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
