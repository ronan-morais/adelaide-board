import { createSignal } from "solid-js";
import { useStore } from "@nanostores/solid";
import { mainData, pageNumber } from "../../stores/dataCollection";


export default function FilterTags() {

  //const [count, setCount] = createSignal(0)
  const numb = useStore(pageNumber)

  function filtrarPorTags(data, tagsDeBusca) {
    return data.filter((item) => {
      return tagsDeBusca.some((tag) => {
        return item.needs.includes(tag);
      });
    });
  }

  function teste() {
    //mainData.set(filtrarPorTags(mainData.get(),["ugh"]))
    //console.log("xxx", mainData.get())

    pageNumber.set(numb() + 1)
    /* mainData.set([{
      id: "123",
      image: "teste",
      title: "teste",
      shortDesc: "",
      location: "teste",
      type: "",
      needs: ["teste1", "teste2"]
    }]) */
    //console.log(mainData.get())
  }

  //const filtrado = filtrarPorTags(mainCards, ["white card", "ugh"]);
  //console.log("filtrados:", filtrado);

  return (
    <>
      <div>click: {numb()}</div>
      <button onClick={teste}>White Card</button>
      <button onClick={teste}>RSA</button>
      <button onClick={teste}>Ugh</button>
    </>
  )
}