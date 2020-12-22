import { watch, computed, reactive } from 'vue'
import { usePreferredDark } from '@vueuse/core'
import { colorSchema } from './store'

const preferredDark = usePreferredDark()

interface User {
  id: number,
  firstName: string,
  lastName: string
}

interface Message {
  when: string
  message: string
  user: User
}

export const users = reactive([
  {
    id: 3,
    firstName: 'Igor',
    lastName: 'Ruchnoj'
  }
])

export const me: User = {
  id: 1,
  firstName: 'Nicola',
  lastName: 'Tesla'
}

export const layla: User = {
  id: 2,
  firstName: 'Layla',
  lastName: 'Rusevelt'
}

users.push(me)
users.push(layla)

export const messages = reactive([
  {
    when: '1hr',
    message: 'Hello Layla. I am excited from your last work on site design. Could you please explain, how it is done?',
    user: me
  }
])

export const isDark = computed({
  get () {
    return colorSchema.value === 'auto' ? preferredDark.value : colorSchema.value === 'dark'
  },
  set (v: boolean) {
    if (v === preferredDark.value)
      colorSchema.value = 'auto'
    else
      colorSchema.value = v ? 'dark' : 'light'
  },
})

watch(
  isDark,
  v => document.documentElement.classList.toggle('dark', v),
  { immediate: true },
)
