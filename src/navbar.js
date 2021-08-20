function Icons() {
  return (
    <div class="icones">
      <a href="#">
        <ion-icon name="paper-plane-outline"></ion-icon>
      </a>
      <a href="#">
        <ion-icon name="compass-outline"></ion-icon>
      </a>
      <a href="#">
        <ion-icon name="heart-outline"></ion-icon>
      </a>
      <a href="#">
        <ion-icon name="person-outline"></ion-icon>
      </a>
    </div>
  );
}

export default function Navbar() {
  return (
    <div class="topo">
      <div class="nav f y-center x-between">
        <div class="logo-principal">
          <a href="" class="f xy-center">
            <div class="divisor-logo">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <img src="assets/logo.png" alt="logo-instagram" />
          </a>
        </div>

        <div class="pesquisar f xy-center">Pesquisar</div>
        <Icons />
      </div>
    </div>
  );
}
