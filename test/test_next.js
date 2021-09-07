const puppeteer = require('puppeteer');
jest.setTimeout(10000);

describe('(Next test)',() => {
    let pages;
    let page;
    let browser;

    beforeAll(async() => {
    var retries = 10;
    var count = 0;
    do {
        try {
            browser = await puppeteer.connect({browserURL: "http://localhost:9222/json",timeout:1000});
            pages = await browser.pages();
            page = pages[0];
        } catch (Exception) {}
    } while (browser == undefined && count < retries);
    });

    test("Next Tests",async() => {
        try {
            await page.goto("https://www.reddit.com");
        } catch (e) {
            if (e instanceof puppeteer.errors.TimeoutError) {
                throw new Error("Failed to load https://www.reddit.com");
            }
        }
    });
});
