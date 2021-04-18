<template>
  <div
    class="flex flex-row md:flex-col justify-between justify-items-center items-center p-4 bg-gray-200"
  >
    <div class="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-5">
      <router-link to="/me">
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </router-link>
      <router-link @click="openChatspace()" to="/" class="relative">
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
          />
        </svg>
        <div
          class="absolute top-0 right-0 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center"
        >5</div>
      </router-link>
    </div>
    <div class="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-5">
      <a href="#" @click="logout">
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
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { auth } from '~/plugins/firebase'
import { setActive } from '~/logic/space'

const router = useRouter()

const openChatspace = () => {
  setActive(null)
}

const logout = () => {
  auth.signOut()
    .then(() => {
      router.push('/login')
    })
    .catch((resulterr) => {
      // error.value = resulterr.message
    })
}
</script>
