<template>
  <div class="w-full md:w-4/5 border-l border-gray-300 bg-white flex flex-col">
    <ChatHeader />
    <div
      class="flex-auto flex flex-col overflow-auto"
      style="background-image: url(../src/assets/bg.png)"
    >
      <div class="flex-auto overflow-auto h-30 p-5">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="
            message.user !== currentUser
              ? ''
              : 'flex-row-reverse space-x-reverse'
          "
          class="flex flex-row space-x-2"
        >
          <UserIcon :user="message.user" class="w-6 h-6" flex-none />
          <div :id="message.id" class="flex flex-col">
            <div class="flex justify-between text-sm text-gray-500">
              <b>
                <UserFullName v-if="message.user !== currentUser" :user="message.user" />
              </b>
              {{ moment(new Date()).to(message.when.toDate()) }}
            </div>
            <div class="bg-blue-200 rounded-lg p-3">{{ message.message }}</div>
          </div>
        </div>
      </div>
    </div>
    <ChatSendMessage />
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { activeSpace, messages } from '../logic/space'
import { currentUser } from '../logic/user'
</script>
