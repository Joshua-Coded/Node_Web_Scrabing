const puppeteer = require("puppeteer");


// the async function is a wrapper for the code that we want to run

async function run() {

// the browser variable is the puppeteer browser for lunching the browser

const browser = await puppeteer.launch();

// the page variable is the puppeteer page for opening a new page

const page = await browser.newPage();

// the goto function is for navigating to a specific url that we want to scrape

await page.goto("https://lets-camp.onrender.com/");

// await page.screenshot({path: 'example.png', fullPage: true});
// await page.pdf({path: 'example.pdf', format: 'A4'});
// const html = await page.content();
// console.log(html);

//const title = await page.evaluate(() => document.title);
//console.log(title);

//const text = await page.evaluate(() => document.body.innerText)
//console.log(text);

//const link = await page.evaluate(() => Array.from(document.querySelectorAll('a'), (e) => e.href))
//console.log(link);







// the browser.close() function is for closing the browser after we finish scraping
await browser.close();

}

run();