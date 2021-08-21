function CurrrentUser() {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        Catana
      </div>
    </div>
  );
}

function Suggestions() {
  return (
    <div>
      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/bad.vibes.memes.svg" />
          <div class="texto">
            <div class="nome">bad.vibes.memes</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/chibirdart.svg" />
          <div class="texto">
            <div class="nome">chibirdart</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/razoesparaacreditar.svg" />
          <div class="texto">
            <div class="nome">razoesparaacreditar</div>
            <div class="razao">Novo no Instagram</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/adorable_animals.svg" />
          <div class="texto">
            <div class="nome">adorable_animals</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="assets/img/smallcutecats.svg" />
          <div class="texto">
            <div class="nome">smallcutecats</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    </div>
  );
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
      </div>
    </div>
  );
}
