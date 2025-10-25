import { Router } from "express";
import { getData, postData } from "../controller/data.controller.js";

const router = Router();

router.get("/", getData);
router.post("/", postData);

export default router;