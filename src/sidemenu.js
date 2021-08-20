export default function Sidemenu(){
    return (<div class="container-sidebar">
          <!-- inicio sidebar -->
          <div class="sidebar">
            <!-- inicio perfil logado -->
            <div class="perfil f y-center">
              <a href="#"> <img src="imagens/cebolinha.jpg" /></a>
              <div class="nome-perfil">
                <p>cebolinha</p>
                <p class="light">pelfil oficial</p>
              </div>
            </div>
            <!-- final perfil logado -->
            <div>
              <div class="sugestoes-topo negrito f x-between">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
              </div>
              <!-- inicio sugestoes perfil -->
              <div class="sugestoes-perfil">
                <div class="perfil-sugerido f y-center x-between">
                  <div class="perfil f y-center">
                    <a href="#">
                      <img src="imagens/communityIcon_br9hnpio2n271.jpg"
                    /></a>
                    <div class="nome-perfil">
                      <p>dankmemes</p>
                      <p>Segue você</p>
                    </div>
                  </div>
                  <div><button type="button">Seguir</button></div>
                </div>
                <div class="perfil-sugerido f y-center x-between">
                  <div class="perfil f y-center">
                    <a href="#"> <img src="imagens/dnd.png" /></a>
                    <div class="nome-perfil">
                      <p>dndmemes</p>
                      <p>Segue você</p>
                    </div>
                  </div>
                  <div><button type="button">Seguir</button></div>
                </div>
                <div class="perfil-sugerido f y-center x-between">
                  <div class="perfil f y-center">
                    <a href="#"> <img src="imagens/brasil.png" /></a>
                    <div class="nome-perfil">
                      <p>brasil</p>
                      <p>Novo no Instagram</p>
                    </div>
                  </div>
                  <div><button type="button">Seguir</button></div>
                </div>
                <div class="perfil-sugerido f y-center x-between">
                  <div class="perfil f y-center">
                    <a href="#"> <img src="imagens/faria.png" /></a>
                    <div class="nome-perfil">
                      <p>farialimabets</p>
                      <p>Segue você</p>
                    </div>
                  </div>
                  <div><button type="button">Seguir</button></div>
                </div>
                <div class="perfil-sugerido f y-center x-between">
                  <div class="perfil f y-center">
                    <a href="#"> <img src="imagens/respondeai.png" /></a>
                    <div class="nome-perfil">
                      <p>respondeai</p>
                      <p>Segue você</p>
                    </div>
                  </div>
                  <div><button type="button">Seguir</button></div>
                </div>
              </div>
              <!-- final sugestoes de perfil -->
            </div>
            <div class="sobre">
              <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
              </p>
              <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
          </div>
          <!-- final sidebar -->
        </div>)
}