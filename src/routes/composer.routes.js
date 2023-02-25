import { Router } from "express";
import {composer_name, composer,composer_id, add_compositor} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los compositores
router.get('/api/music/composer/all',composer);


//Muestra el compositor por nombre
router.get('/api/music/composer/:name',composer_name);

//Muestra el compositor por nombre
router.get('/api/music/composer/:id',composer_id);

//Añade un nuevo compositor
router.put('/api/music/composer/add',add_compositor);

export default router
