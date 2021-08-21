const CURRENT_USER = {
  name: "cebolinha",
  image: "catanacomics.svg",
  description: "Perfil Oficial",
};

export default function CurrrentUser() {
  return (
    <div class="usuario">
      <img src={`assets/img/${CURRENT_USER.image}`} />
      <div class="texto">
        <strong>{CURRENT_USER.name}</strong>
        {CURRENT_USER.description}
      </div>
    </div>
  );
}
