<template>
  <div class="flex flex-col">
    <div class="flex flex-none justify-between items-center pb-8 mb-4">
      <h1 class="font-semibold pl-2 text-2xl">Chat spaces</h1>
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
    <div class="flex-auto overflow-y-auto">
      <a v-for="n in 100" v-bind:key="n" class="block border-b">
        <div
          :class="
            n === 2
              ? 'bg-blue-200 border-blue-500'
              : 'border-transparent hover:bg-gray-100'
          "
          class="border-l-2 p-3 space-y-4"
        >
          <div class="flex flex-row items-center">
            <svg
              class="w-5 h-5 mr-2"
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
            <strong class="flex-grow">Nicola Tesla</strong>
            <div class="text-sm text-gray-600">5hr</div>
          </div>
          <div class="flex flex-row items-center">
            <svg
              class="flex-none w-3 h-3 mr-2"
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
            <div class="flex-grow truncate text-xs">
              some message content sdfgf assdfga sdfas ddfas fggaseefawefe
              awwerrf awe fzerf asdfa dsfasdf asdf asdfa sdfasdf a
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
