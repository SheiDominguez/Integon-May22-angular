const { response, request, json } = require("express");
const cors = require('cors');
// Requerimos el modulo de express que instalamos
const express = require("express");
// Cliente de mongo
const mongo = require("mongodb").MongoClient;
let ObjectId = require('mongodb').ObjectId;
// Definimos una app de express
const app = express();
// Middleware
app.use(express.json()); // <- Permite el parseo del Body para los post
// Cors-Origin-Resource-Sharing (CORS)
app.use(cors({
    origin: '*'
}));

// Ruta por defecto donde corre mongodb a menos que se cambie a la hora de instalarlo
const url = "mongodb://localhost:27017";

let db, users
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    db = client.db("adminpro");
    console.log("Conectado a la DB");
    users = db.collection("users");
});


app.post("/signIn", (request, response) => {
    //console.log(request.body);
    users.find({name: request.body.name, password: request.body.password}).toArray((err, items) => {
        if(err){
            console.log(err);
            response.status(500).json({error: err});
        }
        response.status(200).json({users: items});
    });
});

app.post("/signUp", (request, response) => {
    console.log("Se ejecuto la ruta vuelos post...");
    //console.log(request.body);
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;
    users.insertOne(
        {
            name: name,
            password: password,
            email: email
        },
        (err, result) => {
            if(err) {
                console.log(err);
                response.status(500).json({error: err});
            }
            response.status(200).json({_id: result.insertedId, name: name, email: email, password: password});
        }
    );
});

// Cualquier puerto después de 1024
app.listen(3005, () => {
    console.log("Escuchando en el puerto 3005...");
});