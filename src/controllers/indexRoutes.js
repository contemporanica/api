import { pool, getInstrumentos } from '../db/db.js'

//Muestra todas las piezas de la base de datos junto a todos sus datos correspondientes
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
        id_composer: row.pieza_id_composer,
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

//Muestra los datos de un compositor fitrado por nombre
export const composer_name = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM compositor WHERE nombre = '" + req.params.name + "'")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.id_compositor,
          nombre: row.nombre,
          biografia: row.biografia
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });

  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra los datos de un compositor fitrado por nombre
export const add_compositor = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    const map = new Map();
    for (let property in req.body) {
      if (property === 'email') {
        map.set(property, req.body[property]);
      };
      //console.log(property + ': ' + req.body[property]);
    }

    selectFrom('compositor', map)
      .then(resultado => {
        if(resultado){
          pool.execute("INSERT INTO compositor (nombre, email, password, biografia) VALUES ('" + req.body.nombre + "','" + req.body.email + "','" + req.body.password + "','" + req.body.biografia + "')")
          .then(rows => {
            res.json("Usuario añadido correctamente");
          })
          .catch(err => {
            console.error("Error executing the query: " + err.stack);
          });
        }else{
          res.json("Ya existe un usuario con ese email");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra un instrumento filtrado por nombre
export const instrument_name = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM instrumento WHERE nombre = '" + req.params.name + "'")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.idinstrumento,
          nombre: row.nombre,
          familia: row.familia
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });
  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra un instrumento filtrado por id
export const instrument_id = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM instrumento WHERE id_instrumento = '" + req.params.id + "'")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.id_instrumento,
          nombre: row.nombre,
          idfamilia: row.id_familia
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });
  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra un compositor filtrado por ID
export const composer_id = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM usuario WHERE id_compositor = '" + req.params.id + "'")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.idusuario,
          nombre: row.nombre,
          biografia: row.biografia
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });
  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra familia filtrada por ID
export const family_id = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM familia WHERE id_familia = '" + req.params.id + "'")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.id_familia,
          nombre: row.nombre
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });
  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra pieza por nombre
export const piece_name = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM pieza WHERE nombre = '" + req.params.name + "'")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.idpieza,
          nombre: row.nombre,
          datos: row.datos
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });
  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra familia por nombre
export const family_name = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM instrumento WHERE id_familia = '" + req.params.family + "'")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.idinstrumento,
          nombre: row.nombre,
          familia: row.id_familia
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });
  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra todos los instrumentos de la BBDD
export const instruments = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM instrumento")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.idinstrumento,
          nombre: row.nombre,
          familia: row.familia
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });
  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra todas los familias de la BBDD
export const family = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM familia")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.idfamilia,
          nombre: row.nombre
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });
  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

//Muestra todos los compositores de la BBDD
export const composer = (req, res) => {
  if (req.header('Authorization') === process.env.TOKEN) {
    pool.query("SELECT * FROM compositor")
      .then(rows => {
        const array = rows[0].map(row => ({
          id: row.idcompositor,
          nombre: row.nombre,
          biografia: row.biografia
        }));
        res.json(array);
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack);
      });
  } else {
    res.json('The request requires authorization. Check if your application has the corresponding API_KEY');
  }
}

function selectFrom(tabla, map) {
  var query = "SELECT * FROM " + tabla + " WHERE ";
  var index = map.size;
  map.forEach(function (value, key) {
    query += key + " = " + "'" + value + "' "
    if (index > 1) {
      query += 'AND '
    };
    index--;
  });
  //console.log('query: ' + query);
  return pool.query(query)
    .then(rows => {
      //console.log(rows[0]);
      if (rows[0][0] == null) {
        //console.log('no se ha encontrado na');
        return true;
      } else {
        //console.log('se ha encontrado algo');
        return false;
      }
    })
    .catch(err => {
      console.error("Error executing the query: " + err.stack);
    });
}
//Método para actualizar un compositor
export const composerUpdate = (req, res) => {
  //Si nos viene el email comprobamos que no exista
  if(req.body.email){
    const map = new Map(); // Crear un nuevo objeto Map vacío
    for (let property in req.body) { // Recorrer las propiedades del cuerpo de la solicitud
      if (property === 'email') { // Si la propiedad es 'email'
        map.set(property, req.body[property]); // Almacenar el valor de la propiedad en el objeto Map
      }
    }
    
    selectFrom('compositor', map) // Verificar si ya existe un usuario con el mismo correo electrónico
  
    .then(resultado => {
      if (resultado) { // Si el correo electrónico no está en uso
        const fields = Object.keys(req.body) // Obtener las claves (propiedades) del objeto req.body
          .filter(key => key !== 'id') // Filtrar las claves que no sean 'id'
          .map(key => `${key}='${req.body[key]}'`) // Crear un array con cadenas de texto con el formato "clave='valor'"
          .join(','); // Unir las cadenas de texto con una coma

        const query = `UPDATE compositor SET ${fields} WHERE id_compositor=${req.params.id}`; // Crear la consulta de actualización dinámicamente

        pool.execute(query) // Ejecutar la consulta de actualización
          .then(rows => {
            res.json(`OK: Se ha actualizado el compositor con id ${req.params.id} correctamente.`); // Enviar una respuesta de éxito al cliente
          })
          .catch(err => {
            console.error("Error executing the query: " + err.stack); // Imprimir en la consola el error ocurrido al ejecutar la consulta
          });
      } else {
        res.json("Ya existe un usuario con ese email"); // Enviar una respuesta de error al cliente
      }
    })
    .catch(error => {
      console.error(error); // Imprimir en la consola el error ocurrido al ejecutar la consulta
    });
  } else {
    const fields = Object.keys(req.body) // Obtener las claves (propiedades) del objeto req.body
          .filter(key => key !== 'id') // Filtrar las claves que no sean 'id'
          .map(key => `${key}='${req.body[key]}'`) // Crear un array con cadenas de texto con el formato "clave='valor'"
          .join(','); // Unir las cadenas de texto con una coma
        console.log(`UPDATE compositor SET ${fields} WHERE id_compositor=${req.params.id}`);
        const query = `UPDATE compositor SET ${fields} WHERE id_compositor=${req.params.id}`; // Crear la consulta de actualización dinámicamente

        pool.execute(query) // Ejecutar la consulta de actualización
          .then(rows => {
            res.json(`OK: Se ha actualizado el compositor con id ${req.params.id} correctamente.`); // Enviar una respuesta de éxito al cliente
          })
          .catch(err => {
            console.error("Error executing the query: " + err.stack); // Imprimir en la consola el error ocurrido al ejecutar la consulta
          });
  }
};