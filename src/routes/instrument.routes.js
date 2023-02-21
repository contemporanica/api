import { Router } from "express";
import { instrument_name, instruments} from "../controllers/indexRoutes.js"

const router=Router();

//Muestra todos los instrumentos
router.get('/api/music/instrument/all',instruments);

//Muestra instrumento por nombre
router.get('/api/music/instrument/:name',instrument_name);

export default router