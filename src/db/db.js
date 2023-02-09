import{createPool} from 'mysql2/promise'

export const pool=createPool({
    host: "localhost",
    user: 'root',
    password: "",
    database:"tienda",
    port: 3306
})

async function testConnection() {
    try {
      const connection = await pool.getConnection();
      console.log(`Conectado a la base de datos con ID de conexión ${connection.threadId}`);
      connection.release();
    } catch (error) {
      console.error(`Error al conectarse a la base de datos: ${error.stack}`);
    }
  }

  
testConnection();
