import Feed from "./feed";
import Sidemenu from "./sidemenu";
import MobileButtons from "./mobilebuttons";

export default function Content() {
  return (
    <div class="corpo">
      <Feed />
      <Sidemenu />
      <MobileButtons />
    </div>
  );
}
