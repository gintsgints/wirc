<template>
  <div class="flex flex-col md:flex-row h-screen bg-gray-200">
    <Toolbar class="flex-none w-screen order-last md:order-first h-16 md:h-screen md:w-16" />
    <ChatSpaceList
      :class="activeSpace ? 'hidden' : ''"
      class="w-screen order-first overflow-auto md:block md:w-1/4"
    ></ChatSpaceList>
    <Chat class="order-first w-screen overflow-auto flex-grow md:order-last"></Chat>
  </div>
</template>

<script setup lang="ts">
import { activeSpace } from '../logic/space'
</script>
