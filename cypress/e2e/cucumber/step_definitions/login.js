const {
  Given,
  Then,
  When,
} = require("@badeball/cypress-cucumber-preprocessor");
const { default: LoginPage } = require("../../POM/LoginPage");
const loginPage = new LoginPage();

Given("I open the website", () => {
  loginPage.website;
});

When("I write my credentials uncorrectly", () => {
  cy.fixture("loginFailed.json").then((data) => {
    loginPage.login(data.username, data.password);
  });
});

Then("a bad credentials shows", () => {
  cy.get("#input-error").should("be.visible");
  cy.get("#msg").should("have.text", "Invalid credential ");
});

///////////////////////////////////////////////////////

When("I write my credentials correctly", () => {
  cy.fixture("loginCorrect.json").then((data) => {
    loginPage.login(data.username, data.password);
  });
});

Then("a homepage will be displayed", () => {
  cy.get("h1").should("have.text", "Welcome to Automation Test Platform ");
});
