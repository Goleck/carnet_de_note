import React, { useState, useEffect } from 'react';
import noteService from '../Service/noteService';
import { useParams } from 'react-router-dom';
import Note from '../Component/Note';
import NouvelleNote from '../Component/NouvelleNote';
import { useNavigate } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  const [noteCategories, setNoteCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { utilisateur } = useParams();
  const navigate = useNavigate();

  const fetchNotesByUserId = async () => {
    try {
      const response = await noteService.fetchNotesByUserId(utilisateur);
      setNotes(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des notes', error);
    }
  };

  const fetchNoteCategories = async () => {
    try {
      const response = await noteService.fetchNoteCategories();
      setNoteCategories(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories', error);
    }
  };

  useEffect(() => {
    fetchNotesByUserId();
    fetchNoteCategories();
  }, [utilisateur]);

  const handleNoteAdd = async (nouvelleNote) => {
    try {
      const response = await noteService.addNote(utilisateur, nouvelleNote);
      setNotes([...notes, response.data]);
      fetchNotesByUserId()
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la note', error);
    }
  };

  const handleNoteDelete = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id_note !== noteId);
    setNotes(updatedNotes);
  };

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
    try {
      const response = await noteService.fetchNoteCategories(category);
      setNotes(response.data);
    } catch (error) {
      console.error(`Erreur lors de la récupération des notes pour la catégorie ${category}`, error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <br />
      <br />
    <br />
            <h1>Notes</h1>
      <DropdownButton id="dropdown-basic-button" title="Catégorie">
        <Dropdown.Menu>
          {noteCategories.map((category) => (
            <Dropdown.Item key={category} onClick={() => handleCategorySelect(category)}>
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </DropdownButton>
      <br />
      <NouvelleNote onNoteAdd={handleNoteAdd} />
      <br />
      {notes.map((note) => (
        <Note key={note.id_note} note={note} onDelete={handleNoteDelete} />
      ))}
    </div>
  );
};

export default NotePage;