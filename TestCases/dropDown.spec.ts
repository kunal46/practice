import { test, expect } from '@playwright/test';
//import fs from 'fs';

//Reading from jason
 //const jsonPath = "tests/data/test-data.json";

 //const loginData = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));



test("SelectValue1", {tag: ['@regression','@sanity']}, async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const option = page.locator("#country option");
    await page.waitForTimeout(6000);
    const options = await option.all();

    console.log(await options[1].innerText());

    for (let o of options) { 
        console.log(await o.innerText());
    }
}),


test("SelectValue2", {tag: ['@regression', '@sanity']}, async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
    const option = page.locator("#country option");
    await page.waitForTimeout(6000);
    const options = await option.all();

    console.log(await options[1].innerText());

    for (let o of options) { 
        console.log(await o.innerText());
    }
}),

test("SelectValue3", {tag: ['@regression']}, async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
    const option = page.locator("#country option");
    await page.waitForTimeout(6000);
    const options = await option.all();

    console.log(await options[1].innerText());

    for (let o of options) { 
        console.log(await o.innerText());
    }
}),

test("SelectValue4", {tag: ['@regression']}, async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
    const option = page.locator("#country option");
    await page.waitForTimeout(6000);
    const options = await option.all();

    console.log(await options[1].innerText());

    for (let o of options) { 
        console.log(await o.innerText());
    }
}),

test("SelectValue5", {tag: ['@regression']}, async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
    const option = page.locator("#country option");
    await page.waitForTimeout(6000);
    const options = await option.all();

    console.log(await options[1].innerText());

    for (let o of options) { 
        console.log(await o.innerText());
    }
}),

test("SelectValue6", {tag: ['@regression']}, async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
    const option = page.locator("#country option");
    await page.waitForTimeout(6000);
    const options = await option.all();

    console.log(await options[1].innerText());

    for (let o of options) { 
        console.log(await o.innerText());
    }
}),

test("SelectValue7", {tag: ['@regression']}, async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
    const option = page.locator("#country option");
    await page.waitForTimeout(6000);
    const options = await option.all();

    console.log(await options[1].innerText());

    for (let o of options) { 
        console.log(await o.innerText());
    }
})





