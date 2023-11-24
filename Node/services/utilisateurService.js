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

const addUtilisateur = (utilisateur) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO utilisateur (pseudo, mdp) VALUES ('${utilisateur.pseudo}','${utilisateur.mdp}')`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const login = (pseudo, mdp) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM utilisateur WHERE pseudo = '${pseudo}' AND mdp = '${mdp}';`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchUtilisateur,
    fetchUtilisateurByID,
    addUtilisateur,
    login
}