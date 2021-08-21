import Posts from "./posts";
import Stories from "./stories";

export default function Feed() {
  return (
    <div class="esquerda">
      <Stories />
      <Posts />
    </div>
  );
}
