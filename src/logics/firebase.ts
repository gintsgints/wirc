import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { onUnmounted, ref } from 'vue'
import { firebaseConfig } from './firebase.config'

firebase.initializeApp(firebaseConfig)

// utils
export const db = firebase.firestore()
export const auth = firebase.auth()
export const usersCollection = db.collection('users')
export const spacesCollection = db.collection('space')

export const loadSpaces = () => {
  const spaces = ref([])
  const close = spacesCollection.onSnapshot(snapshot => {
    spaces.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return spaces
}

export const getUser = async (userId: string) => {
  const user = await usersCollection.doc(userId).get()
  return user.exists ? user.data() : null
}

export const loadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
