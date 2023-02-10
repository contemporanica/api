import { Router } from "express";
import { musiclist, musiccomposer } from "../controllers/indexRoutes.js"

const router=Router();

router.get('/api/music/all',musiclist);
router.get('/api/music/composer/:name',musiccomposer);

//ANTIGUAMENTE= module.exports = router
export default router