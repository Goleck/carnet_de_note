import React, { useState, useEffect } from 'react';
import noteService from '../Service/noteService';
import { useParams } from 'react-router-dom';
import Note from '../Component/Note';
import NouvelleNote from '../Component/NouvelleNote';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  const { utilisateur } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotesByCategories = async () => {
      try {
        const response = await noteService.fetchNotesByCategories(utilisateur);
        setNotes(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des notes', error);
      }
    };
    
    fetchNotesByCategories();
  }, [utilisateur]);

  const handleNoteAdd = async (nouvelleNote) => {
    try {
      console.log('Nouvelle note à ajouter :', nouvelleNote);
  
      const response = await noteService.addNote(utilisateur, nouvelleNote);
      console.log('Réponse après l\'ajout de la note :', response);
      navigate(`/note/${response.data.id_utilisateur}`);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la note', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h4>filtrer par:</h4>
      <DropdownButton id="dropdown-basic-button" title="Catégorie">
        <Dropdown.Item>
        </Dropdown.Item>
      </DropdownButton>
      {notes.map((note) => (
        <Note key={note.categorie} note={note} />
      ))}
    </div>
  );
};

export default NotePage;
