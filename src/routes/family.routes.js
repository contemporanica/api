import { Router } from "express";
import {family_name, family, family_id} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra la familia por nombre
router.get('/api/music/family/:family',family_name);

//Muestra todas las familias
router.get('/api/music/family/all',family);

//Muestra la familia por id
router.get('/api/music/family/:id',family_id);

export default router