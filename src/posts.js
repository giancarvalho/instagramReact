import RenderPost from "./post";
//posts to be rendered
const POSTS = [
  {
    user: { name: "meowed", image: "meowed.svg" },
    content: "gato-telefone.svg",
    likes: { contact: "respondeai", image: "respondeai.svg", number: 101.523 },
  },
  {
    user: { name: "9gag", image: "9gag.svg" },
    content: "nuvem.jpeg",
    likes: { contact: "meowed", image: "meowed.svg", number: 25.555 },
  },
  {
    user: { name: "cebolinha", image: "cebolinha.jpg" },
    content: "raise.jpg",
    likes: { contact: "respondeai", image: "respondeai.svg", number: 20 },
  },
];

export default function Posts() {
  return <div class="posts">{POSTS.map((post) => RenderPost(post))}</div>;
}
