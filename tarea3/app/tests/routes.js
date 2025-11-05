import { Router } from "express";
import { validate } from "../middleware/auth";

const router = Router();

router.use('/admin', validate);

router.get('/admin', (req, res) => {
    res.send({'mensaje':'ok'});
});

router.get('/', (req, res) => {
    res.send({'mensaje':'ok'});
});

export default router;