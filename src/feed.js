import Posts from "./posts";
import Stories from "./stories";

//renders stories and posts
export default function Feed() {
  return (
    <div class="esquerda">
      <Stories />
      <Posts />
    </div>
  );
}
