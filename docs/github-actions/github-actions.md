# Introducción
Este documento tiene como finalidad explicar el como hemos realizado el despliegue del repositorio con el archivo **docker-publish.yml**.
# Contenido
Este archivo de Docker es un archivo YAML que define un flujo de trabajo de GitHub Actions que construye y publica una imagen de Docker en Docker Hub.

El nombre del flujo de trabajo es **ci** y se ejecuta cuando se cierra una solicitud de extracción (pull request) en GitHub.

El trabajo **docker** se ejecutará en una máquina virtual Ubuntu y consta de cuatro pasos:

**1.** Configurar **QEMU**, que es un emulador de procesador para ejecutar imágenes de Docker en arquitecturas diferentes.

**2.** Configurar **Docker Buildx**, que es una herramienta de Docker para crear imágenes de Docker de forma multiplataforma.

**3.** Iniciar sesión en Docker Hub utilizando las credenciales almacenadas como secretos en el repositorio de GitHub.

**4.** Construir la imagen de Docker y publicarla en Docker Hub, utilizando la acción **docker/build-push-action@v3**. Esta acción construye la imagen de Docker y la etiqueta con **contemporanica/api:latest** y **contemporanica/api:latest**, y luego la empuja a Docker Hub.

En resumen, este archivo de Docker automatiza el proceso de construir y publicar una imagen de Docker para la aplicación contemporanica/api en Docker Hub.