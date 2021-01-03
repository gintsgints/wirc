<template>
  <span>{{ firstName }}</span>
  <span>{{ lastName }}</span>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import { getUser } from '/~/logics'

const firstName = ref('')
const lastName = ref('')

const props = defineProps({
  user: {
    type: String,
    required: true
  }
})

const update = async () => {
  const user = await getUser(props.user)
  firstName.value = user.firstName + ' '
  lastName.value = user.lastName
}

watch(() => props.user, update, { flush: 'post' })

onMounted(update)
</script>
