import dataJson from '../../../assets/datajson.json'
import { ss } from '@/utils/storage'

const LOCAL_NAME = 'promptStore'

export type PromptList = []

export interface PromptStore {
  promptList: PromptList
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  if (promptStore === undefined || promptStore.promptList.length === 0) {
    ss.set(LOCAL_NAME, { promptList: dataJson })
    return ss.get(LOCAL_NAME)
  }
  return promptStore ?? { promptList: [] }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}
