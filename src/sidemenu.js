import CurrrentUser from "./user";
import Suggestions from "./suggestions";

//current logged user
const CURRENT_USER = {
  name: "cebolinha",
  image: "cebolinha.jpg",
  description: "Perfil Oficial",
};

//creates the links to information about Instagram
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

//generates sidemenu -- desktop version only
export default function Sidemenu() {
  return (
    <div class="sidebar">
      <CurrrentUser user={CURRENT_USER} />

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
