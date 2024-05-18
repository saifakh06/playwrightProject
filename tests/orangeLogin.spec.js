const {test,expect} = require("@playwright/test");
const {LoginPage} = require("../pages/LoginPage");

test("login page",async({context})=>{
    const page = await context.newPage();
    const login = new LoginPage(page);

   await login.goto();
  await  login.login("Admin","admin123");
   await login.nextPage(context);
});