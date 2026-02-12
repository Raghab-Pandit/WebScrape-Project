import puppeteer from "puppeteer";

export const pupFunc= async ()=> {
    const browser= await puppeteer.launch();
    const page= await browser.newPage();

    let totalQuotes= [];

    for(let i=0;i<=10;i++){

        await page.goto(`https://quotes.toscrape.com/page/${i}/`)
//    await page.screenshot({ path: 'operation.jpeg' })

    let Quotes= await page.evaluate( ( ) =>{
        const pgTag= document.querySelectorAll(".container .row .col-md-8 .quote");

        const quot= [...pgTag].map(tags => ({
            Quote: tags.querySelector('span.text')?.innerText || '',
            Author: tags.querySelector('small.author')?.innerText || '',
            Tag: [...tags.querySelectorAll('.tags a')].map(tag => tag.innerText)
        }));
        return quot;

    })

    totalQuotes= [...totalQuotes, ...Quotes]
}

    await browser.close()
    return totalQuotes
}