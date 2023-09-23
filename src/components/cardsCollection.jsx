import Card from "./card";
import { useStore } from "@nanostores/solid";
import { XataClient } from "../xata";
import { createSignal } from "solid-js";
import { mainData, pageNumber } from "../stores/dataCollection";

const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH,
  enableBrowser: true,
});

const mainCards = useStore(mainData);
const page = useStore(pageNumber)

const data = await xata.db.cards.getAll();
if (data) {
  mainData.set(data);
}

export default function CardsCollection() {

  return (
    <div class="container px-6 sm:px-0 mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div>TESTE {page()}</div>
        {
          mainCards().map((card, index) => (
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
          ))
        }
      </div>
    </div>
  )
}