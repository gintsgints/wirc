<template>
  <div class="flex flex-col md:flex-row h-screen bg-gray-200">
    <Toolbar class="flex-none order-last md:order-first md:w-16 p-4" />
    <MainChatWindow
      class="h-5/6 md:h-full md:flex-auto order-first md:order-last"
    />
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
