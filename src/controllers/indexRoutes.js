import { pool, getInstrumentos } from '../db/db.js'

//Muestra todas las piezas de la base de datos junto a todos sus datos correspondientes
export const musiclist = async (req, res) => {
  try {
    const musiclist = await pool.query(
      "SELECT p.id_pieza as pieza_id_pieza, p.id_compositor as pieza_id_usuario,p.nombre as pieza_nombre,p.datos as pieza_datos,u.nombre as usuario_nombre, u.lista_favoritos as usuario_lista_favoritos,u.biografia as usuario_biografia,u.id_compositor as usuario_id_usuario FROM pieza p INNER JOIN compositor u ON p.id_compositor=u.id_compositor"
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
export const composer_name = (req, res) => { //Se realiza una consulta a la base de datos para obtener los datos del compositor cuyo nombre coincide con el valor pasado en el parámetro "name"
  //Se utiliza el objeto "pool" para ejecutar la consulta
    pool.query("SELECT * FROM compositor WHERE nombre = '" + req.params.name + "'") //Se ejecuta la consulta y se concatenan los valores de los parámetros para formar la cadena de consulta SQL
      .then(rows => { //Se mapea el resultado obtenido para seleccionar solo los campos que se quieren mostrar en la respuesta
        const array = rows[0].map(row => ({
          id: row.id_compositor,
          nombre: row.nombre,
          biografia: row.biografia
        }));
        res.json(array); //Se devuelve la respuesta en formato JSON con la información del compositor encontrado
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack); //Se muestra un mensaje de error si no se pudo ejecutar la consulta correctamente
      });
}

//Añade un nuevo Compositor
export const add_compositor = (req, res) => { // Define una función llamada "add_compositor" que recibe un objeto de petición (req) y un objeto de respuesta (res)
    const map = new Map(); // Crea un nuevo mapa vacío para almacenar las propiedades del cuerpo de la solicitud
    for (let property in req.body) { // Itera a través de las propiedades del cuerpo de la solicitud y agrega la propiedad 'email' al mapa
      if (property === 'email') {
        map.set(property, req.body[property]);
      };
      //console.log(property + ': ' + req.body[property]);
    }

    selectFrom('compositor', map) // Llama a la función "selectFrom" que devuelve un booleano con el resultado de la consulta SQL(true / false)
      .then(resultado => {
        if(resultado){ // Verifica la devolución del metodo
          // Ejecuta una consulta SQL INSERT para agregar un nuevo compositor a la base de datos
          pool.execute("INSERT INTO compositor (nombre, email, password, biografia) VALUES ('" + req.body.nombre + "','" + req.body.email + "','" + req.body.password + "','" + req.body.biografia + "')")
          .then(rows => {
            res.json("Usuario añadido correctamente"); // Envía una respuesta JSON con un mensaje de éxito si la consulta INSERT se ejecuta correctamente
          })
          .catch(err => {
            console.error("Error executing the query: " + err.stack); // Si hay un error en la consulta INSERT, registra el error en la consola
          });
        }else{
          res.json("Ya existe un usuario con ese email"); // Envía una respuesta JSON con un mensaje de error si ya existe un usuario con la dirección de correo electrónico proporcionada
        }
      })
      .catch(error => {
        console.error(error); // Si hay un error en la consulta SELECT, registra el error en la consola
      });
}

//Muestra un instrumento filtrado por nombre
export const instrument_name = (req, res) => { //Envía una consulta SQL a la base de datos para seleccionar los datos de la tabla "instrumento" filtrados por el parámetro "name" recibido en la solicitud
    pool.query("SELECT * FROM instrumento WHERE nombre = '" + req.params.name + "'")
      .then(rows => { //Crea un nuevo array con los datos seleccionados de la base de datos y lo asigna a la variable "array"
        const array = rows[0].map(row => ({
          id: row.idinstrumento,
          nombre: row.nombre,
          familia: row.familia
        }));
        res.json(array); //Envía la respuesta HTTP con el array de datos seleccionados en formato JSON
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack); //Muestra un mensaje de error en la consola si ocurre un error al ejecutar la consulta SQL
      });
}

//Muestra un instrumento filtrado por id
export const instrument_id = (req, res) => { //define una función que recibe una solicitud y una respuesta
    pool.query("SELECT * FROM instrumento WHERE id_instrumento = '" + req.params.id + "'") //ejecuta una consulta a la base de datos con el id de instrumento recibido en la solicitud
      .then(rows => { //si la consulta fue exitosa
        const array = rows[0].map(row => ({ //crea un arreglo con los resultados
          id: row.id_instrumento, //agrega el id del instrumento
          nombre: row.nombre, //agrega el nombre del instrumento
          idfamilia: row.id_familia //agrega el id de la familia del instrumento
        }));
        res.json(array); //envía una respuesta en formato JSON con el arreglo de resultados
      })
      .catch(err => { //si la consulta falla
        console.error("Error executing the query: " + err.stack); //imprime un mensaje de error en la consola
      });
}

//Muestra un compositor filtrado por ID
export const composer_id = (req, res) => { //Se define una función que recibe una solicitud y una respuesta como parámetros 
  pool.query("SELECT * FROM compositor WHERE id_compositor = " + req.params.id) //Se realiza una consulta a la tabla 'compositor' filtrando por el ID del compositor que se recibe en la solicitud
      .then(rows => { //Si la consulta se ejecuta correctamente, se procesa el resultado
        console.log(rows);
        const array = rows[0].map(row => ({ //Se convierte el resultado en un array de objetos
          id: row.id_compositor, //Se asigna el valor de la columna 'id_compositor' a la propiedad 'id' del objeto
          nombre: row.nombre, //Se asigna el valor de la columna 'nombre' a la propiedad 'nombre'
          email: row.email, //Se asigna el valor de la columna 'email' a la propiedad 'biografia' del objeto
          biografia: row.biografia //Se asigna el valor de la columna 'biografia' a la propiedad 'biografia' del objeto
        }));
        res.json(array); //Se devuelve el resultado en formato JSON
      })
      .catch(err => { //Si la consulta no se ejecuta correctamente, se muestra un mensaje de error en la consola
        console.error("Error executing the query: " + err.stack);
      });
}

//Muestra familia filtrada por ID
export const family_id = (req, res) => {
    pool.query("SELECT * FROM familia WHERE id_familia = '" + req.params.id + "'") //Selecciona todas las filas de la tabla "familia" donde el valor de la columna "id_familia" coincide con el parámetro de la solicitud "id"
      .then(rows => {
        const array = rows[0].map(row => ({ //Crea un array con los objetos obtenidos del resultado de la consulta
          id: row.id_familia, //Almacena el valor de la columna "id_familia" de la fila actual en la propiedad "id" del objeto actual
          nombre: row.nombre //Almacena el valor de la columna "nombre" de la fila actual en la propiedad "nombre" del objeto actual
        }));
        res.json(array); //Envía la respuesta al cliente con el array de objetos creado anteriormente en formato JSON
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack); //Si se produce un error durante la ejecución de la consulta, lo muestra en la consola
      });
}

//Muestra pieza por nombre
export const piece_name = (req, res) => {
    pool.query("SELECT * FROM pieza WHERE nombre = '" + req.params.name + "'") //Selecciona todas las filas de la tabla "pieza" donde el valor de la columna "nombre" coincide con el parámetro de la solicitud "name"
      .then(rows => {
        const array = rows[0].map(row => ({ //Crea un array con los objetos obtenidos del resultado de la consulta
          id: row.idpieza, //Almacena el valor de la columna "idpieza" de la fila actual en la propiedad "id" del objeto actual
          nombre: row.nombre, //Almacena el valor de la columna "nombre" de la fila actual en la propiedad "nombre" del objeto actual
          datos: row.datos //Almacena el valor de la columna "datos" de la fila actual en la propiedad "datos" del objeto actual
        }));
        res.json(array); //Envía la respuesta al cliente con el array de objetos creado anteriormente en formato JSON
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack); //Si se produce un error durante la ejecución de la consulta, lo muestra en la consola
      });
}

//Muestra familia por nombre
export const family_name = (req, res) => {
    pool.query("SELECT i.nombre as nombreInstrumento FROM `instrumento` i inner join familia f ON f.id_familia = i.id_familia WHERE f.nombre ='" + req.params.family+"'")
      .then(rows => {
        const array = rows[0].map(row => ({ //Crea un array con los objetos obtenidos del resultado de la consulta
          nombre: row.nombreInstrumento //Almacena el valor de la columna "nombre" de la fila actual en la propiedad "nombre" del objeto actual
        }));
        res.json(array); //Envía la respuesta al cliente con el array de objetos creado anteriormente en formato JSON
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack); //Si se produce un error durante la ejecución de la consulta, lo muestra en la consola
      });
}

//Muestra todos los instrumentos de la BBDD
export const instruments = (req, res) => {
    pool.query("SELECT * FROM instrumento")
      .then(rows => {
        const array = rows[0].map(row => ({ //Crea un array con los objetos obtenidos del resultado de la consulta
          id: row.idinstrumento,//agrega el id del instrumento
          nombre: row.nombre, //agrega el nombre del instrumento
          idfamilia: row.familia //agrega el nombre de la familia del instrumento
        }));
        res.json(array); //Envía la respuesta al cliente con el array de objetos creado anteriormente en formato JSON
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack); //Si se produce un error durante la ejecución de la consulta, lo muestra en la consola
      });
}

//Muestra todas los familias de la BBDD
export const family = (req, res) => {
    pool.query("SELECT * FROM familia")
      .then(rows => {
        console.log(rows);
        const array = rows[0].map(row => ({ //Crea un array con los objetos obtenidos del resultado de la consulta
          id: row.id_familia, //Almacena el valor de la columna "id_familia" de la fila actual en la propiedad "
          nombre: row.nombre //Almacena el valor de la columna "nombre" de la fila actual en la propiedad "nombre" del objeto actual
        }));
        res.json(array); //Envía la respuesta al cliente con el array de objetos creado anteriormente en formato JSON
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack); //Si se produce un error durante la ejecución de la consulta, lo muestra en la consola
      });
}

//Muestra todos los compositores de la BBDD
export const composer = (req, res) => {
    pool.query("SELECT * FROM compositor")
      .then(rows => {
        const array = rows[0].map(row => ({ //Crea un array con los objetos obtenidos del resultado de la consulta
          id: row.idcompositor,//Se asigna el valor de la columna 'idusuario' a la propiedad 'id' del objeto
          nombre: row.nombre, //Se asigna el valor de la columna 'nombre' a la propiedad 'nombre'
          biografia: row.biografia //Se asigna el valor de la columna 'biografia' a la propiedad 'biografia' del objeto
        }));
        res.json(array); //Envía la respuesta al cliente con el array de objetos creado anteriormente en formato JSON
      })
      .catch(err => {
        console.error("Error executing the query: " + err.stack); //Si se produce un error durante la ejecución de la consulta, lo muestra en la consola
      });
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