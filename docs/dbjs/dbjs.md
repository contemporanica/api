# Documentación del código Node.js en src/db/db.js
Este archivo contiene la configuración de base de datos MySQL de Contemporánica utilizando el paquete npm "mysql2". También incluye una función para obtener instrumentos desde la tabla "piezainstrumento" que se encuentra en la base de datos.


## Importaciones
- **createPool**: Función que se utiliza para crear un pool de conexiones de base de datos. La importación proviene del paquete npm "mysql2/promise".
- **dirname**: Función que se utiliza para obtener el nombre del directorio de la ubicación actual del archivo. La importación proviene del módulo "path".
- **join**: Función que se utiliza para unir segmentos de la ruta del archivo en una sola ruta completa. La importación proviene del módulo "path".
- **fileURLToPath**: Función que se utiliza para convertir una URL en formato de cadena en una ruta de archivo en formato de cadena. La importación proviene del módulo "url".
- **dotenv**: Paquete npm que se utiliza para cargar variables de entorno desde un archivo ".env".
## Variables
- **\_\_dirname:** Variable que se utiliza para almacenar el nombre del directorio de la ubicación actual del archivo.

Funciones

- **connection**: Función asíncrona que se utiliza para conectarse a la base de datos utilizando el pool de conexiones y obtener el ID de conexión de la conexión activa. Si hay un error al conectarse a la base de datos, se registra un mensaje de error.
- **getInstrumentos**: Función asíncrona que se utiliza para realizar una consulta a la base de datos para obtener instrumentos que están relacionados con una pieza específica. Si se encuentra algún error al realizar la consulta, se registra un mensaje de error.

Exportaciones

**pool**: objeto que representa el pool de conexiones creada utilizando createPool(). Contiene información sobre el host, usuario, contraseña, base de datos y puerto utilizados para conectarse a la base de datos.

**getInstrumentos**: función que se utiliza para obtener instrumentos relacionados con una pieza específica.

Uso

El archivo se utiliza para conectarse a la base de datos MySQL de Contemporánica y obtener información sobre instrumentos relacionados con una pieza específica. 

Para ello, primero debemos tener el archivo ".env" en el directorio "env" en la raíz del proyecto que contenga las variables de entorno necesarias para conectarse a la base de datos. 

Luego, se puede utilizar la función getInstrumentos() para obtener los instrumentos relacionados con una pieza específica. También se registra un mensaje en la consola indicando si se ha conectado correctamente a la base de datos.
