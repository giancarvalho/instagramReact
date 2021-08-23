import CurrrentUser from "./user";
import Suggestions from "./suggestions";

//creates the links to information about Instagram
function Links() {
  return (
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
      Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}

//creates copyright notice
function Copyright() {
  return <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>;
}

//generates sidemenu -- desktop version only
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
