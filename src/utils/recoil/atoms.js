import { atom } from "recoil"

export const counterState = atom({
  key: "counter",
  default: 0,
})

export const appLoadingState = atom({
  key: "appLoading",
  default: true,
})