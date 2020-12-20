<template>
  <div class="flex md:flex-row flex-col h-screen bg-gray-200">
    <Toolbar class="flex-none md:order-first order-last w-16 p-4" />
    <MainChatWindow class="flex-auto md:order-last order-first" />
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
