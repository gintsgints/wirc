
import firebase from 'firebase/app'

export interface Message {
  when: firebase.firestore.Timestamp
  message: string
  user: string
}
