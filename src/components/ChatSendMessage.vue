<template>
  <form
    v-on:submit.prevent
    class="flex flex-row items-center flex-none h-20 md:h-40 p-3 md:p-5"
  >
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
      <Icon icon="carbon:send" style="font-size: 32px" />
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { activeSpace, addMessage } from '/~/logics'

const text = ref('')

const send = () => {
  addMessage(activeSpace.value, { message: text.value })
  text.value = ''
}

const newline = () => {
  text.value = `${text.value}\n`
}
</script>
