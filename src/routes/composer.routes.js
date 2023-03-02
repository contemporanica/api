import { Router } from "express";
import {composer_name, composer, composer_id, add_compositor, composerUpdate, composerLogin} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los compositores
router.get('/all',composer);

//Muestra el compositor por nombre
router.get('/name/:name',composer_name);

//Muestra el compositor por id
router.get('/id/:id',composer_id);

//Comprueba si el usuario con su contraseña son correctos
router.get('/login',composerLogin);

//Añade un nuevo compositor
router.post('/add',add_compositor);

//Actualiza el compositor por id
router.put('/update/:id',composerUpdate);

export default router
