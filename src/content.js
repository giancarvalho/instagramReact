import Feed from "./feed";
import Sidemenu from "./sidemenu";
import MobileButtons from "./mobilebuttons";

// render the content of the home page
export default function Content() {
  return (
    <div class="corpo">
      <Feed />
      <Sidemenu />
      <MobileButtons />
    </div>
  );
}
