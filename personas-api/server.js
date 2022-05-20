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

let db, personas, vuelos
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    db = client.db("angulardb");
    console.log("Conectado a la DB");
    personas = db.collection("personas");
    vuelos = db.collection("vuelos");
});

app.get("/personas", (request, response) => {
    console.log("Se ejecuto la ruta personas...");
    personas.find().toArray((err, personas) => {
        if(err){
            console.log(err);
            response.status(500).json({error: err});
        }
        //response.status(200).json({personas: personas});
        response.status(200).json(personas);
    });
});

/*app.post("/personas", (request, response) => {
    console.log("Se ejecuto la ruta alumnos...");
    console.log(request.body);
    personas.insertOne(
        {
            name: request.body.name,
            apellido: request.body.apellido,
            ciudad: request.body.ciudad
        },
        (err, result) => {
            if(err) {
                console.log(err);
                response.status(500).json({error: err});
            }
            response.status(200).json({ok: true});
        }
    );
});*/

app.get("/vuelos", (request, response) => {
    console.log("Se ejecuto la ruta vuelos get...");
    vuelos.find().toArray((err, vuelos) => {
        if(err){
            console.log(err);
            response.status(500).json({error: err});
        }
        response.status(200).json(vuelos);
    });
});

app.post("/vuelos", (request, response) => {
    console.log("Se ejecuto la ruta vuelos post...");
    //console.log(request.body);
    let numeroVuelo = request.body.numeroVuelo;
    let fecha = request.body.fecha;
    let horario = request.body.horario;
    let origen = request.body.origen;
    let destino = request.body.destino;
    vuelos.insertOne(
        {
            numeroVuelo: numeroVuelo,
            fecha: fecha,
            horario: horario,
            origen: origen,
            destino: destino
        },
        (err, result) => {
            if(err) {
                console.log(err);
                response.status(500).json({error: err});
            }
            response.status(200).json({_id: result.insertedId, numeroVuelo: numeroVuelo, fecha: fecha, horario: horario, origen: origen, destino: destino});
        }
    );
});

// Cualquier puerto después de 1024
app.listen(3005, () => {
    console.log("Escuchando en el puerto 3005...");
});