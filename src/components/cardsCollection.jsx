import Card from "./card";
import { For } from "solid-js";
import { useStore } from "@nanostores/solid";
import { pageNumber, nextPage, updateData } from "../stores/dataCollection";
import {GetData} from "./db/getData"

//const mainCards = useStore(mainData);
//const pages = useStore(pageNumber);

//const numberPage = useStore(pageNumber)
const getData = await GetData()
console.log("Data", getData)


export default function CardsCollection() {

  return (
    <div class="container px-6 sm:px-0 mx-auto">
      <div
        class="grid pt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div>click: {/* numberPage() */}</div>
        <button onClick={() => nextPage()}>teste</button>
        {/* <For each={ }>
          <Card
            id={card.id}
            index={index}
            image={card.image[0]}
            title={card.title}
            shortDesc={card.desc}
            location={card.location}
            type={card.type}
            needs={card.needs}
          />
        </For> */}
      </div>
    </div>
  )
}