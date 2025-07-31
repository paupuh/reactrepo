import React from 'react';
import offers from './data/offers'; 
import employees from './data/employees';
import EmployeeRow from './components/EmployeeRow';
import OfferBox from './components/OfferBox';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
<Navbar scrollToSection={scrollToSection} />

      <header>
        <h1>Future Collars Projekt</h1>
      </header>

      <main>
        <section id="hero" className="hero-section" aria-label="Hero section">
          <h2>Witamy w Future Collars</h2>
          <button onClick={() => scrollToSection('oferta')} aria-label="Scroll to offers section">
            Zobacz ofertę
          </button>
        </section>

        <section id="oferta" aria-label="Offers and employees section">
          <section id="o-nas" aria-label="About us section">
            <h2>O nas</h2>
            {employees.map((employee, index) => (
              <EmployeeRow
                key={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                position={employee.position}
                description={employee.description}
                photo={employee.photo}
                isReversed={index % 2 !== 0}
              />
            ))}
          </section>

          <h2>Nasze oferty</h2>
<div id="oferty" className="offers-grid">
            {offers.map((offer) => (
              <OfferBox
                key={offer.id}
                title={offer.title}
                description={offer.description}
                isNew={offer.isNew}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
