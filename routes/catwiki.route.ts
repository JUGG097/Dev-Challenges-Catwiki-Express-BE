import express from "express";
import {
	showBreedList,
    showCatDetails,
    showCatPhotos,
    showTopTen
} from "../controllers/catwiki.controller";

const router = express.Router();

router.get("/topTen", showTopTen);
router.get("/details/:catId", showCatDetails);
router.get("/photos/:catId", showCatPhotos);
router.get("/breedlist", showBreedList);

export default router;