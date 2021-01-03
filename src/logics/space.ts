import { nextTick, ref } from 'vue'
import { Message } from './message'
import { User } from './user'
import firebase from 'firebase/app'
import { spacesCollection } from '/~/logics'

export interface Space {
  id: string
  subject?: string
  public?: boolean
  creator: User
  created: firebase.firestore.Timestamp
  messages: Array<Message>
}

export const activeSpace = ref()
export const messages = ref([])

export const setActive = (space: Space) => {
  activeSpace.value = space
  spacesCollection.doc(space.id).collection('message').orderBy('when', 'asc').onSnapshot(async snapshot => {
    messages.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    await nextTick()
    document.getElementById(messages.value[messages.value.length - 1].id).scrollIntoView()
  })
}
