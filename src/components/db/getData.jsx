import { XataClient } from "../../xata";

const xata = new XataClient({
  apiKey: import.meta.env.PUBLIC_XATA_API_KEY,
  branch: import.meta.env.PUBLIC_XATA_BRANCH,
  enableBrowser: true,
});

export async function GetData(){
  const data = await xata.db.cards.getAll();
  if (data) {
    return data;
  }
}