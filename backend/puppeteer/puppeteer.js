import puppeteer from "puppeteer";

export const pupFunc= async ()=> {
    const browser= await puppeteer.launch();
    const page= await browser.newPage(); 
    const sites=[{source:'NYTimes', link:"https://www.nytimes.com/athletic/"}, {source:'BBC',link:"https://www.bbc.com/sport"}]
    let totalNews= [];

    for(const site of sites){
        let selector;
        if(site.source==='BBC'){
            selector= 'div:nth-child(2) div:first-child div:first-child div:nth-child(2) div:first-child main#main-content div:nth-child(4) div:first-child div:first-child div:first-child div:first-child div:first-child div:first-child div:first-child h3 a span p span'
        }
        else if(site.source==='NYTimes'){
            selector= 'div:first-child div:first-child div:nth-child(2) main div:first-child div:nth-child(3) div:first-child div:first-child div:first-child div:first-child div:nth-child(2) div:first-child div div:first-child a div:first-child span:first-child div:first-child div:first-child div:first-child p'
         }
        await page.goto(site.link)
        await page.waitForSelector(selector)
        const News= await page.evaluate((site, selector)=>{

            const newsz= document.querySelectorAll(selector)

            const info =[...newsz].map((news)=>({
                source: site.source,
                headline: news?.innerText || '',
            }))

            return info
        }, site, selector)

        totalNews=[...totalNews, ...News]
}
    return totalNews;
}