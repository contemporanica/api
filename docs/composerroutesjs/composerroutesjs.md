# Introducción
Este documento tiene como finalidad explicar el código de src/routes/composer.routes.js
# Contenido
Primero, se importan los módulos Router y los controladores indexRoutes.js. 

![](Aspose.Words.985a7e06-f289-47e8-924f-7bacbf936a18.001.png)

A continuación, se crea una constante router que contiene una instancia Router. 

![](Aspose.Words.985a7e06-f289-47e8-924f-7bacbf936a18.002.png)

Después, se muestra todos los compositores con la ruta "/all" mediante el método GET. 

![](Aspose.Words.985a7e06-f289-47e8-924f-7bacbf936a18.003.png)

Se puede mostrar el compositor por nombre y por id con los métodos GET correspondientes.

![](Aspose.Words.985a7e06-f289-47e8-924f-7bacbf936a18.004.png)

` `Finalmente, se añade un nuevo compositor con el método POST y la ruta "/api/music/composer/add". 

![](Aspose.Words.985a7e06-f289-47e8-924f-7bacbf936a18.005.png)

Se exporta el router como el elemento principal para generar el documento

![](Aspose.Words.985a7e06-f289-47e8-924f-7bacbf936a18.006.png)
