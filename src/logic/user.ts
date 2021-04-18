import { reactive, ref, Ref, onUnmounted } from 'vue'
import { auth, db } from '../plugins/firebase'

export interface User {
  id: string,
  firstName: string,
  lastName: string,
  photoURL: string
}

export const users: Array<User> = reactive([])
export const currentUser = ref('')
export const usersCollection = db.collection('users')

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

export const loadUsers = () => {
  const users: Ref<Array<any>> = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}

export const getUser = async (userId: string) => {
  const user = await usersCollection.doc(userId).get()
  return user.exists ? user.data() : null
}

export const updateUser = async (user: User) => {
  try {
    await usersCollection.doc(user.id.toString()).set(user, { merge: true })
    return null
  } catch (error) {
    return error
  }
}

auth.onAuthStateChanged((user) => {
  if (user) {
    currentUser.value = user.uid
  } else {
    currentUser.value = ''
  }
})
