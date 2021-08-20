function Top() {
  return (
    <div class="topo-post f x-between">
      <div class="perfil f y-center">
        <a href="#">
          {" "}
          <img src="assets/9gag.jpg" />
        </a>
        <div class="nome-perfil">
          <p>9gag</p>
        </div>
      </div>
      <div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div class="fundo-post f coluna">
      <div class="f x-between">
        <div>
          <a href="">
            {" "}
            <ion-icon name="heart-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="chatbubble-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
        </div>
        <a href="#">
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </a>
      </div>
      <div class="curtidas f y-center">
        <img src="assets/respondeai.png" alt="" />
        <p>
          Curtido por <span class="negrito">respondeai</span> e
          <span class="negrito">outras 101.523 pessoas</span>
        </p>
      </div>
      <div class="comentarios"></div>
    </div>
  );
}

function InsertComment() {
  return (
    <div class="inserir-comentario f y-center">
      <a href="#">
        <ion-icon name="happy-outline"></ion-icon>
      </a>
      <input type="text" placeholder="Escreva um comentário..." />
      <button type="button">Postar</button>
    </div>
  );
}

export default function RenderPost() {
  return (
    <div class="post f coluna">
      <Top />
      {/* conteudo do post */}
      <img src="assets/nuvem.jpeg" class="imagem-post" />
      <Bottom />
      <InsertComment />
    </div>
  );
}
