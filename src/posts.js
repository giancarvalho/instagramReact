import RenderPost from "./post";

const POSTS = [
  {
    user: { name: "meowed", image: "meowed.svg" },
    content: "gato-telefone.svg",
    likes: { contact: "respondeai", number: "101.523" },
  },
  {
    user: { name: "meowed", image: "meowed.svg" },
    content: "gato-telefone.svg",
    likes: { contact: "respondeai", number: "101.523" },
  },
];

export default function Posts() {
  return <div class="posts">{POSTS.map((post) => RenderPost(post))}</div>;
}
