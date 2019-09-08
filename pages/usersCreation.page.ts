import { ElementFinder, $, $$, browser, promise } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import nodeRandomName = require('node-random-name');

const EC = protractor.ExpectedConditions;

export class UsersCreationPage{
    private newEmployeeTitle: ElementFinder;
    private firstName: ElementFinder;
    private lastName: ElementFinder;
    private email: ElementFinder;
    private identification: ElementFinder;
    private leaderName: ElementFinder;
    private selectYear: ElementFinder;
    private startWorkingYear: ElementFinder;
    private selectMonth: ElementFinder;
    private startWorkingMonth: ElementFinder;
    private selectDay: ElementFinder;
    private startWorkingDay: ElementFinder;
    private createEmployeeButton: ElementFinder;
    private employeeCreatedBanner: ElementFinder;
    private userData;

    constructor () {
        this.newEmployeeTitle = $('#content h1');
        this.firstName = $('#employee_first_name');
        this.lastName = $("#employee_last_name");
        this.email = $("#employee_email");
        this.identification = $("#employee_identification");
        this.leaderName = $("#employee_leader_name");
        this.selectYear = $("#employee_start_working_on_1i");
        this.startWorkingYear = $$("#employee_start_working_on_1i option").get(0);
        this.selectMonth = $("#employee_start_working_on_2i");
        this.startWorkingMonth = $$("#employee_start_working_on_2i option").get(0);
        this.selectDay = $("#employee_start_working_on_3i");
        this.startWorkingDay = $$("#employee_start_working_on_3i option").get(20);
        this.createEmployeeButton = $('.actions input');
        this.employeeCreatedBanner = $('#notice');
        this.userData = this.generateRandomUser();
    }

    public generateRandomUser() {
        const firstName: String = nodeRandomName({ first: true });
        const lastName: String = nodeRandomName({ last: true });
        const userJson = {
          FirstName : firstName,
          LastName : lastName,
          Email : firstName + '@gapautomation.com'
        };
        return userJson;
      }

    public isnewEmployeeSectionVisible(): promise.Promise<void> {
        const isVisible = EC.visibilityOf(this.newEmployeeTitle);
        return browser.wait(isVisible, 5000);
    }
    public async fillFirstName(): Promise<void> {
        await this.firstName.sendKeys('James');
    }
    public async fillLastName(): Promise<void> {
        await this.lastName.sendKeys('Smith');
    }
    public async fillEmail(): Promise<void> {
        await this.email.sendKeys(this.userData.Email)
    }
    public async fillIndentification(): Promise<void> {
        await this.identification.sendKeys('1234567890')
    }
    public async fillLeaderName(): Promise<void> {
        await this.leaderName.sendKeys('Carlos Vibanco')
    }
    public async selectStartWorkingDate(): Promise<void> {
        await this.selectYear.click();
        await this.startWorkingYear.click();

        await this.selectMonth.click();
        await this.startWorkingMonth.click();

        await this.selectDay.click();
        await this.startWorkingDay.click();
    }
    public async clickCreateEmployeeButton(): Promise<void> {
        await this.createEmployeeButton.click();
    }
    public async fillEmployeeData(): Promise<void> {
        await this.fillFirstName();
        await this.fillLastName();
        await this.fillEmail();
        await this.fillIndentification();
        await this.fillLeaderName();
        await this.selectStartWorkingDate();
    }
    public getEmployeeCreatedText(): promise.Promise<string> {
        return this.employeeCreatedBanner.getText();
    }
}