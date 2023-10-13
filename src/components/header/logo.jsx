import { filterTags } from "../../stores/dataCollection"

function clearTags() {
  filterTags.set([])
  console.log("limpou tags", filterTags.get())
}

export function Logo() {
  return (
      <div class="w-60">
        <a href="/"><img src="./public/logo.svg" alt="Adelaide Board" />{/* <span class="font-bold text-xl tracking-tight">Adelaide Board</span> */}</a>
      </div>
  )
}