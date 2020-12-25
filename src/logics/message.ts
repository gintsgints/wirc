import { me, layla, User, igor } from './user'

export interface Message {
  when: string
  message: string
  user: User
}

export const messages1 = [
  {
    when: '1hr',
    message: 'Hello Layla. I am excited from your last work on site design. Could you please explain, how it is done?',
    user: me
  },
  {
    when: '50min',
    message: 'Hey, long time not seen.',
    user: layla
  },
  {
    when: '52min',
    message: 'Are you prepeared for long explanation now?',
    user: layla
  }, {
    when: '50min',
    message: 'Yes! For sure! I am very excited and really looking forward for your explanation.',
    user: me
  }
]

export const messages2 = [
  {
    when: '4hr',
    message: 'Who would be able to explain Tailwind CSS?',
    user: igor
  }, {
    when: '4hr',
    message: 'I had been working with this framework for long time. I think could be able to help',
    user: layla
  }
]
