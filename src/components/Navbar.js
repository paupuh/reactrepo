import '../styles/Navbar.css';

function Navbar({ scrollToSection }) {
  return (
    <nav className="main-nav">
      <button onClick={() => scrollToSection('o-nas')} className="nav-link">O nas</button>
<button onClick={() => scrollToSection('oferty')} className="nav-link">Oferta</button>
      <button disabled className="nav-link disabled">Kontakt</button>
    </nav>
  );
}

export default Navbar;
