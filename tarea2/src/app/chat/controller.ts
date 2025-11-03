import type {Request, Response} from "express"

export function renderChat(req: Request, res: Response){
    res.render("chat", { title: "ChatGPI" });
}