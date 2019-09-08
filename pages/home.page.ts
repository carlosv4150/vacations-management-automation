import { ElementFinder, $, browser, promise } from 'protractor';
import { protractor } from 'protractor/built/ptor';

const EC = protractor.ExpectedConditions;

export class HomePage{
    private logo: ElementFinder = $('#logo');
    private userInformationText: ElementFinder = $("#user_information span");
    private signedInBanner: ElementFinder = $('.flash_notice');

    public isLogoVisible(): promise.Promise<void> {
        const isPresent = EC.visibilityOf(this.logo);
        return browser.wait(isPresent, 5000);
    }
    public isUserInformationTextVisible(): promise.Promise<void> {
        const isVisible = EC.visibilityOf(this.userInformationText);
        return browser.wait(isVisible, 5000);
    }
    public isSignedInBannerVisible(): promise.Promise<void> {
        const isVisible = EC.visibilityOf(this.signedInBanner);
        return browser.wait(isVisible, 5000);
    }
    public getUserInformationText(): promise.Promise<string> {
        return this.userInformationText.getText();
    } 
    public getSignedInBannerText(): promise.Promise<string> {
        return this.signedInBanner.getText();
    }
    
}