import puppeteer from "puppeteer";

export const pupFunc= async ()=> {
    const browser= await puppeteer.launch();
    const page= await browser.newPage(); 
    const sites=
    [
        {source: 'ABCNepal', link:'https://www.abcnepal.tv/posts/category/%e0%a4%96%e0%a5%87%e0%a4%b2%e0%a4%95%e0%a5%81%e0%a4%a6'}
        ,{source: 'Kantipur', link:'https://kantipurtv.com/sports'}
    ]
    let totalNews= [];

    for(const site of sites){
        let selector;
        if(site.source==='ABCNepal'){
            selector= 'div.banner-section div.uk-container div:first-child div:first-child div:nth-child(3) div div:first-child div:nth-child(2) div h3 a'
        }
        else if(site.source==='Kantipur'){
            selector= 'div.page-wrap section div.container div.row div:first-child div#loadContent article div.row div:first-child h4 a'
        }

        await page.goto(site.link)
        await page.waitForSelector(selector)
        const News= await page.evaluate((site, selector)=>{

            const newsz= document.querySelectorAll(selector)

            const info =[...newsz].map((news)=>({
                source: site.source,
                headline: news?.innerText || '',
                link: news?.href || ''
            }))

            return info
        }, site, selector)

        totalNews=[...totalNews, ...News]
}
    return totalNews;
}