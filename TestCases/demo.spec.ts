import {test,expect,Locator} from "@playwright/test";

/*
test("title of the test", () =>{

})
*/

//fixture - global variable for eg page/ browser

test("Verify page title" , async ({page}) =>{

    await page.goto("http://www.autotrader.ca");
    let title:String = await page.title();
    console.log("Title" , title);
    await expect(page).toHaveTitle("New and Used Cars for Sale | AutoTrader.ca");

}),

test("Verify car test is displayed" , async({page})=>{

    await page.goto("http://www.autotrader.ca");
    const car = page.getByTestId("desktop-label");
    await expect(car).toBeVisible();
}),

test("verify image", async({page})=>{

    await page.goto("http://www.autotrader.ca");

    //Way 1
    const logo = page.getByAltText("AutoTrader.ca logo");
    await expect(logo).toBeVisible();

    //Way 2
    await expect(page.getByAltText("AutoTrader.ca logo")).toBeVisible();

    //way 3
    await expect(page.getByText(/Welcome\s +To+\s+Store/i)).toBeVisible();
}),

test("Xpath Demo for postalcode", async({page})=>{

    await page.goto("http://www.autotrader.ca");

    const postal = page.locator("//input[@class='input' and @id='location']");
    await postal.fill("M5J 2X1");

}),

test("Xpath Demo search button", async({page})=>{

    await page.goto("http://www.autotrader.ca");


//green locator is type and it is optional to define, also if you define then import locator
    const postalCode:Locator = page.locator("//input[@class='input' and @id='location']");

    await postalCode.fill("M5J 2x1");

    // Xpath = forward slash, tag name, square brackets, @, attribute, = , Single quote
    const search = page.locator("//*[@id='search-mask-search-cta']");

    await search.click();

}),
 

test("HashMaps", async({page})=>{

    const names = ["kunal","kunal","Luvi","Luvi","Arrosh"]

     //const he = names.length;

    const count: Record<string, number> = {} 

    for(const name of names){
        count[name] = (count[name] || 0) + 1;
    }

    console.log(count);

})