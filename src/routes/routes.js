import { Router } from "express";
import { musiclist } from "../controllers/indexRoutes.js"

const router=Router();

router.get('/',musiclist);

//ANTIGUAMENTE= module.exports = router
export default router