
import firebase from 'firebase/app'
import { auth } from '../plugins/firebase'
import { Space, spacesCollection } from './space'

export interface Message {
  when?: firebase.firestore.Timestamp
  message: string
  user?: string
}

export const addMessage = async (space: Space, message: Message) => {
  if (auth.currentUser) {
    message.when = firebase.firestore.Timestamp.fromDate(new Date())
    message.user = auth.currentUser.uid
    spacesCollection.doc(space.id).collection('message').add(message)
  }
}
