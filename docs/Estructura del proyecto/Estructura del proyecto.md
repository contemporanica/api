# Introducción
Este documento tiene como finalidad explicar cómo está estructurado el proyecto de la API de Contemporánica.
# Carpetas
Dentro de este proyecto encontramos las siguientes carpetas:

- **.github/workflows:** Esta carpeta tiene la configuración del GitHub Actions.
- **docs**: Carpeta que contiene toda la documentación del proyecto.
- **node\_modules**. Contiene todas las dependencias del proyecto
- **src/controllers**: Contiene el archivo indexRoutes que contiene las funciones que se usan para las respuestas de la API
- **src/db:** Contiene los archivos relacionados con la BBDD.
- **src/env**: Contiene el archivo donde se configuran las variables de entorno.
- **src/routes**: Contiene los diferentes endpoints de la API.
- **src/swagger:** Contiene el json que se utiliza para generar la documentación de Swagger.
- **src/app.js**: Es el script de inicialización de la API.

Además de las carpetas anteriores, encontramos los siguientes archivos:

- **.gitignore:** Contiene los archivos que no se tienen en cuenta cuando se realizan las subidas al repositorio.
- **docker-compose.yml:** Archivo que contiene la configuración necesaria para levantar la API y la BBDD con docker
- **Dockerfile:** Es un archivo de texto que contiene las instrucciones necesarias para crear una nueva imagen del contenedor
- **package-lock.json:** Es un archivo generado automáticamente cuando se instalan paquetes o dependencias en el proyecto
- **Package.json:** Contiene todos los metadatos acerca del proyecto tal como descripción, licencia, dependencias y scripts.
- **README.md:** Documento que contiene la documentación de la API.
