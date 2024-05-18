exports.LoginPage = class LoginPage{
    constructor(page) {
        this.page = page;
        this.url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
        this.username = "//input[@name='username']";
        this.password = "//input[@name='password']"
        this.loginBtn = "//div[@class='oxd-form-actions orangehrm-login-action']//button";
        this.orangLink = "//a[contains(text(),'OrangeHRM, Inc')]";
        this.forgotPassBtn = "//div[@class='orangehrm-login-forgot']//p";
        this.resetUsername = "//div/input";
        this.resetBtn = "//div[@class='orangehrm-forgot-password-button-container']//button[2]";
        this.restCancelBtn = "//div[@class='orangehrm-forgot-password-button-container']//button[1]";
    }

    async goto (){
        await this.page.goto(this.url);
    }

    async login(username,password){
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();
    }

    async resetPassword(username){
        if(!username){
            await this.page.locator(this.restCancelBtn).click();
        }else{
        await this.page.locator(this.resetUsername).fill(username);
        await this.page.locator(this.resetBtn).click();
        }
    }

    async nextPage(context){
        const newPaePromise = context.waitForEvent("page");
        await this.page.locator(this.orangLink).click();
        const newPage = await newPaePromise;
    }
}