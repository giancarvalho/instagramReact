import Posts from "./posts";
import Stories from "./stories";
//import Posts from "./posts";

export default function Feed() {
  return (
    <div class="feed f coluna">
      <Stories />
      <Posts />
    </div>
  );
}
