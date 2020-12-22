<template>
  <div class="flex flex-col md:flex-row h-screen bg-gray-200">
    <Toolbar
      class="flex-none w-screen order-last md:order-first h-16 md:h-screen md:w-16"
    />
    <ChatSpaceList class="hidden overflow-auto md:block w-1/5"></ChatSpaceList>
    <Chat
      class="order-first w-screen overflow-auto flex-grow md:order-last"
    ></Chat>
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
