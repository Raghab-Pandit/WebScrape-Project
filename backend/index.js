import express from "express";
import { pupFunc } from "./puppeteer/puppeteer.js";
import cors from 'cors'
const PORT= process.env.PORT || 3000;
const app= express();

app.use(cors())

app.get('/', (req, res)=>{
    res.json('Hello! Express Here')
})

app.get('/quotes', async (req, res)=>{
    res.send(await pupFunc())
})

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
})