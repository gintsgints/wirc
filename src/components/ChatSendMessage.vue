<template>
  <form v-on:submit.prevent class="flex flex-row items-center flex-none h-20 md:h-40 p-3 md:p-5">
    <div class="flex-grow">
      <textarea
        @keydown.enter.exact.prevent
        @keyup.enter.exact="send"
        @keydown.enter.shift.exact="newline"
        v-model="text"
        class="w-full h-full rounded p-2 md:p-4 shadow-lg outline-none border border-blue-600 border-opacity-0 hover:border-opacity-80"
      ></textarea>
    </div>
    <button
      type="submit"
      @click="send()"
      class="h-full p-3 md:p-5 grid justify-items-center items-center"
    >
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
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { activeSpace } from '../logic/space'
import { addMessage } from '../plugins/firebase'

const text = ref('')

const send = () => {
  addMessage(activeSpace.value, { message: text.value })
  text.value = ''
}

const newline = () => {
  text.value = `${text.value}\n`
}
</script>
