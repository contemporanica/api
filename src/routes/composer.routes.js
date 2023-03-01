import { Router } from "express";
import {composer_name, composer,composer_id, add_compositor, composerUpdate} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los compositores
router.get('/all',composer);

//Muestra el compositor por nombre
router.get('/:name',composer_name);

//Muestra el compositor por nombre
router.get('/:id',composer_id);

//Añade un nuevo compositor
router.post('/api/music/composer/add',add_compositor);

//Actualiza el compositor por id
router.post('/update/:id',composerUpdate);

export default router
