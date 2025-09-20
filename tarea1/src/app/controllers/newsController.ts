import type { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();


export function getNews(req: Request, res: Response){
    let keyword = req.query.q;
    let url;
    if(keyword) url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.API_KEY}`
    else return res.status(400).send("The 'q' query parameter is required.");
    axios.get(url)
    .then((response) => {
        res.send(response.data);
    }).catch((error) => {
        res.status(500).send("Error fetching news: " + error.message);
    });
};
