import { LoginPage } from '../../pages/login.page';
import { HomePage } from '../../pages/home.page';
import { Given, When, Then } from "cucumber";
import * as user from '../../../data/users.json';
const chai = require('chai').use(require('chai-as-promised')).use(require('chai-smoothie'));
const expect = chai.expect;

let loginPage: LoginPage;
let homePage: HomePage;
const userinfo = (<any>user);
 
Given("I go to the Vacations Management application", async() => {
    loginPage = await new LoginPage();
});
 
When("I enter my login credentials",  async() => {
    await loginPage.fillLoginData(userinfo);
});

When("I click the Sign In button",  async() => {
    await loginPage.clickSignInButton();    
});
 
Then("I should see the site Logo", async() => {
    homePage = await new HomePage();
    await expect(homePage.isLogoVisible()).eventually.equal(true);
});

Then("I should see the User Signed In element", async() => {
    await expect(homePage.isUserInformationTextVisible()).eventually.equal(true);
    await expect(homePage.getUserInformationText()).to.eventually.equal('Welcome gap, Logout');
});

Then("I should see the Successfull Signed In banner", async() => {
    await expect(homePage.isSignedInBannerVisible()).eventually.equal(true);
    await expect(homePage.getSignedInBannerText()).eventually.equal('Signed in successfully.');
});