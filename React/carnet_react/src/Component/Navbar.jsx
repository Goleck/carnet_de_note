import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import utilisateurService from '../Service/utilisateurService';

function FunctionNavBar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      await utilisateurService.logout();
      setIsUserLoggedIn(false);
      console.log('Utilisateur déconnecté');
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    }
  };

  return (
    <Navbar id="navbar" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{ color: 'white' }}>CARNET DE NOTES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isUserLoggedIn ? (
              <Nav.Link onClick={handleLogout} style={{ color: 'white' }}>Déconnexion</Nav.Link>
            ) : (
              <Nav.Link href="/" style={{ color: 'white' }}>{isUserLoggedIn ? 'Déconnexion' : 'Connexion'}</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FunctionNavBar;
