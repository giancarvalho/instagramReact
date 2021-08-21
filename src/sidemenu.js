const CURRENT_USER = {
  name: "cebolinha",
  image: "catanacomics.svg",
  description: "Perfil Oficial",
};
const PROFILES = [
  { name: "bad.vibes.memes", image: "bad.vibes.memes.svg" },
  { name: "chibirdart", image: "chibirdart.svg" },
  { name: "razoesparaacreditar", image: "razoesparaacreditar.svg" },
  { name: "adorable_animals", image: "adorable_animals.svg" },
  { name: "smallcutecats", image: "smallcutecats.svg" },
];

function CurrrentUser() {
  return (
    <div class="usuario">
      <img src={`assets/img/${CURRENT_USER.image}`} />
      <div class="texto">
        <strong>{CURRENT_USER.name}</strong>
        {CURRENT_USER.description}
      </div>
    </div>
  );
}

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

function Suggestions() {
  return <div>{PROFILES.map((profile) => Suggestion(profile))}</div>;
}

function Links() {
  return (
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
      Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}

function Copyright() {
  return <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>;
}

export default function Sidemenu() {
  return (
    <div class="sidebar">
      <CurrrentUser />

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Suggestions />
        <Links />
        <Copyright />
      </div>
    </div>
  );
}
