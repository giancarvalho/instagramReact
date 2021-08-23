//list of stories to be rendered
let PERFIL_STORIES = [
  { name: "9gag", image: `9gag.svg` },
  { name: "adorable_animals", image: `adorable_animals.svg` },
  { name: "bad.vibes.memes", image: `bad.vibes.memes.svg` },
  { name: "barked", image: `barked.svg` },
  { name: "catanacomics", image: `catanacomics.svg` },
  { name: "dog", image: `dog.svg` },
  { name: "filomoderna", image: `filomoderna.svg` },
  { name: "meowed", image: `meowed.svg` },
];

function renderStory(perfil) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/${perfil.image}`} />
      </div>
      <div class="usuario">{perfil.name}</div>
    </div>
  );
}

export default function Stories() {
  return (
    <div class="stories">
      <ion-icon name="chevron-forward-circle"></ion-icon>
      {PERFIL_STORIES.map((perfil) => renderStory(perfil))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
