import { reactive, ref } from 'vue'
import { Message } from './message'
import { User } from './user'
import { spacesCollection } from '/~/logics'

export interface Space {
  id: string
  subject?: string
  public?: boolean
  creator: User
  created: string
  messages: Array<Message>
}

export const activeSpace = ref()
export const messages = ref([])

export const setActive = (space: Space) => {
  activeSpace.value = space
  spacesCollection.doc(space.id).collection('message').onSnapshot(snapshot => {
    messages.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
}
