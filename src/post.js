function Top(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={`assets/img/${props.user.image}`} />
        {props.user.name}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Content(props) {
  return (
    <div class="conteudo">
      <img src={`assets/img/${props.content}`} />
    </div>
  );
}

function Bottom(props) {
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
      <LikedBy likes={props.likes} />
    </div>
  );
}

function LikedBy(props) {
  return (
    <div class="curtidas">
      <img src={`assets/img/${props.likes.image}`} />
      <div class="texto">
        Curtido por <strong>{props.likes.contact}</strong> e{" "}
        <strong>outras {props.likes.number} pessoas</strong>
      </div>
    </div>
  );
}

export default function RenderPost(post) {
  return (
    <div class="post">
      <Top user={post.user} />
      <Content content={post.content} />
      <Bottom likes={post.likes} />
    </div>
  );
}
