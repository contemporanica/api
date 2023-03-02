# Cómo devolverá la API los elementos
La respuesta de la API será un JSON , donde se indicarán todos los campos de esos registros devueltos de la BBDD.

Las llamadas ahora mismo tienen el siguiente formato:

[https://contemporanica/api/music/all](https://contemporanica/api/allmusic)

Ahora mismo no está implementado, pero en un futuro tendremos que pasarle un token, que se solicitará llamando a la url siguiente que devolverá un token:

<https://contemporanica/api/token>
## Piezas
Para listar todas las piezas musicales:

[https://contemporanica/api/music/all](https://contemporanica/api/allmusic)

Para listar las piezas musicales filtradas por nombre:

<https://contemporanica/api/music/name/{nombrePieza>}

Para listar las piezas musicales filtradas por instrumento:

<https://contemporanica/api/music/instrument/{nombreInstrumento>}

Para listar las piezas musicales filtradas por compositor:

<https://contemporanica/api/music/composer/{nombreCompositor>}

Para listar las piezas musicales filtradas por familia de instrumentos:

<https://contemporanica/api/music/family/{nombreFamilia>}

Todas las llamadas relacionadas con las piezas devolverán la pieza completa con todos sus campos correspondientes:

- name
- id
- composer
- instruments
- family
## Usuarios
Para listar todos los usuarios:

[https://contemporanica/api/users/all](https://contemporanica/api/allmusic)

Para filtrar un usuario por nombre:

[https://contemporanica/api/users/name/{nombreUsuario}](https://contemporanica/api/music/user/name/{nombreUsuario})

Para filtrar un usuario por id:

[https://contemporanica/api/users/id/{idUsuario}](https://contemporanica/api/music/user/{nombreUsuario})

Estas llamadas devolverán los siguientes campos:

- name
- biography
- favorites
- id

Cuando vayamos generando las llamadas a la API iremos proporcionando los JSON de respuesta al front, además de implementarlo con Swagger