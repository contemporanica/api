import { Router } from "express";
import {musiclist,piece_name} from "../controllers/indexRoutes.js"

const router=Router();


//Muestra todas las piezas
router.get('/all',musiclist);


//Muestra la pieza por nombre
router.get('/name/:name',piece_name);

//ANTIGUAMENTE= module.exports = router
export default router