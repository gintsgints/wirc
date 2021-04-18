import { nextTick, ref, Ref, onUnmounted } from 'vue'
import { Message } from './message'
import { db, auth } from '../plugins/firebase'
import firebase from 'firebase/app'

export interface Space {
  id?: string
  subject?: string
  public?: boolean
  creator?: string
  created: firebase.firestore.Timestamp
  messages: Array<Message>
}

export const activeSpace = ref()
export const spaces: Ref<Array<any>> = ref([])
export const messages: Ref<Array<any>> = ref([])
export const spacesCollection = db.collection('space')

export const loadSpaces = () => {
  const close = spacesCollection.orderBy('created', 'desc').onSnapshot(snapshot => {
    spaces.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return spaces
}

export const updateSpace = (id: string, space: Space) => {
  return spacesCollection.doc(id).update(space)
}

export const createSpace = async (text?: string) => {
  const newspace: Space = {
    subject: text ? text : '',
    created: firebase.firestore.Timestamp.fromDate(new Date()),
    messages: []
  }
  if (auth.currentUser) {
    newspace.creator = auth.currentUser.uid
  }
  const created: any = await spacesCollection.add(newspace)
  setActive(spaces.value.find((space) => {
    return space.id === created.id
  }))
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
