import { ElementFinder, $, $$, promise, browser, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';

const EC = protractor.ExpectedConditions;

export class UsersListPage{
    private userLead: ElementFinder;
    private createEmployeeLink: ElementFinder;
    private employeesTab: ElementFinder;

    constructor () {
        this.userLead = element(by.xpath('//td[contains(text(),"Carlos Vibanco")]'));
        this.createEmployeeLink = $('a[href^="/employees/new"]');
        this.employeesTab = $$('a[href^="/employees"]').get(0);
    }

    public isUserVisible(): promise.Promise<void> {
        const isPresent = EC.visibilityOf(this.userLead);
        return browser.wait(isPresent, 10000);
    }

    public async clickCreateNewEmployeeLink(): Promise<void> {
        await this.createEmployeeLink.click();
    }

    public async goToEmployeeListTable(): Promise<void> {
        await this.employeesTab.click();
    }
}