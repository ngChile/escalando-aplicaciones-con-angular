import { browser, by, element } from 'protractor';

export class LoginPage {
    selectors = {
        'email': 'input[name="email"]',
        'password': 'input[name="password"]',
        'selectGroup': 'mat-select[name="group"]',
        'form' : 'form'
    };

    navigateToLogin() {
        return browser.get('/login');
    }

    setEmail(text) {
        element(by.css(this.selectors.email)).sendKeys(text);
    }

    setPassword(text) {
        element(by.css(this.selectors.password)).sendKeys(text);
    }

    selectGroupOptionLastValue() {
        element(by.css(this.selectors.selectGroup)).click()
        .then(() => element.all(by.css('mat-option')).last().click());
    }

    makeLogIn({ email, password }) {
        this.navigateToLogin();
        this.setEmail(email);
        this.setPassword(password);
        this.selectGroupOptionLastValue();

        element(by.css(this.selectors['form'])).submit();
    }
}
