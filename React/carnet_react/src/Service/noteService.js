// noteService.js
import axios from 'axios';

function fetchNote() {
  return axios.get(`http://127.0.0.1:3000/note`);
}

function fetchNotesByUserId(id_utilisateur) {
  return axios.get(`http://127.0.0.1:3000/note/${id_utilisateur}`);
}


function addNote(id_utilisateur, nouvelleNote) {
  return axios.post(`http://127.0.0.1:3000/note/${id_utilisateur}`, nouvelleNote, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function fetchNoteCategories() {
  return axios.get(`http://127.0.0.1:3000/note/categorie/`);
}

function deleteNoteById(id_note) {
  return axios.delete(`http://127.0.0.1:3000/note/${id_note}`);
}

export default {
  fetchNote,
  fetchNotesByUserId,
  addNote,
  fetchNoteCategories,
  deleteNoteById
};


