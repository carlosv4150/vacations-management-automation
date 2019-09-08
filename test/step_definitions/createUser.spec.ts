import { Given, When, Then } from "cucumber";
import { HomePage } from '../../pages/home.page';
import { UsersCreationPage } from '../../pages/usersCreation.page';
import { UsersListPage } from '../../pages/usersList.page';

const chai = require('chai').use(require('chai-as-promised')).use(require('chai-smoothie'));
const expect = chai.expect;

let homePage: HomePage;
let usersCreationPage: UsersCreationPage;
let usersListPage: UsersListPage;
 
Given("I am in the home page", async() => {
    homePage = await new HomePage();
    await homePage.isLogoVisible();
});
 
When("I click the Create a new Employee option", async() => {
    usersListPage = await new UsersListPage();
    await usersListPage.clickCreateNewEmployeeLink();
});

When("I fill all the Employee data", async() => {
    usersCreationPage = await new UsersCreationPage();
    await usersCreationPage.fillEmployeeData();
});
When("I click the Create Employee button", async() => {
    await usersCreationPage.clickCreateEmployeeButton(); 
});
Then("I should see the message indicating the user creation", async() => {
    await expect(usersCreationPage.getEmployeeCreatedText()).eventually.equal('Employee was successfully created.');
}); 
Then("I should see the new user inside the users table", {timeout: 60*9000}, async() => {
    await usersListPage.goToEmployeeListTable();
    await expect(usersListPage.isUserVisible()).eventually.equal(true);
});