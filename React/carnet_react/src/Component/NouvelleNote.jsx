import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CirclePicker } from 'react-color';
import 'bootstrap/dist/css/bootstrap.min.css';


const NouvelleNote = ({ onNoteAdd }) => {
  const [nouvelleNote, setNouvelleNote] = useState({
    titre: '',
    contenu: '',
    categorie: '',
    date: '',
    couleur: '#ffffff', // Couleur par défaut (blanc)
  });

  const handleNoteChange = (event) => {
    const { name, value } = event.target;
    setNouvelleNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleColorChange = (color) => {
    setNouvelleNote((prevNote) => ({ ...prevNote, couleur: color.hex }));
  };

  const handleNoteAdd = () => {
    if (nouvelleNote.titre.trim() !== '') {
      console.log('Nouvelle note à ajouter :', nouvelleNote);
      onNoteAdd(nouvelleNote);
      setNouvelleNote({ titre: '', contenu: '', categorie: '', date: '', couleur: '#ffffff' });
    }
  };

  const cardStyle = {
    width: '40rem',
    backgroundColor: nouvelleNote.couleur,
    transition: 'background-color 0.5s ease',
  };

  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Form>
          <Form.Control
            type="text"
            name="titre"
            value={nouvelleNote.titre}
            onChange={handleNoteChange}
            placeholder="Titre"
            style={{ marginBottom: '10px' }}
          />

          <Form.Control
            type="text"
            name="categorie"
            value={nouvelleNote.categorie}
            onChange={handleNoteChange}
            placeholder="Catégorie"
            style={{ marginBottom: '10px' }}
          />

          <Form.Control
            type="date"
            name="date"
            value={nouvelleNote.date}
            onChange={handleNoteChange}
            style={{ marginBottom: '10px' }}
          />

          <Form.Control
            as="textarea"
            name="contenu"
            value={nouvelleNote.contenu}
            onChange={handleNoteChange}
            placeholder="Contenu"
            style={{ marginBottom: '10px' }}
          />

          <br />

          <CirclePicker color={nouvelleNote.couleur} onChange={handleColorChange} />

          <br />

          <Button onClick={handleNoteAdd}>Poster</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NouvelleNote;
