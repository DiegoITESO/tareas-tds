import { Router } from "express";
import testRoutes from "tests/routes"
const router = Router();

router.use('/test', testRoutes)

export default router;