let perfilStories = [
  { name: "9gag", image: `9gag.jpg` },
  { name: "dndmemes", image: `dnd.png` },
  { name: "eu_nvr", image: `eu_nvr.jpg` },
  { name: "latestagecapitalism", image: `latestage.png` },
  { name: "dankmemes", image: `communityIcon_br9hnpio2n271.jpg` },
  { name: "oddlysatisfying", image: `satisfied.png` },
  { name: "respondeai", image: `respondeai.png` },
  { name: "farialimabets", image: `faria.png` },
];

function renderStories(perfil) {
  return (
    <li class="story">
      <div class="imagem">
        <img src={`assets/${perfil.image}`} />
      </div>
      <div class="usuario">{perfil.name}</div>
    </li>
  );
}

export default function Stories() {
  return (
    <div class="stories">
      <ion-icon name="chevron-forward-circle"></ion-icon>
      <ul>{perfilStories.map((perfil) => renderStories(perfil))}</ul>
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
