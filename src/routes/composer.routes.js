import { Router } from "express";
import {composer_name, composer, composer_id, add_compositor, composerUpdate} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los compositores
router.get('/all',composer);

//Muestra el compositor por nombre
router.get('/name/:name',composer_name);

//Muestra el compositor por id
router.get('/id/:id',composer_id);

//Añade un nuevo compositor
router.post('/add',add_compositor);

//Actualiza el compositor por id
router.put('/update/:id',composerUpdate);

export default router
