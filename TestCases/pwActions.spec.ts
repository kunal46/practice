import{test,expect,Locator} from "@playwright/test";

test("InputBox", async({page})=>{

    await page.goto("https://www.autotrader.ca");

    const input1 = page.locator("#location");
    //const input2 = page.getByTestId("");  This is the built in locator
    //const input3 = page.getAttribute("");  This is locator method

    await expect(input1).toBeVisible();
    await expect(input1).toBeEnabled();
    await input1.fill("M5J 2X1");
    console.log(await input1.inputValue());    //it will return the input value entered
    //console.log(await input1.textContent());  it will return the dom value


    const search1 = page.locator("#search-mask-search-cta");
    const selfvalue = await search1.getAttribute("target");

    await expect.soft(selfvalue).toBe("_self");

    if (selfvalue != "_self"){

     console.log("wrong");

    }else{
        console.log("right");
    }
}),


test("Radio button", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const male = page.locator("#male");

    const valueCheck = await male.isChecked();

    await expect(valueCheck).toBe(false); 
    await expect(male).toBeChecked;

    await male.check();

    await page.waitForTimeout(7000);

}),

test("DropDown", async({page})=>{

    await page.goto("https://www.flipkart.com");

    const corss = page.locator(".b3wTlE");
    await corss.click();

    const serachflip = page.locator("input[class='nw1UBF v1zwn25']").first();
    await serachflip.click();
    await serachflip.fill("smart");

    await page.waitForTimeout(5000);



    const options = page.locator(".Swx5kP");
    const count = await options.count();

    //const giP = await options.allTextContents()
    
    //console.log("helllloo", await firstElement.allTextContents());



    for(let i=0; i<count ; i++)
        {

        const plz = await options.nth(i).textContent();
        //console.log("Good" , plz);

        if(plz==='smartphone')
        {
            await options.nth(i).click();
            break;

        }

       } 

    

    //console.log("helllloo", await firstElement.allTextContents());



    

    await page.waitForTimeout(5000);


    //const elements =  await firstElement.count();
    //await expect(firstElement).toHaveCount(8);
    //console.log("hello000000000000", elements);

}),


    test("Drop1", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com");

    const yt = page.locator("..oxd-select-text--after").nth(1);
    await expect(yt).toBe;




    })
