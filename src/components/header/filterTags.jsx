import { useStore } from "@nanostores/solid"; 
import { pageNumber, nextPage } from "../../stores/dataCollection";


export default function FilterTags() {

  //const [count, setCount] = createSignal(0)
  const numberPage = useStore(pageNumber)

  function filtrarPorTags(data, tagsDeBusca) {
    return data.filter((item) => {
      return tagsDeBusca.some((tag) => {
        return item.needs.includes(tag);
      });
    });
  } 

  //const filtrado = filtrarPorTags(mainCards, ["white card", "ugh"]);
  //console.log("filtrados:", filtrado);

  return (
    <>
      <div>click: {numberPage()}</div>
      <button onClick={()=>nextPage()}>White Card</button>
      <button onClick={()=>nextPage()}>RSA</button>
      <button onClick={()=>nextPage()}>Ugh</button>
    </>
  )
}