const express = require("express");
const router = express.Router();
const utilisateurService = require("../services/utilisateurService")

// Route vers la page d'accueil
// /etablissement/
router.get("/", async (req, res) => {
    utilisateurService.fetchUtilisateur().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

// Route vers la page à propos
// /etablissement/parametre
router.get("/:utilisateur", (req, res) => {
    utilisateurService.fetchUtilisateurByID(req.params.utilisateur).then(result => {
        res.status(200)
        res.json(result[0]);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error " + err.sqlMessage})
    });
});

module.exports = router;
