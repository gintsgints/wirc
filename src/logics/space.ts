import { reactive, ref } from 'vue'
import { Message } from './message'
import { igor, me, User } from './user'
import { spacesCollection } from '/~/logics'

export interface Space {
  subject?: string
  public?: boolean
  creator: User
  created: string
  messages: Array<Message>
}

export const activeSpace = ref('')
export const messages = ref([])

export const setActive = (spaceId: string) => {
  activeSpace.value = spaceId
  spacesCollection.doc(spaceId).collection('message').onSnapshot(snapshot => {
    messages.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
}
