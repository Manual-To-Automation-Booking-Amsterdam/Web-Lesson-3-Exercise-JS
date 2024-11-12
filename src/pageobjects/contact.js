const { expect } = require('@playwright/test');

exports.ContactPage = class ContactPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.contactButton = page.locator("#contactButton");
    this.nameField = page.locator("#name");
    this.emailField = page.locator("#email");
    this.subjectField = page.locator("#subject");
    this.messageField = page.locator("#message");
    this.submitButton = page.locator("#submit");
  }

  async goto() {
    await this.page.goto('http://browserstacktraining.site');
  }

  async fillContactForm(name, email, subject, message) {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.subjectField.fill(subject);
    await this.messageField.fill(message);
    await this.submitButton.click();
  }
};