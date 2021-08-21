import CurrrentUser from "./user";
import Suggestions from "./suggestions";

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
