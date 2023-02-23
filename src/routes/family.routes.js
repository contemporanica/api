import { Router } from "express";
import {family_name, family, } from "../controllers/indexRoutes.js"

const router=Router();

//Muestra la familia por nombre
router.get('/api/music/family/:family',family_name);

//Muestra todas las familias
router.get('/api/music/family/all',family);

export default router