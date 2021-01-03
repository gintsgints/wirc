<template>
  <div class="w-full md:w-4/5 border-l border-gray-300 bg-white flex flex-col">
    <ChatHeader />
    <div
      class="flex-auto flex flex-col overflow-auto"
      style="background-image: url(bg.png)"
    >
      <div class="flex-auto overflow-auto h-30 p-5">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="
            message.user === currentUser
              ? ''
              : 'flex-row-reverse space-x-reverse'
          "
          class="flex flex-row space-x-2"
        >
          <UserIcon class="w-6 h-6" flex-none />
          <div class="flex flex-col">
            <div class="bg-blue-200 rounded-lg p-3">
              {{ message.message }}
            </div>
            <div class="text-sm text-gray-500">
              {{ moment(new Date()).to(message.when.toDate()) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <ChatSendMessage />
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { activeSpace, messages, currentUser } from '/~/logics'
</script>
