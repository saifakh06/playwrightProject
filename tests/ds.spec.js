const {test,expect} = require("@playwright/test");
const {DashBoard} = require("../pages/Dashboard");
const {LoginPage} = require("../pages/LoginPage");
const {chromium} = require("playwright");

test.describe("Dashboard",()=>{
    let  db;
    let browser;
    let context;
    let page;
    test.beforeAll(async ()=>{
         browser = await chromium.launch();
         context = await browser.newContext();
         page = await context.newPage();
        const Lp = new LoginPage(page);
        await Lp.goto();
        await expect(Lp.page).toHaveTitle(await Lp.page.title());
        await Lp.login("Admin","admin123");
       

    
})// before All



test("Validating the dashboard",async()=>{
    db = new DashBoard(page);
    await db.employeesLeaveOnToday();
    await page.waitForTimeout(5000);
    //await db.quickLaunch("Apply Leave");
    
}) // 1st test.


});


