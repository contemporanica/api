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
- **healthcheck**: en este parametro le hemos asignado varios parámetros para que cuando el docker-compose se lance en el server se espera 5s y si falla que lo reintente 3 veces. Es un parámetro que srive sobre todo para eso. Hemos puesto como variables: **test**, **interval**, **timeout** y **retries**.

En resumen, este archivo de configuración define dos servicios de Docker: uno para la base de datos de Contemporánica y otro para la API de Contemporánica, y establece las opciones de configuración necesarias para que ambos servicios se ejecuten correctamente y se comuniquen entre sí.

# Problemas encontrados en el docker-compose.
En la creacion del docker-compose encontramos muchos problemas como por ejemplo, el mayor de estos fue que al realizar el comando para levantar ambos contenedores no se conectaban entre ellos aún teniendo bien el documento, encontramos el error y era que obliga a levantar el contenedor de la base de datos en el puerto por defecto de mysql "3306", gracias a esto podemos levantar esta base de datos y por como esta la api montada se conectan los conectedores entre ellos.