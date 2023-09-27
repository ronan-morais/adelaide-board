import { atom } from "nanostores";

export const pageNumber = atom(0)
export const mainData = atom([])

export function nextPage() {
  pageNumber.set(pageNumber.get() + 1)
  console.log("page number: ", pageNumber.get())
}

export function updateData(data) {
  mainData.set(data)
  console.log("data: ", mainData.get())
}