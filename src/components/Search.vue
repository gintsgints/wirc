<template>
  <div
    class="flex flex-row select-auto rounded-md border border-gray-300 border-opacity-0 hover:border-opacity-60 place-items-center"
  >
    <input class="outline-none m-3" type="text" :value="modelValue" @input="input" />
    <svg
      class="w-6 h-6 m-3"
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
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'

const emit = defineEmit(['update:modelValue'])

const input = (event: any) => {
  emit('update:modelValue', event.target.value)
}

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

</script>
