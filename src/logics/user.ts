import { reactive } from 'vue'

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  me: boolean
}

export const users: Array<User> = reactive([])

export const me: User = {
  id: 1,
  firstName: 'Nicola',
  lastName: 'Tesla',
  me: true
}

export const layla: User = {
  id: 2,
  firstName: 'Layla',
  lastName: 'Rusevelt',
  me: false
}

export const igor: User = {
  id: 3,
  firstName: 'Igor',
  lastName: 'Ruchnoj',
  me: false
}


users.push(me)
users.push(layla)
users.push(igor)
