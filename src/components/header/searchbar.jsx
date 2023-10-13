import { createSignal } from "solid-js"
import { useStore } from "@nanostores/solid"
import { queryInput } from "../../stores/dataCollection"

export default function SearchBar() {

  const [input, setInput] = createSignal("")

  function handleInput(event){
    setInput(event.target.value)
  }

  return (
    <div class="flex items-center w-full justify-normal">
      <input type="text" class="w-full rounded-lg text-md py-2 px-2 focus:ring-2 bg-white outline-0" id="searchInput" onInput={handleInput} value={input()} />
    </div>
  )
}
