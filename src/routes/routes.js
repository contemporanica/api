import { Router } from "express";
import { instrumentname,username, musiclist, musiccomposer  } from "../controllers/indexRoutes.js"

const router=Router();

router.get('/api/music/instrument/:nombre',instrumentname);
router.get('/api/users/id/:id',username);
router.get('/api/music/all',musiclist);
router.get('/api/music/composer/:name',musiccomposer);

//ANTIGUAMENTE= module.exports = router
export default router