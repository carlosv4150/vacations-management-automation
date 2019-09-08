#features/test.feature
Feature: Users Creation
    As a user of vacations management
    I should be able to login into the application 
    In order to create a new user

    @gap
    Scenario: Login Validation
        Given I go to the Vacations Management application
        When I enter my login credentials
        And I click the Sign In button
        Then I should see the site Logo
        And I should see the User Signed In element
        And I should see the Successfull Signed In banner
    
    @gap
    Scenario: User Creation
        Given I am in the home page
        When I click the Create a new Employee option 
        And I fill all the Employee data
        And I click the Create Employee button
        Then I should see the message indicating the user creation
        And I should see the new user inside the users table
        