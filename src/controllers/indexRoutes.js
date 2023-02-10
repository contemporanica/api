import { pool } from '../db/db.js'

export const musiclist = (req, res) => {
  pool.query("SELECT * FROM productos")
    .then(rows => {
      const array = rows[0].map(row => ({ id: row.id, nombre: row.nombre }));
      res.json(array);
    })
    .catch(err => {
      console.error("Error executing the query: " + err.stack);
    });
}

export const instrumentname = (req, res) => {
      pool.query("SELECT * FROM instrumento WHERE nombre = '" + req.params.nombre + "'")
        .then(rows => {
          const array = rows[0].map(row => ({ 
            id: row.id_instrumento, 
            nombre: row.nombre,
            familia: row.familia
          }));  
          res.json(array);
        })
        .catch(err => {
          console.error("Error executing the query: " + err.stack);
        });
    
}