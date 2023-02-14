import { Router } from "express";
import { instrument_name, username, username_id, musiclist, composer_name, piece_name, family_name, instruments, family, composer} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los instrumentos
router.get('/api/music/instrument/all',instruments);

//Muestra instrumento por nombre
router.get('/api/music/instrument/:name',instrument_name);

//Muestra todos los usuarios
router.get('/api/users/all',username);

//Muestra usuario por ID
router.get('/api/users/id/:id',username_id);

//Muestra todas las piezas
router.get('/api/music/all',musiclist);

//Muestra el compositor por nombre
router.get('/api/music/composer/:name',composer_name);

//Muestra la pieza por nombre
router.get('/api/music/name/:name',piece_name);

//Muestra la familia por nombre
router.get('/api/music/family/:family',family_name);

//Muestra todas las familias
router.get('/api/music/family/all',family);

//Muestra todos los compositores
router.get('/api/music/composer/all',composer);

//ANTIGUAMENTE= module.exports = router
export default router