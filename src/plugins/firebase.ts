import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'wirc-2021.firebaseapp.com',
  projectId: 'wirc-2021',
  storageBucket: 'wirc-2021.appspot.com',
  messagingSenderId: '511220106686',
  appId: import.meta.env.VITE_API_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
}

firebase.initializeApp(config)

// utils
export const db = firebase.firestore()
export const auth = firebase.auth()
