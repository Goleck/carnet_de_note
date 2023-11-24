import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import utilisateurService from '../Service/utilisateurService';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../App.css';

const Login = () => {
  const [utilisateur, setUtilisateur] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUtilisateur({ ...utilisateur, [name]: value });
  };

const handleLogin = async () => {
  try {
    const response = await utilisateurService.login(utilisateur);
    console.log(response);
    if (response.status === 200) {
      navigate(`/note/${response.data.id_utilisateur}`);
      toast.success('Connexion réussie');
    }
  } catch (error) {
    console.error('Échec de la connexion', error);
  }
};

  const handleAdd = async () => {
    try {
      const response = await utilisateurService.addUtilisateur(utilisateur);
      console.log(response);
      toast.success("L'utilisateur " + utilisateur.pseudo + " a bien été créé");
      navigate(`/note/${response.data.id_utilisateur}`);
    } catch (e) {
      console.error('Erreur lors de la création de compte', e);
    }
  };

  return (
    
    <body>
    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '30rem' }}>
        <Card.Body style={{ backgroundcolor: 'rgb(228, 228, 228' }}>
          <Form>
            <h1 style={{ textAlign: 'center' }}>Connexion</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pseudo:</Form.Label>
              <Form.Control type="text" name="pseudo" value={utilisateur.pseudo} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe:</Form.Label>
              <Form.Control type="password" name="mdp" value={utilisateur.mdp} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type="button" onClick={handleLogin} style={{ marginRight: '10px' }}>
                Se connecter
              </Button>
              <Button type="button" onClick={handleAdd}>
                Créer un compte
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </body>
  );
};

export default Login;





