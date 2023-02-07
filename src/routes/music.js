var router = require('express').Router()
const music = new Map();

//Configuramos la conexión a la BBDD
const mysql = require("mysql2"); const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda"
}); 

//Nos conectamos con la BBDD
connection.connect(err => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to contemporanica database as id " + connection.threadId);
});

//Obtenemos todas las canciones de la BBDD
router.get('/', function (req, res) {
  connection.query("SELECT * FROM productos", (err, rows, fields) => {
     if (err) {
     console.error("Error executing the query: " + err.stack);
     return;
     } else {
      array = rows.map(row => ({ id: row.id, nombre: row.nombre, instrumentos: row.instrumentos, compositor: row.compositor}));
      res.json(array)
     }
    });
  
})

//Cerramos la conexión
//connection.end();


module.exports = router