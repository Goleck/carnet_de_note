const express = require("express");
const router = express.Router();
const noteService = require("../services/noteService")

// Route vers la page d'accueil
// /etablissement/
router.get("/", async (req, res) => {
    noteService.fetchNote().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

// Route vers la page à propos
// /etablissement/parametre
router.get("/:note", (req, res) => {
    noteService.fetchNoteByID(req.params.note).then(result => {
        res.status(200)
        res.json(result[0]);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error " + err.sqlMessage})
    });
});

module.exports = router;