import express from 'express'
import { Request, Response } from 'express'
import dotenv from 'dotenv'
import SantaLetterRouter from './app/routes/santa-letters'
dotenv.config();


const app = express();

app.use(express.json());

app.get('/ping', (req: Request, res: Response) => res.send("pong"));

app.use('/', SantaLetterRouter);

app.listen(process.env.PORT, () => {
    console.log("App is running");
});
