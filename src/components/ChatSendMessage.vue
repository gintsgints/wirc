<template>
  <div class="flex flex-row items-center flex-none h-20 md:h-40 p-3 md:p-5">
    <div class="flex-grow">
      <textarea
        v-model="text"
        class="w-full h-full rounded p-2 md:p-4 shadow-lg outline-none border border-blue-600 border-opacity-0 hover:border-opacity-80"
      ></textarea>
    </div>
    <a
      @click="addMessage()"
      class="h-full p-3 md:p-5 grid justify-items-center items-center"
    >
      <Icon icon="carbon:send" style="font-size: 32px" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { spaces, activeSpace, me } from '/~/logics'

const text = ref('')

const addMessage = () => {
  spaces.data[activeSpace.value].messages.push({
    when: '0sec',
    message: text.value,
    user: me
  })
  text.value = ''
}
</script>