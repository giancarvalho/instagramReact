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
    <div class="perfil-stories f y-center">
      <div class="stories-background">
        <img src="imagens/stories_background.jpg" />
        <div class="foto-stories">
          <a href="#">
            <img src={`assets/${perfil.image}`} />
          </a>
        </div>
        <p>{perfil.name}</p>
      </div>
    </div>
  );
}

export default function Stories() {
  return (
    <div class="stories f y-center">
      <ion-icon name="chevron-forward-circle"></ion-icon>
      <ul>
        {perfilStories.map((perfil) => (
          <li>${renderStories(perfil)}</li>
        ))}
      </ul>
    </div>
  );
}
