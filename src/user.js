//generates user profile in the sidemenu - desktop only
export default function CurrrentUser(props) {
  console.log(props);
  return (
    <div class="usuario">
      <img src={`assets/img/${props.user.image}`} />
      <div class="texto">
        <strong>{props.user.name}</strong>
        {props.user.description}
      </div>
    </div>
  );
}
