import firebase from 'firebase/app'
import "firebase/auth"
import { firebaseConfig } from './firebase.config'

firebase.initializeApp(firebaseConfig)

// utils
// const db = firebase.firestore()
export const auth = firebase.auth()
// export const usersCollection = db.collection('users')
// export const spacesCollection = db.collection('spaces')
