function Top() {
  return (
    <div class="topo">
      <div class="usuario">
        <img src="assets/img/meowed.svg" />
        meowed
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div class="conteudo">
      <img src="assets/img/gato-telefone.svg" />
    </div>
  );
}

function Bottom() {
  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

function Likes() {
  return (
    <div class="curtidas">
      <img src="assets/img/respondeai.svg" />
      <div class="texto">
        Curtido por <strong>respondeai</strong> e{" "}
        <strong>outras 101.523 pessoas</strong>
      </div>
    </div>
  );
}

export default function RenderPost() {
  return (
    <div class="post">
      <Topo />
      <Content />
      <Bottom />
      <Likes />
    </div>
  );
}
