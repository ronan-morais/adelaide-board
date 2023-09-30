import { atom } from "nanostores";

export const pageNumber = atom(0)
export const mainData = atom([])
export const queryInput = atom("")
export const filterTags = atom([])

export function updateData(data) {
  mainData.set(data)
}