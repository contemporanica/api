import { Router } from "express";
import { instrumentname,username } from "../controllers/indexRoutes.js"

const router=Router();

router.get('/api/music/instrument/:nombre',instrumentname);
router.get('/api/users/id/:id',username);


//ANTIGUAMENTE= module.exports = router
export default router