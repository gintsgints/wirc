<template>
  <form v-on:submit.prevent class="flex flex-row items-center flex-none h-20 md:h-40 p-3 md:p-5">
    <div class="flex-grow static">
      <div v-if="iconText" class="absolute bottom-40 bg-gray-100">
        <div
          class="p-2"
          v-for="(value, name) in getEmoji()"
          @click="addText(name)"
        >{{ name }} {{ value }}</div>
      </div>
      <textarea
        @input="checkText($event)"
        @keydown.enter.exact.prevent
        @keyup.enter.exact="send"
        @keydown.enter.shift.exact="newline"
        v-model="text"
        class="w-full h-full rounded z-10 p-2 md:p-4 shadow-lg outline-none border border-blue-600 border-opacity-0 hover:border-opacity-80"
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
import emoji from '../logic/emojis'

const text = ref('')
const iconText = ref('')

const getEmoji = () => {
  const result: any = {}
  let i = 0
  for (const key in emoji) {
    if (key.indexOf(iconText.value.substr(1)) > -1 || iconText.value === ':') {
      i++
      result[key] = emoji[key]
    }
    if (i > 4) return result
  }
  // Insert emoji if exact one is found
  if (i === 1) {
    iconText.value = ''
    // text.value = text.value.replace(iconText.value, emoji[0])
  }
  return result
}

const addText = (name: string | number | symbol) => {
  text.value = text.value.replace(iconText.value, emoji[name.toString()])
  iconText.value = ''
}

const checkText = (event: any) => {
  const lastEmoji = text.value.substring(0, event.target.selectionStart).lastIndexOf(' :')
  iconText.value = ''
  if (lastEmoji === -1) {
    if (text.value.substring(0, 1) === ':') {
      text.value = replaceText(1, event.target.selectionStart, text.value)
      iconText.value = text.value.substring(0, event.target.selectionStart)
    }
  } else {
    text.value = replaceText(lastEmoji + 2, event.target.selectionStart, text.value)
    iconText.value = text.value.substring(lastEmoji + 1, event.target.selectionStart)
  }
}

const replaceText = (frompos: number, topos: number, text: string) => {
  const toreplace = text.substring(frompos, topos)
  if (emoji[toreplace] !== undefined) {
    return text.replace(':' + toreplace, emoji[toreplace])
  }
  return text
}

const send = () => {
  addMessage(activeSpace.value, { message: text.value })
  text.value = ''
}

const newline = () => {
  text.value = `${text.value}\n`
}
</script>
