const PROFILES = [
  { name: "bad.vibes.memes", image: "bad.vibes.memes.svg" },
  { name: "chibirdart", image: "chibirdart.svg" },
  { name: "razoesparaacreditar", image: "razoesparaacreditar.svg" },
  { name: "adorable_animals", image: "adorable_animals.svg" },
  { name: "smallcutecats", image: "smallcutecats.svg" },
];

function Suggestion(profile) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={`assets/img/${profile.image}`} />
        <div class="texto">
          <div class="nome">{profile.name}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Suggestions() {
  return <div>{PROFILES.map((profile) => Suggestion(profile))}</div>;
}
