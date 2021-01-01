import { reactive, ref } from 'vue'
import { Message, messages1, messages2 } from './message'
import { igor, me, User } from './user'
import { spacesCollection } from '/~/logics'

export interface Space {
  subject?: string
  public?: boolean
  creator: User
  created: string
  messages: Array<Message>
}

export const spaces = reactive({
  data: [
    {
      subject: 'Laya explains how she made design',
      created: '5hr',
      creator: me,
      messages: messages1
    },
    {
      creator: igor,
      created: '4hr',
      messages: messages2
    }
  ]
})

export const activeSpace = ref('')
export const messages = ref([])

export const setActive = (spaceId: string) => {
  activeSpace.value = spaceId
  console.log('spaceID', spaceId)
  spacesCollection.doc(spaceId).collection('message').onSnapshot(snapshot => {
    messages.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
}
