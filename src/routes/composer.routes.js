import { Router } from "express";
import {composer_name, composer,composer_id} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los compositores
router.get('/all',composer);

//Muestra el compositor por nombre
router.get('/:name',composer_name);

//Muestra el compositor por nombre
router.get('/:id',composer_id);

export default router
