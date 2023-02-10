//Importar módulos
//ANTIGUA= const express= require('express');
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/routes.js'
import dotenv from 'dotenv';

const app = express();
const __dirname= dirname(fileURLToPath(import.meta.url));

//Configurar variables de entorno
dotenv.config({path:join(__dirname,'./env/.env')})

const port=process.env.PORT || 3000;
app.listen(port);
console.log("El servidor está escuchando en el puerto:",port);

//Configurar el motor de plantillas
app.set('view engine','ejs');
app.set('views',join(__dirname,'views'));

app.use(indexRoutes);

//Configurar la carpeta Public para contenido estático
app.use(express.static(join(__dirname,'public')));