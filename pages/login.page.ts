import { ElementFinder, $, browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

const EC = protractor.ExpectedConditions;

export class LoginPage{
    private txtUserEmail: ElementFinder = $('#user_email');
    private txtPassword: ElementFinder = $('#user_password');
    private signInButton: ElementFinder = $('.submit');

    public async fillTxtUserEmail(userEmail: string): Promise<void> {
      await this.txtUserEmail.sendKeys(userEmail);
    }
    public async fillTxtPassword(password: string): Promise<void> {
      await this.txtPassword.sendKeys(password);
    }
    public async clickSignInButton(): Promise<void> {
      await this.signInButton.click();
    }
    public async fillLoginData(user: any): Promise<void> {
      const isPresent = await EC.visibilityOf(this.txtUserEmail);
      await browser.wait(isPresent, 15000);
      await this.fillTxtUserEmail(user.username);
      await this.fillTxtPassword(user.password);
    }
}