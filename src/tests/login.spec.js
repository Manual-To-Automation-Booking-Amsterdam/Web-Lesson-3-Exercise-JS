// @ts-nocheck
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pageobjects/home');
const { LoginPage } = require('../pageobjects/login');

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  var username = "student";
  var password = "Password123";

  await homePage.goto();

  await homePage.goToLoginPage();

  await loginPage.fillLoginForm(username, password);

  // Expect a title "to contain" a substring.
  await expect(loginPage.loginMessage).toHaveText("Login successful!");
});