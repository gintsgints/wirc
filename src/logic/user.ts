import { reactive, ref } from 'vue'
import { auth } from '../plugins/firebase'

export interface User {
  id: string,
  firstName: string,
  lastName: string,
  photoURL: string
}

export const users: Array<User> = reactive([])
export const currentUser = ref('')

auth.onAuthStateChanged((user) => {
  if (user) {
    currentUser.value = user.uid
  } else {
    currentUser.value = ''
  }
})
