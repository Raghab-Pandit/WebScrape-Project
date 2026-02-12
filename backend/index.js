const express= require('express');
const PORT= process.env.PORT || 3000;
const app= express();

const Puppeteer= require('puppeteer');

let Data=[];

const pupFunc= async ()=>{
    const browser= await Puppeteer.launch({headless: false});
    const page= await browser.newPage()
    await page.goto('https://quotes.toscrape.com/')

    await page.click('nav ul li a')
    await page.click('nav ul li a')
}

app.get('/', (req, res)=>{
    res.json('Hello! Express Here')
})

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
})