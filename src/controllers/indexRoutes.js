import { pool, getInstrumentos } from '../db/db.js'

export const musiclist = async (req, res) => {
  try {
    const musiclist = await pool.query(
      "SELECT p.id_pieza as pieza_id_pieza, p.id_usuario as pieza_id_usuario,p.nombre as pieza_nombre,p.datos as pieza_datos,u.nombre as usuario_nombre, u.lista_favoritos as usuario_lista_favoritos,u.biografia as usuario_biografia,u.id_usuario as usuario_id_usuario FROM pieza p INNER JOIN usuario u ON p.id_usuario=u.id_usuario"
    );

    const array = musiclist[0].map(async row => {
      const instrumentos = await getInstrumentos(row.pieza_id_pieza);
      return {
        id_pieza: row.pieza_id_pieza,
        nombrePieza: row.pieza_nombre,
        datosPieza: row.pieza_datos,
        id_usuario: row.pieza_id_usuario,
        instrumentos: instrumentos,
        nombreUsuario: row.usuario_nombre
      };
    });

    const resolvedArray = await Promise.all(array);
    res.json(resolvedArray);
  } catch (err) {
    console.error("Error executing the query: " + err.stack);
  }
}

export const musiccomposer = (req, res) => {
  pool.query("SELECT * FROM usuario WHERE nombre = '" + req.params.name + "'")
    .then(rows => {
      const array = rows[0].map(row => ({
        id: row.id_usuario,
        nombre: row.nombre,
        lista_favoritos: row.lista_favoritos,
        biografia: row.biografia
      }));
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

export const username = (req, res) => {
  pool.query("SELECT * FROM usuario WHERE id_usuario = '" + req.params.id + "'")
    .then(rows => {
      const array = rows[0].map(row => ({ 
        id: row.usuario, 
        nombre: row.nombre,
        favoritos: row.lista_favoritos,
        biografia: row.biografia
      }));  
      res.json(array);
    })
    .catch(err => {
      console.error("Error executing the query: " + err.stack);
    });

}