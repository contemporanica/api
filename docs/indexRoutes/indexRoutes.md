# Introducción
Este documento tiene como finalidad explicar el archivo **src/controllers/indexRoutes.js**
# Contenido
Este archivo es un módulo de controladores que define funciones para manejar diferentes solicitudes HTTP en la API de Contemporánica.

En resumen, el controlador **musiclist** busca todas las piezas de música en la base de datos, junto con sus datos correspondientes, y devuelve una lista de objetos JSON que contienen información sobre cada pieza y los instrumentos asociados. **Instrument, family y composer** devuelven todos los resultados de una tabla específica

El controlador **composer\_name** devuelve información sobre un compositor con un nombre específico, filtrando los resultados de una consulta SQL en la tabla de compositores.

El controlador **add\_compositor** agrega un nuevo compositor a la tabla de compositores de la base de datos si se proporciona una clave de API válida.

Los controladores **instrument\_name, instrument\_id, family\_id, piece\_name y composer\_id** buscan información en la tabla correspondiente de la base de datos según el nombre o el ID de un instrumento o compositor específico y devuelven un objeto JSON con los resultados de la consulta.

# Comprobación de datos:

![](metodo_comprobación_datos.png)

Creamos un método de manera dinámica para la comprobación de los datos en las tablas para averiguar si ese dato existia ya en la tabla para evitar que hubieran campos duplicados en la Base de Datos, en la estructura de nuestra Base de Datos solamente tenemos controlado que sea único el email, así que usamos este metodo para:

**Editar los datos un Compositor**

![](editar_compositor.png)

**Añadir un nuevo Compositor**

![](añadir_compositor.png)

**Comprobar datos LOGIN**

![](login.png)