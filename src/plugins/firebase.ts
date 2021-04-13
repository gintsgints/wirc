import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { onUnmounted, ref } from 'vue'
import firebaseConfig from '../../firebase.config.json'
import { Message } from '../logic/message'
import { Space } from '../logic/space'
import { Ref } from 'vue'
import { User } from '~/logic/user'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: 'wirc-2021.firebaseapp.com',
  projectId: 'wirc-2021',
  storageBucket: 'wirc-2021.appspot.com',
  messagingSenderId: '511220106686',
  appId: process.env.API_ID,
  measurementId: process.env.MEASUREMENT_ID
}

firebase.initializeApp(config)

// utils
export const db = firebase.firestore()
export const auth = firebase.auth()
export const usersCollection = db.collection('users')
export const spacesCollection = db.collection('space')

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

export const loadSpaces = () => {
  const spaces: Ref<Array<any>> = ref([])
  const close = spacesCollection.orderBy('created', 'desc').onSnapshot(snapshot => {
    spaces.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return spaces
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