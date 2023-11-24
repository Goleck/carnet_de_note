const express = require("express");
const router = express.Router();
const noteService = require("../services/noteService");

router.get("/:utilisateurID", async (req, res) => {
    try {
        const result = await noteService.fetchNoteCategories(req.params.utilisateurID, req.query.categorie);
        res.status(200).json(result);
    } catch (err) {
        console.error("Erreur lors de la récupération des catégories de notes V1", err);
        res.status(500).json({ message: "Erreur serveur lors de la récupération des catégories de notes" });
    }
  });
    
    router.get("/categorie", async (req, res) => {
      try {
          const result = await noteService.fetchNoteCategories(req.params.utilisateurID, req.query.categorie);
          res.status(200).json(result);
      } catch (err) {
          console.error("Erreur lors de la récupération des catégories de notes V2", err);
          res.status(500).json({ message: "Erreur serveur lors de la récupération des catégories de notes" });
      }
  });

  module.exports = router;