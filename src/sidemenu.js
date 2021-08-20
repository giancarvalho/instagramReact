function CurrentUser() {
  return (
    <div class="perfil f y-center">
      <a href="#">
        {" "}
        <img src="assets/cebolinha.jpg" />
      </a>
      <div class="nome-perfil">
        <p>cebolinha</p>
        <p class="light">pelfil oficial</p>
      </div>
    </div>
  );
}

function ProfileSuggestions() {
  return (
    <div class="sugestoes-perfil">
      <div class="perfil-sugerido f y-center x-between">
        <div class="perfil f y-center">
          <a href="#">
            <img src="assets/communityIcon_br9hnpio2n271.jpg" />
          </a>
          <div class="nome-perfil">
            <p>dankmemes</p>
            <p>Segue você</p>
          </div>
        </div>
        <div>
          <button type="button">Seguir</button>
        </div>
      </div>
      <div class="perfil-sugerido f y-center x-between">
        <div class="perfil f y-center">
          <a href="#">
            {" "}
            <img src="assets/dnd.png" />
          </a>
          <div class="nome-perfil">
            <p>dndmemes</p>
            <p>Segue você</p>
          </div>
        </div>
        <div>
          <button type="button">Seguir</button>
        </div>
      </div>
      <div class="perfil-sugerido f y-center x-between">
        <div class="perfil f y-center">
          <a href="#">
            {" "}
            <img src="assets/brasil.png" />
          </a>
          <div class="nome-perfil">
            <p>brasil</p>
            <p>Novo no Instagram</p>
          </div>
        </div>
        <div>
          <button type="button">Seguir</button>
        </div>
      </div>
      <div class="perfil-sugerido f y-center x-between">
        <div class="perfil f y-center">
          <a href="#">
            {" "}
            <img src="assets/faria.png" />
          </a>
          <div class="nome-perfil">
            <p>farialimabets</p>
            <p>Segue você</p>
          </div>
        </div>
        <div>
          <button type="button">Seguir</button>
        </div>
      </div>
      <div class="perfil-sugerido f y-center x-between">
        <div class="perfil f y-center">
          <a href="#">
            {" "}
            <img src="assets/respondeai.png" />
          </a>
          <div class="nome-perfil">
            <p>respondeai</p>
            <p>Segue você</p>
          </div>
        </div>
        <div>
          <button type="button">Seguir</button>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div class="sobre">
      <p>
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </p>
      <p>© 2021 INSTAGRAM DO FACEBOOK</p>
    </div>
  );
}

export default function Sidemenu() {
  return (
    <div class="container-sidebar">
      <div class="sidebar">
        <CurrentUser />
        <div>
          <div class="sugestoes-topo negrito f x-between">
            <p>Sugestões para você</p>
            <p>Ver tudo</p>
          </div>
          <ProfileSuggestions />
          <About />
        </div>
      </div>
    </div>
  );
}
