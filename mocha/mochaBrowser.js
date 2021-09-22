var expect = require("chai").expect;
var puppeteer = require('puppeteer');
var options = {
	executablePath: process.env.APICA_CHROME_PATH,
	headless: false,
	args: ['--disable-gpu', '--no-sandbox', '--remote-debugging-port=9222', '--disable-dev-shm-usage']
}

describe("browser", function() {
    it("browser", async function() {
    let pages;
    let page;
    let browser;
    browser = await puppeteer.launch(options);
    pages = await browser.pages();
    page = pages[0];
    await page.goto("https://www.example.com").then(res => expect(1+1).to.equal(2));
    await page.goto("https://www.reddit.com").then(res => expect(1+1).to.equal(2));
    await browser.close();
   });
});
