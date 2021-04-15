<template>
  <form
    v-if="user"
    v-on:submit.prevent
    class="flex h-screen items-center justify-center bg-gray-100"
  >
    <div
      class="flex flex-col items-center justify-center h-screen w-screen p-3 rounded-lg space-y-2 sm:shadow-2xl sm:h-2/5 sm:w-2/5"
    >
      <h1 class="text-xl">User {{ firstName }} details</h1>
      <div class="md:flex p-2 w-full">
        <div class="md:w-1/2">First name</div>
        <input
          class="outline-none w-full md:w-2/3 p-1"
          type="text"
          placeholder="Enter your display name"
          name="firstname"
          id="firstname"
          v-model="firstName"
        />
      </div>
      <div class="md:flex p-2 w-full">
        <div class="md:w-1/2">Last name</div>
        <input
          class="outline-none w-full md:w-2/3 p-1"
          type="text"
          placeholder="Enter your display name"
          name="lastname"
          id="lastname"
          v-model="lastName"
        />
      </div>
      <div class="md:flex p-2 w-full">
        <div class="md:w-1/2">Icon URL</div>
        <div class="flex place-items-center justify-between w-full md:w-2/3">
          <input
            class="outline-none p-1"
            type="text"
            placeholder="Paste url or button for Gravatar"
            name="photoURL"
            id="photoURL"
            v-model="photoURL"
          />
          <button @click="getGravatar" class="p-1">
            <img src="../assets/Gravatar.jpg" class="w-6 h-6" alt="Gravatar" />
          </button>
        </div>
      </div>
      <h1 v-if="error.length > 0" class="text-xl font-bold text-red-900">Login Failed {{ error }}</h1>
      <div class="flex justify-around w-1/2">
        <button
          class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
          @click="update"
        >Save</button>
        <button
          @click="goChat"
          class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >Back to chat</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { auth, getUser, updateUser } from '../plugins/firebase'
import { ref, onMounted } from 'vue'
import md5 from 'md5'

const router = useRouter()
const user = auth.currentUser
const error = ref('')
const firstName = ref('')
const lastName = ref('')
const photoURL = ref('')

const goChat = () => {
  router.push('/')
}

const getGravatar = () => {
  if (auth.currentUser?.email) {
    photoURL.value = "https://www.gravatar.com/avatar/" + md5(auth.currentUser?.email.trim().toLowerCase())
  }
}

const update = async () => {
  if (auth.currentUser) {
    try {
      await updateUser({
        id: auth.currentUser.uid,
        firstName: firstName.value,
        lastName: lastName.value,
        photoURL: photoURL.value
      })
      router.push('/')
    } catch (err) {
      error.value = err
    }
  }
}

const refresh = async () => {
  if (auth.currentUser) {
    const user = await getUser(auth.currentUser.uid)
    if (user) {
      firstName.value = user.firstName
      lastName.value = user.lastName
      photoURL.value = user.photoURL
    }
  }
}

onMounted(refresh)

</script>
