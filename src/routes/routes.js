import { Router } from "express";
import { instrumentname,username, musiclist, musiccomposer, piecename, namefamily } from "../controllers/indexRoutes.js"

const router=Router();

router.get('/api/music/instrument/:name',instrumentname);
router.get('/api/users/id/:id',username);
router.get('/api/music/all',musiclist);
router.get('/api/music/composer/:name',musiccomposer);
router.get('/api/music/name/:name',piecename);
router.get('/api/music/family/:family',namefamily);

//ANTIGUAMENTE= module.exports = router
export default router