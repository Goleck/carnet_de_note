const conn = require("../services/database");

const fetchNote = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT id_note, titre, contenu, categorie, date FROM note`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const fetchNotesByUserId = (id_utilisateur) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT id_note, titre, contenu, categorie, date FROM note WHERE id_utilisateur = ${id_utilisateur} ORDER BY id_note DESC;`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const addNote = (id_utilisateur, note) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO note (titre, contenu, categorie, date, id_utilisateur)
            VALUES ('${note.titre}', '${note.contenu}', '${note.categorie}', '${note.date}', ${id_utilisateur});`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};


const fetchNoteCategories = (id_utilisateur) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT DISTINCT categorie FROM note WHERE id_utilisateur = ${id_utilisateur};`;

        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const deleteNoteById = (id_note) => {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM note WHERE id_note = ${id_note};`;
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const updateNote = async (id_note, updatedNote) => {
    try {
        let sql = `UPDATE note SET titre = ?, contenu = ?, categorie = ?, date = ? WHERE id_note = ?;`;
        let result = await conn.query(sql, [updatedNote.titre, updatedNote.contenu, updatedNote.categorie, updatedNote.date, id_note]);
        return result;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    fetchNote,
    fetchNotesByUserId,
    addNote,
    fetchNoteCategories,
    deleteNoteById,
    updateNote
};
