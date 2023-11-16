const express = require("express");
const cors = require("cors");
const utilisateur = require("../Node/modules/utilisateur")
const note = require("../Node/modules/note")
const app = express();
const port = 3000;


var allowedOrigins = ['http://localhost:3001',
    'http://127.0.0.1:3001'];

app.use(cors({
    origin: function(origin, callback){    // allow requests with no origin
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);    if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }    return callback(null, true);
    }
}));

app.get("/", (req, res) => {
    res.send("Trou duc!"); // super
});

// const utilisateur = require("./modules/utilisateur")
app.use("/utilisateur", utilisateur);

// Route de etudiant dans fichier note.js
app.use("/note", note);


app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port http://127.0.0.1:${port}/ !`);
    console.log(`Route utilisateur : http://127.0.0.1:${port}/utilisateur !`);
});