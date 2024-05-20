exports.DashBoard = class DashBoard{

    constructor(page){
        this.page = page;
        this.pendingSelfReview = "(//div[@class='orangehrm-todo-list-item'])[1]//button";
        this.candidateToInterview = "(//div[@class='orangehrm-todo-list-item'])[2]//button";
        this.timeButton = "//div[@class='orangehrm-attendance-card-bar']//button";
        this.assignLeave = "//div[@class='oxd-grid-3 orangehrm-quick-launch']//button[@title='Assign Leave']";
        this.leaveList = "//div[@class='oxd-grid-3 orangehrm-quick-launch']//button[@title='Leave List']";
        this.timeSheets = "//div[@class='oxd-grid-3 orangehrm-quick-launch']//button[@title='Timesheets']";
        this.applyLeave = "//div[@class='oxd-grid-3 orangehrm-quick-launch']//button[@title='Apply Leave']";
        this.myLeave = "//div[@class='oxd-grid-3 orangehrm-quick-launch']//button[@title='My Leave']";
        this.myTimesheets = "//div[@class='oxd-grid-3 orangehrm-quick-launch']//button[@title='My Timesheet']";
        this.employeesOnLeaveTodaybtn = "//i[@class='oxd-icon bi-gear-fill orangehrm-leave-card-icon']";
        this.orangeHrmLink = "//a[contains(text(),'OrangeHRM, Inc')]";
        this.userDropDown = "//span[@class='oxd-userdropdown-tab']";
        this.leaveCheckBox = "//span[@class='oxd-switch-input oxd-switch-input--active --label-right']";
        this.leaveSaveBtn = "//button[@type='submit']";
        this.leaveCancelBtn = "//div[@class='oxd-form-actions']//button[@type='button']";
        this.leaveDailogCancelBtn = "//button[contains(text(),'×')]";
    }

    async quickLaunch(title){
        const allButton = await this.page.$$("//div[@class='oxd-grid-3 orangehrm-quick-launch']//button");
        for(const button of allButton){
            let btnAttribute = await button.getAttribute(title);
            if(btnAttribute === title){
                await button.click();
                return true;
            }
        }
    }

    async employeesLeaveOnToday(){
        await this.page.locator(this.employeesOnLeaveTodaybtn).click();
    }
}