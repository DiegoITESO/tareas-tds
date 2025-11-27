import { Request, Response, Router } from "express";
import { sendLetter } from "../controllers/santa-letters";
import path from 'path';

const router = Router();

router.get('/santaletter', (req: Request, res: Response) => {
    console.log(path.join(__dirname, "..", "..", "views", "santaletter.html"));
    return res.sendFile(path.join(__dirname, "..", "..", "views", "santaletter.html"));
});

router.post('/api/santaletter', sendLetter);

export default router;