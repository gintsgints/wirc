import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { nextTick, onUnmounted, ref } from 'vue'
import { firebaseConfig } from './firebase.config'
import { Message } from './message'
import { Space } from './space'

firebase.initializeApp(firebaseConfig)

// utils
export const db = firebase.firestore()
export const auth = firebase.auth()
export const usersCollection = db.collection('users')
export const spacesCollection = db.collection('space')

export const loadSpaces = () => {
  const spaces = ref([])
  const close = spacesCollection.orderBy('created', 'desc').onSnapshot(snapshot => {
    spaces.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return spaces
}

export const loadUsers = () => {
  const users = ref([])
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

export const addMessage = async (space: Space, message: Message) => {
  if (auth.currentUser) {
    message.when = firebase.firestore.Timestamp.fromDate(new Date())
    message.user = auth.currentUser.uid
    spacesCollection.doc(space.id).collection('message').add(message)
  }
}

export const updateSpace = (id: string, space: Space) => {
  return spacesCollection.doc(id).update(space)
}

export const createSpace = (space: Space) => {
  return spacesCollection.add(space)
}