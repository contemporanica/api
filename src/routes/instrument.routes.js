import { Router } from "express";
import { instrument_id, instrument_name, instruments} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los instrumentos
router.get('/all',instruments);

//Muestra instrumento por nombre
router.get('/name/:name',instrument_name);

//Muestra instrumento por id
router.get('/id/:id',instrument_id);

export default router