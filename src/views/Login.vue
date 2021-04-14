<template>
    <form v-on:submit.prevent class="flex h-screen items-center justify-center bg-gray-100">
        <div
            class="flex flex-col items-center justify-center h-screen w-screen p-3 rounded-lg space-y-2 sm:shadow-2xl sm:h-2/5 sm:w-2/5"
        >
            <h1 class="text-xl">Please log in</h1>
            <div class="md:flex p-2 w-full">
                <div class="md:w-1/2">E-mail</div>
                <input
                    class="outline-none w-full md:w-2/3 p-1"
                    type="text"
                    placeholder="Your e-mail"
                    name="username"
                    id="user"
                    v-model="user"
                />
            </div>
            <div class="md:flex p-2 w-full">
                <div class="md:w-1/2">Password</div>
                <input
                    class="outline-none w-full md:w-2/3 p-1"
                    type="password"
                    placeholder="Your password"
                    name="password"
                    id="password"
                    v-model="password"
                />
            </div>
            <h1
                v-if="error.length > 0"
                class="text-xl font-bold text-red-900"
            >Login Failed {{ error }}</h1>
            <button
                class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                @click="login()"
                type="submit"
            >Login</button>
            <a class="pt-3">Forgot password?</a>
            <router-link to="/register">Do not have account? Register here.</router-link>
            <button @click="signGoogle()" class="flex items-center p-3">
                <img src="../assets/google.svg" width="20" height="20" alt="Login in with google" />
                <div class="pl-2">Login in with Google</div>
            </button>
        </div>
    </form>
</template>
  
<script setup lang="ts">
import firebase from 'firebase/app'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { auth } from '../plugins/firebase'

const user = ref('')
const password = ref('')
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

const login = () => {
    auth
        .signInWithEmailAndPassword(user.value, password.value)
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
  