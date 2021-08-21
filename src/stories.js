let PERFIL_STORIES = [
  { name: "9gag", image: `9gag.svg` },
  { name: "meowed", image: `adorable_animals.svg` },
  { name: "eu_nvr", image: `bad.vibes.memes.svg` },
  { name: "latestagecapitalism", image: `barked.svg` },
  { name: "dankmemes", image: `catanacomics.svg` },
  { name: "oddlysatisfying", image: `dog.svg` },
  { name: "respondeai", image: `filomoderna.svg` },
  { name: "farialimabets", image: `meowed.svg` },
];

function renderStories(perfil) {
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
      {PERFIL_STORIES.map((perfil) => renderStories(perfil))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
