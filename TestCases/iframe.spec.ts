import{test,expect,Locator} from "@playwright/test"                                               


test("Frames" , async({page})=>{

  await page.goto("https://qaplayground.dev/apps/iframe/?utm_source=chatgpt.com");

   const a =  page.frames();
   const b = a.length;

   console.log("total frames" ,b);
   ///////////////////////////////////////////////////////////////

const c = page.frame("frame1");

if(c){

    const d = c.childFrames();
    const framec = d.length;
    console.log("child frame" , framec);

    await d[0].locator("[class = 'btn btn-green-outline']").click();

    await page.waitForTimeout(1000);


}else{

     console.log("frame empty");
}


}),

test("Odd", async({page})=>{

    await page.goto("https://qaplayground.dev/apps/iframe/?utm_source=chatgpt.com")

    const frame1 = page.frame("frame1");

    if(frame1){
        const childFrame = frame1.childFrames()
        const len = childFrame.length;
        console.log("lenght", len);
        await childFrame[0].locator("a[class = 'btn btn-green-outline']").click();
        await page.waitForTimeout(1000);
    }
    else {

        console.log("Empty frame");
    }
}) 








 

















