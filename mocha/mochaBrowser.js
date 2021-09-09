var expect = require("chai").expect;
var puppeteer = require('puppeteer');

describe("browser", function() {
    it("browser", async function() {
    let pages;
    let page;
    let browser;
    browser = await puppeteer.connect({browserURL: "http://localhost:9222/json",timeout:5000});
    pages = await browser.pages();
    page = pages[0];
	page.goto("https://www.example.com").then(res => expect(1+1).to.equal(2));
    await browser.close();
   });
});
