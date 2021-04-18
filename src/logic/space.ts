import { nextTick, ref, Ref, onUnmounted } from 'vue'
import { Message } from './message'
import { User } from './user'
import { db } from '../plugins/firebase'
import firebase from 'firebase/app'

export interface Space {
  id: string
  subject?: string
  public?: boolean
  creator: User
  created: firebase.firestore.Timestamp
  messages: Array<Message>
}

export const activeSpace = ref()
export const messages: Ref<Array<any>> = ref([])
export const spacesCollection = db.collection('space')

export const loadSpaces = () => {
  const spaces: Ref<Array<any>> = ref([])
  const close = spacesCollection.orderBy('created', 'desc').onSnapshot(snapshot => {
    spaces.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return spaces
}

export const updateSpace = (id: string, space: Space) => {
  return spacesCollection.doc(id).update(space)
}

export const createSpace = (space: Space) => {
  return spacesCollection.add(space)
}

export const setActive = (space: Space | null) => {
  activeSpace.value = space
  if (space) {
    spacesCollection.doc(space.id).collection('message').orderBy('when', 'asc').onSnapshot(async snapshot => {
      messages.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      await nextTick()
      if (messages.value[messages.value.length - 1]) {
        const element = document.getElementById(messages.value[messages.value.length - 1].id)
        if (element) {
          element.scrollIntoView()
        }
      }
    })
  } else {
    messages.value = []
  }
}
