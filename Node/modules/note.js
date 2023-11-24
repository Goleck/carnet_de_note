const express = require("express");
const router = express.Router();
const noteService = require("../services/noteService");

router.get('/', async (req, res) => {
    try {
        const notes = await noteService.fetchNote();
        res.status(200).json(notes);
    } catch (error) {
        console.error('Erreur lors de la récupération des notes', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

router.get("/:note", async (req, res) => {
    try {
        const result = await noteService.fetchNotesByUserId(req.params.note);
        res.status(200).json(result);
    } catch (err) {
        console.error("Erreur lors de la récupération des notes", err);
        res.status(500).json({ message: "Erreur lors de la récupération des notes" });
    }
});


router.post("/:utilisateurID", async (req, res) => {
  try {
      const result = await noteService.addNote(req.params.utilisateurID, req.body);
      console.log("Résultat de l'ajout de la note :", result);
      res.status(200).json(result);
  } catch (err) {
      console.error("Erreur lors de l'ajout de la note", err);
      res.status(500).json({ "message": "Erreur lors de l'ajout de la note" });
  }
});


  router.delete("/:noteId", async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const result = await noteService.deleteNoteById(noteId);
  
      if (result) {
        res.status(200).json({ message: `Note avec l'ID ${noteId} supprimée avec succès` });
      } else {
        res.status(404).json({ message: `Note avec l'ID ${noteId} non trouvée` });
      }
    } catch (err) {
      console.error("Erreur lors de la suppression de la note", err);
      res.status(500).json({ message: "Erreur lors de la suppression de la note" });
    }
  });

  router.get('/:id_note', async (req, res) => {
    const { id_note } = req.params;
  
    try {
      const note = await db.getNoteById(id_note);
  
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
  
      res.json(note);
    } catch (error) {
      console.error('Error getting note by ID', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.put('/:id_note', async (req, res) => {
    const { id_note } = req.params;
    const { titre, contenu, categorie, date } = req.body;
  
    try {
      const updatedNote = await db.updateNote(id_note, { titre, contenu, categorie, date });
  
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
  
      res.json(updatedNote);
    } catch (error) {
      console.error('Error updating note', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  module.exports = router;
  
module.exports = router;
