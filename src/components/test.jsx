import { XataClient } from "../xata";
const xata = new XataClient({
  apiKey: import.meta.env.XATA_API_KEY,
  branch: import.meta.env.XATA_BRANCH,
});
const posts = await xata.db["service-categories"].getAll();

export default function Test() {

  return (
    <ul>
      <li>testeasd</li>
      {
        posts.map(item => (
          <li>{item.Title}</li>
        ))
      }
    </ul>
  )
} 