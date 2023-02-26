// Importar módulos
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

const app = express();
const __dirname= dirname(fileURLToPath(import.meta.url));

// Configurar variables de entorno
dotenv.config({path:join(__dirname,'./env/.env')});


// Configurar la autorización
const authMiddleware = (req, res, next) => {
  // aquí va la lógica de autorización, por ejemplo:
  const token = req.headers.token;
  if (token === 'a944114ba4149684eb4e6b00e6093fdb') {
    next();
  } else {
    res.status(401).json({ message: 'The request requires authorization. Check if your application has the corresponding API_KEY' });
  }
};

// Configurar el motor de plantillas
app.set('view engine','ejs');
app.set('views',join(__dirname,'views'));

// Usar el middleware de autorización en las rutas que necesiten autorización
app.use('/api/music/family', authMiddleware, familyrouter);
app.use('/api/music/composer', authMiddleware, composerrouter);
app.use('/api/music', authMiddleware, pieccesrouter);
app.use('/api/music/instrument', authMiddleware, instrumentrouter);

// Configurar la carpeta Public para contenido estático
app.use(express.static(join(__dirname,'public')));

// Configurar la información de autorización en Swagger
swaggerDocument.securityDefinitions = {
  api_key: {
    type: 'apiKey',
    name: 'Authorization',
    in: 'header',
  },
};

// Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar el servidor
const port=process.env.PORT || 3000;
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PORT);
app.listen(port);
console.log("El servidor está escuchando en el puerto:",port);
