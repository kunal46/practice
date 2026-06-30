import { test, expect, chromium } from "@playwright/test"


test("Browser", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await browser.newPage();

    // creating 2 pages
    //page1.goto("https://google.com");
    //page2.goto("https://autotrader.ca");


    //capturing page
    page1.goto("https://testautomationpractice.blogspot.com/");

    //Way 1
    const [childPage] =
            await Promise.all([
            context.waitForEvent('page'), 
            page1.locator("button:has-test('New Tab')").click()]);
            await childPage.title(); 

    //way 2
    const pages = context.pages();
    await pages[0].goto("https://google.com");
    await pages[1].goto("https://facebook.com");


})

















