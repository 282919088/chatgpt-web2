import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://avatars.githubusercontent.com/u/4486214?s=400&u=d602828db1d3eed3afc7f87140a42096942e56f9&v=4',
      name: 'Ming Liu',
      description: 'Star on <a href="https://github.com/282919088/chatgpt-web" class="text-blue-500" target="_blank" >Github</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
