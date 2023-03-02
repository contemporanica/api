# Introducción
Este documento tiene como finalidad explicar el docker-compose.
# Contenido
Este archivo se llama **docker-compose.yml** y es un archivo de configuración de Docker Compose que permite definir y ejecutar múltiples contenedores de Docker de forma coordinada. En este caso, el archivo define dos servicios llamados **dbcontemporanica** y **apicontemporanica**.

El servicio **dbcontemporanica** es un contenedor de Docker que ejecuta una imagen llamada **contemporanica/bbdd:latest**. Esta imagen es un contenedor de la base de datos MySQL con la última versión de Contemporánica. Algunas de las opciones de configuración que se le pasan al contenedor son:

- **container\_name:** es el nombre del contenedor.
- **restart**: indica que el contenedor debe reiniciarse automáticamente en caso de fallo o cierre.
- **environment**: son las variables de entorno que se le pasan al contenedor, en este caso, las credenciales de la base de datos (MYSQL\_ROOT\_PASSWORD, MYSQL\_DATABASE, MYSQL\_USER y MYSQL\_PASSWORD).
- **ports**: indica que se deben mapear los puertos del contenedor (3306) al mismo puerto en el host.

Además, este servicio define un volumen llamado **db\_data** que se utiliza para almacenar los datos de la base de datos en el host, de manera que no se pierdan cuando se reinicie el contenedor.

El servicio **apicontemporanica** es otro contenedor de Docker que ejecuta una imagen llamada **contemporanica/api:latest**. Esta imagen es un contenedor de la API de Contemporánica con la última versión disponible. Algunas de las opciones de configuración que se le pasan al contenedor son:

- **container\_name**: es el nombre del contenedor.
- **ports**: indica que se deben mapear los puertos del contenedor (4000) al mismo puerto en el host.
- **depends\_on**: indica que este contenedor depende del servicio dbcontemporanica.
- **environment**: son las variables de entorno que se le pasan al contenedor, en este caso, las credenciales de la base de datos (DB\_HOST, DB\_USER, DB\_PASSWORD y DB\_PORT) y un token (TOKEN) utilizado por la API.

En resumen, este archivo de configuración define dos servicios de Docker: uno para la base de datos de Contemporánica y otro para la API de Contemporánica, y establece las opciones de configuración necesarias para que ambos servicios se ejecuten correctamente y se comuniquen entre sí.
