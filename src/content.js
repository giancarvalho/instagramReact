import Feed from "./feed.js";
import Sidemenu from "./sidemenu.js";

export default function Content() {
  return (
    <div class="corpo">
      <Feed />
      <Sidemenu />
    </div>
  );
}
