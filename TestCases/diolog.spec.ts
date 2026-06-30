import{test,expect,Locator} from "@playwright/test";


test("SimpleDialog", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const simpleAlert = page.locator("#alertBtn");
    await expect(simpleAlert).toBeVisible();

    //Register a Dialog before a click
    page.on('dialog', (dialog) => {

        const type  = dialog.type();
        console.log(type);
        expect('type').toBe("type");

        const msg = dialog.message();
        console.log(msg);
        expect(msg).toBe("I am an alert box!");

        dialog.dismiss();
        //dialog.accept();

    });

    await simpleAlert.click()
    await page.waitForTimeout(5000);
})                              


test("PromptAlert", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const promtAlert = page.locator("#promptBtn");
    await expect(promtAlert).toBeVisible();

    //Register Dialog box
    page.on('dialog',   (dialog) =>{

        const type = dialog.type;
        const msg = dialog.message;
        console.log("type:", type , " msg:", msg);
        dialog.accept("kunal");
    });

    await promtAlert.click();

    await page.waitForTimeout(5000);

})


test("dialog1", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

page.on("dialog", (dialog)=>{

    dialog.accept("kunal");
    dialog.dismiss();
})

})















