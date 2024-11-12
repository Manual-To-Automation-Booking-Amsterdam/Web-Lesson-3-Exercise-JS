const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator("#loginButton");
    this.contactButton = page.locator("#contactButton");
    this.accessibilityButton = page.locator("#accessibilityButton");
  }

  async goto() {
    await this.page.goto('http://browserstacktraining.site');
  }

  async goToLoginPage() {
    await this.loginButton.click();
  }

  async gotoContactPage() {
    await this.contactButton.click();
  }

  async gotoAccessibilityPage() {
    await this.accessibilityButton.click();
  }
};