import { reactive, ref } from 'vue'
import { Message, messages1, messages2 } from './message'
import { igor, me, User } from './user'

export interface Space {
  subject?: string
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

export const activeSpace = ref(0)
