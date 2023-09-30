import { filterTags } from "../../stores/dataCollection"

function clearTags(){
  filterTags.set([])
  console.log("limpou tags", filterTags.get())
}

export function Logo() {
  return (<div class="flex items-center whitespace-nowrap border-4 w-max px-2 rounded-lg border-black">
    <a href="/"><span class="font-bold text-xl tracking-tight">Adelaide Board</span></a>
  </div>
  )
}