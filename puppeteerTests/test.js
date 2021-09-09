const puppeteer = require('puppeteer');
var browser;
var page;
var pages;

(async() => {
    browser = await puppeteer.connect({browserURL: "http://localhost:9222/json", timeout:1000});
    pages = await browser.pages();
    page = pages[0];
    await page.goto("https://www.apica.io");
    await page.goto("https://www.reddit.com");
    await page.goto("https://www.example.com");
    console.log("done")
    process.exit(0);
})()
