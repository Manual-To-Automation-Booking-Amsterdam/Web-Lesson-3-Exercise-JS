// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pageobjects/home');
const { ContactPage } = require('../pageobjects/contact');

var name = "Automation Tester";
var email = "automation.tester@training.com";
var subject = "Automation Exercise";
var message = "This is helping me to learn how to write better automation tests.";

var homePage
var contactPage

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page)
  contactPage = new ContactPage(page)
  await homePage.goto()
  await homePage.gotoContactPage()
});

test('contact us form', async ({ page }) => {
  contactPage.fillContactForm(name, email, subject, message)

  await expect(contactPage.messageField).toBeVisible();
});