//Importar módulos
//ANTIGUA= const express= require('express');
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import familyrouter from './routes/family.routes.js';
import composerrouter from './routes/composer.routes.js';
import pieccesrouter from './routes/pieces.routes.js';
import instrumentrouter from './routes/instrument.routes.js';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/swagger.json' assert { type: "json" };
import bodyParser from 'body-parser';

const app = express();
const __dirname= dirname(fileURLToPath(import.meta.url));

//Configurar variables de entorno
dotenv.config({path:join(__dirname,'./env/.env')})
app.use(bodyParser.json());

const port=process.env.PORT || 3000;
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PORT);
app.listen(port);
console.log("El servidor está escuchando en el puerto:",port);

//Configurar el motor de plantillas
app.set('view engine','ejs');
app.set('views',join(__dirname,'views'));

app.use(familyrouter, composerrouter, pieccesrouter, instrumentrouter);

//Configurar la carpeta Public para contenido estático
app.use(express.static(join(__dirname,'public')));

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 