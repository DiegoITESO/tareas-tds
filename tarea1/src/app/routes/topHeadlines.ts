import { Router } from "express";
import { getTopHeadlines, getSources } from "../controllers/topHeadlinesController";

const router = Router();

router.get("/", getTopHeadlines);
router.get("/sources", getSources);

export default router;