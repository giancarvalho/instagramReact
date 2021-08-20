import Navbar from "./navbar";
import Content from "./content";

export default function App() {
  return (
    <div class="website">
      <Navbar />
      {/* // feed contem os posts e os stories dentro */}
      <Content />
    </div>
  );
}
