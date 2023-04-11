class LoginPage {
  get website() {
    return cy.visit("localhost:4200");
  }
  get inputEmail() {
    return cy.get("#username");
  }
  get inputPassword() {
    return cy.get("#password");
  }

  get inputSubmit() {
    return cy.get("#kc-login");
  }
  login = (email, password) => {
    this.inputEmail.type(email);
    this.inputPassword.type(password);
    this.inputSubmit.click();
    cy.wait(1000);
  };
}
export default LoginPage;
