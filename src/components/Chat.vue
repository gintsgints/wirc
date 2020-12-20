<template>
  <div class="w-full md:w-4/5 border-l border-gray-300 flex flex-col">
    <div
      class="flex-none h-16 flex flex-row border-b justify-between items-center p-5"
    >
      <div class="flex flex-col space-y-1">
        <strong>Nikola Tesla</strong>
        <input
          type="text"
          name="subject"
          placeholder="Type a subject here"
          class="text-sm outline-none border-b border-dashed border-gray-300 border-opacity-0 focus:border-opacity-100 hover:border-opacity-60 text-black placeholder-gray-600"
        />
      </div>
      <div class="flex flex-row items-center">
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
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          ></path>
        </svg>
      </div>
    </div>
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
      <div class="flex flex-row items-center flex-none h-40 p-5">
        <div class="flex-grow">
          <textarea
            class="w-full h-full rounded p-4 shadow-lg outline-none border border-blue-600 border-opacity-0 hover:border-opacity-80"
          ></textarea>
        </div>
        <a class="h-full p-5 grid justify-items-center items-center">
          <Icon icon="carbon:send" style="font-size: 32px" />
        </a>
      </div>
    </div>
  </div>
</template>
