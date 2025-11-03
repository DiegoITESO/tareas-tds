import { Request, Response } from 'express';

export function login(req: Request, res: Response) {
  res.send({ bbva: '1294-1216-9428-7584' });
};