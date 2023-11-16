const conn = require("../services/database")

const fetchNote = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT id_note, titre, contenu, categorie FROM note;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const fetchNoteByID = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT id_note, titre, contenu, categorie FROM note WHERE id_note = ${id};`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchNote,
    fetchNoteByID
}