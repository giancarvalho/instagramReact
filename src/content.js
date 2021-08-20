import Feed from "./feed.js";
import Sidemenu from "./sidemenu.js";

export default function Content() {
  return (
    <div class="conteudo f x-between">
      <Feed />
      <Sidemenu />
    </div>
  );
}
