import Card from "./card";
import { For, createSignal, } from "solid-js";
import { useStore } from "@nanostores/solid";
import { mainData, filterTags, updateData } from "../stores/dataCollection";
import { getData } from "./db/getData"

const dataCards = await getData()

export default function CardsCollection() {

  if (dataCards) {
    updateData(dataCards)
  }

  const data = useStore(mainData)
  const [dataSig, setDataSig] = createSignal(data())
  const tags = data().map(tag => tag.needs).flat()

  function handleTag(tag) {
    if (filterTags.get().includes(tag)) {
      filterTags.get().splice(filterTags.get().indexOf(tag), 1)
    } else {
      filterTags.get().push(tag)
    }

    setDataSig(data().filter((item) => {
      if (filterTags.get().length === 0) {
        return item
      } else if (item.needs.some(tag => filterTags.get().includes(tag))) {
        return item
      }
    }))
  }

  function toggleClass(e, tag) {
    if (filterTags.get().includes(tag)) {
      e.target.classList.remove("hover:bg-transparent")
      e.target.classList.add("bg-yellow-500")
    } else {
      e.target.classList.add("hover:bg-transparent")
      e.target.classList.remove("bg-yellow-500")
    }
    console.log(e.target.classList)
  }

  return (
    <div class="container px-6 sm:px-0 mx-auto">
      <For each={tags}>
        {tag => (
          <button onClick={(e) => { handleTag(tag); toggleClass(e, tag) }} class={`bg-slate-50 px-2 rounded-lg me-1 hover:bg-transparent`}>{tag}</button>
        )}
      </For>
      <div
        class="grid pt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <For each={dataSig()}>
          {card => (
            <Card
              id={card.id}
              image={card.image[0]}
              title={card.title}
              shortDesc={card.desc}
              location={card.location}
              type={card.type}
              needs={card.needs}
            />
          )}
        </For>
      </div>
    </div>
  )
}