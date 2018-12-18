import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'form' : 'form',
    'email' : 'input[name="email"]',
    'password' : 'input[name="password"]',
    'checkbox' : 'input[name="rememberMe"]',
    'select' : '[name="group"]',
    'loginButton' : '[name="botonLogin"]'
  };

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css(this.selectors['title'])).getText();
  }


  navigateToLogin() {
      return browser.get('/login');
  }
  setEmail(userEmail) {
      element(by.css(this.selectors.email)).sendKeys(userEmail);
  }

  setPassword(userPassword) {
    element(by.css(this.selectors.password)).sendKeys(userPassword);
   }

   selectGroupOptionLastValue(selectGroupValue) {
    element(by.css(this.selectors.select)).click()
        .then(() =>  element.all(by.css('mat-option')).last().click());
  }

  logIn() {
    element(by.css(this.selectors.loginButton)).click();

  }
}
