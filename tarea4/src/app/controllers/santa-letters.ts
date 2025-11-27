import { Request, Response } from "express";
import { enviarCorreo } from '../services/santa-letter'

export function sendLetter(req: Request, res: Response){
    try{
        enviarCorreo((req.body)!.carta);
        return res.status(200).json({"success": true});
    } catch (error){
        return res.status(500).json({'message': (error as any).message});
    }
};