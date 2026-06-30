import {test, expect, Locator} from "@playwright/test"


test("tag if", async({page})=>{

    await page.goto("http://www.autotrader.ca");

    //const postalc = page.locator("//input[@class='input']"); //xpath
    const postalc = page.locator("input.input");

    await postalc.fill("M5J 2X1");


    const searchXpath = page.locator("//*[@id='search-mask-search-cta']");
    const serach01 = page.locator("//a[@id='asd']");
    const serach011 = page.locator("//a[@id='asd'][@class='asdas']");
    const search02 = page.locator("//button[contains(@id,'asdsad')]");
    const search03 = page.locator("//input[starts-with(@class,'hehe')]");
    const search04 = page.locator("");

    const search = page.locator("#search-mask-search-cta");


    const search1 = page.locator("a.sr-link hf-searchmask-form__filter__search-button hf-searchmask-form__filter__search-button--full-radius sr-button sr-button--primary"); 
    const serach2 = page.locator("a#search-mask-search-cta");
    const serach3 = page.locator("a.sr-link[id='search-mask-search-cta']");
    const search4 = page.locator("a[id='search-mask-search-cta']");
    const search5 = page.locator("a[id='search-mask-search-cta'][value='nobu']");


    await search.click();

})