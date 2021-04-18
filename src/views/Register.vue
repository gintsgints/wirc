<template>
    <form class="flex h-screen items-center justify-center bg-gray-100" v-on:submit.prevent>
        <div
            class="flex flex-col items-center justify-center h-screen w-screen p-3 rounded-lg space-y-2 sm:shadow-2xl sm:h-2/5 sm:w-2/5"
        >
            <h1 class="text-xl">Please provide user details</h1>
            <div class="md:flex p-2 w-full">
                <div class="md:w-1/2">E-mail</div>
                <input
                    class="outline-none w-full md:w-2/3 p-1"
                    type="text"
                    id="user"
                    placeholder="Your e-mail"
                    v-model="user"
                    name="username"
                />
            </div>
            <div class="md:flex p-2 w-full">
                <div class="md:w-1/2">Password</div>
                <input
                    id="password"
                    v-model="password"
                    class="outline-none w-full md:w-2/3 p-1"
                    type="password"
                    placeholder="Your password"
                    name="password"
                />
            </div>
            <div class="md:flex p-2 w-full">
                <div class="md:w-1/2">Repeat password</div>
                <input
                    id="password2"
                    v-model="password2"
                    class="outline-none w-full md:w-2/3 p-1"
                    type="password"
                    placeholder="Your password"
                    name="password2"
                />
            </div>
            <h1
                v-if="error.length > 0"
                class="text-xl font-bold text-red-900"
            >Register Failed {{ error }}</h1>
            <button
                class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                type="submit"
                @click="register()"
            >Register</button>
            <button @click="signGoogle()" class="flex items-center p-3">
                <img src="../assets/google.svg" width="20" height="20" alt="Sign in with google" />
                <div class="pl-2">Sign in with Google</div>
            </button>
        </div>
    </form>
</template>
  
<script setup lang="ts">
import firebase from 'firebase/app'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { auth } from '~/plugins/firebase'

const user = ref('')
const password = ref('')
const password2 = ref('')
const error = ref('')
let provider: firebase.auth.GoogleAuthProvider | null = null

const router = useRouter()

const signGoogle = () => {
    if (provider) {
        auth
            .signInWithPopup(provider)
            .then((user) => {
                router.push('/')
            })
            .catch((resulterr) => {
                error.value = resulterr.message
            })
    }
}

const register = () => {
    if (password.value !== password2.value) {
        error.value = 'Passwords do not match'
        return
    }
    auth
        .createUserWithEmailAndPassword(user.value, password.value)
        .then((user) => {
            router.push('/')
        })
        .catch((resulterr) => {
            error.value = resulterr.message
        })
}

onMounted(() => {
    provider = new firebase.auth.GoogleAuthProvider()
})
</script>
