import{createPool} from 'mysql2/promise'

export const pool=createPool({
    host: "localhost",
    user: 'root',
    password: "",
    database:"contemporanica",
    port: 3306
})

async function connection() {
    try {
      const connection = await pool.getConnection();
      console.log(`Conectado a la base de datos con ID de conexión ${connection.threadId}`);
      connection.release();
    } catch (error) {
      console.error(`Error al conectarse a la base de datos: ${error.stack}`);
    }
  }

  export async function getInstrumentos(id_pieza){
    try {
      const result = await pool.query("SELECT i.nombre as instrumentoNombre,i.familia as instrumentoFamilia,i.id_instrumento as instrumentoID FROM pieza_instrumento pi INNER JOIN instrumento i ON i.id_instrumento=pi.id_instrumento WHERE id_pieza = " + id_pieza + "");
      const instrumentos = result[0].map(row => ({
        id: row.instrumentoID,
        familia:row.instrumentoFamilia,
        nombre: row.instrumentoNombre
      }));
      return instrumentos;
    } catch (err) {
      console.error("Error executing the query: " + err.stack);
      throw new Error("Unable to retrieve instrumentos");
    }
  }
  
connection();

