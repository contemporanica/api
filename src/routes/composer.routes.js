import { Router } from "express";
import {composer_name, composer,composer_id} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los compositores
router.get('/api/music/composer/all',composer);


//Muestra el compositor por nombre
router.get('/api/music/composer/:name',composer_name);

//Muestra el compositor por nombre
router.get('/api/music/composer/:id',composer_id);

export default router
