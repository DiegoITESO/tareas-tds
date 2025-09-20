import { Request, Response } from "express";
import axios from "axios";

export function getTopHeadlines(req: Request, res: Response){
    let url = `https://newsapi.org/v2/top-headlines?`;
    let flag = false;
    let params = {
        country: req.query.country,
        category: req.query.category,
        sources: req.query.sources,
        keyword: req.query.q
    };
    for(let [paramName, paramValue] of Object.entries(params)){
        if(paramValue){
            url += `${paramName}=${paramValue}&`;
            flag = true;
        }
    }
    if(!flag){
        return res.status(400).send("At least one parameter (country, category, sources, keyword) must be provided.");
    };
    url += `apiKey=${process.env.API_KEY}`;
    console.log(url);
    axios.get(url)
    .then((response) => {
        res.send(response.data);
    }).catch((error) => {
        res.status(500).send("Error fetching news: " + error.message + " URL: " + url);
    });
}

export function getSources(req: Request, res: Response){
    let url = `https://newsapi.org/v2/top-headlines/sources?`;
    let params = {
        country: req.query.country,
        category: req.query.category,
        language: req.query.language
    };
    for(let [paramName, paramValue] of Object.entries(params)){
        if(paramValue) url += `${paramName}=${paramValue}&`;
    }
    url += `apiKey=${process.env.API_KEY}`;
    axios.get(url)
    .then((response) => {
        res.send(response.data);
    }).catch((error) => {
        res.status(500).send("Error fetching news: " + error.message);
    });
}