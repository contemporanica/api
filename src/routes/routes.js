import { Router } from "express";
import { instrument_name, username, musiclist, musiccomposer, piecename, namefamily } from "../controllers/indexRoutes.js"

const router=Router();

router.get('/api/music/instrument/:name',instrument_name);
router.get('/api/users/all',username);
router.get('/api/users/id/:id',username_id);
router.get('/api/music/all',musiclist);
router.get('/api/music/composer/:name',musicComposer_name);
router.get('/api/music/name/:name',piece_name);
router.get('/api/music/family/:family',family_name);

//ANTIGUAMENTE= module.exports = router
export default router