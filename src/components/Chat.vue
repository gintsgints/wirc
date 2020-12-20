<template>
  <div class="w-full md:w-4/5 border-l border-gray-300 flex flex-col">
    <ChatHeader />
    <div
      class="flex-auto flex flex-col overflow-auto"
      style="background-image: url(bg.png)"
    >
      <div class="flex-auto overflow-auto h-30 p-5">
        <div
          v-for="n in 30"
          v-bind:key="n"
          :class="n % 2 ? '' : 'flex-row-reverse space-x-reverse'"
          class="flex flex-row space-x-2"
        >
          <svg
            class="w-6 h-6"
            flex-none
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div class="flex flex-col">
            <div class="bg-blue-200 rounded-lg p-3">
              Some conversation text here
            </div>
            <div class="text-sm text-gray-500">5hr ago</div>
          </div>
        </div>
      </div>
      <ChatSendMessage />
    </div>
  </div>
</template>
