const conn = require("../services/database")

const fetchUtilisateur = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT id_utilisateur, pseudo, mdp FROM utilisateur;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const fetchUtilisateurByID = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT id_utilisateur, pseudo, mdp FROM utilisateur WHERE id_utilisateur = ${id};`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchUtilisateur,
    fetchUtilisateurByID
}