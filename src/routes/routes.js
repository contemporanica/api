import { Router } from "express";
import { instrumentname,username, musiclist, musiccomposer, piecename, namefamily, allinstruments } from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los instrumentos
router.get('/api/music/instrument/all',allinstruments);
//Muestra instrumento por nombre
router.get('/api/music/instrument/:name',instrumentname);
//Muestra usuario por ID
router.get('/api/users/id/:id',username);
//Muestra todas las piezas
router.get('/api/music/all',musiclist);
//Muestra el compositor por nombre
router.get('/api/music/composer/:name',musiccomposer);
//Muestra la pieza por nombre
router.get('/api/music/name/:name',piecename);
//Muestra la familia por nombre
router.get('/api/music/family/:family',namefamily);
export default router