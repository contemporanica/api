import { Router } from "express";
import { instrumentname } from "../controllers/indexRoutes.js"

const router=Router();

router.get('/api/music/instrument/:nombre',instrumentname);


//ANTIGUAMENTE= module.exports = router
export default router